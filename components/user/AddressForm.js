// import libraries
import React from 'react';
import Geosuggest from 'react-geosuggest';
import dynamic from 'next/dynamic';

// import local libraries
import validation from '../../validations/address';
import validationBusiness from '../../validations/address-business';
import api from '../../api';
import { isPointAvailable } from '../../utils/geospatial';

// import components
import InputText from '../general/InputTextIdSmall';
import ButtonBlock from '../general/ButtonBlock';
import { flattenSelections } from 'apollo-utilities';
// import MapZone from '../map/MapZone';
const MapZone = dynamic(import('../map/MapZone'));

class AddressForm extends React.Component {

  constructor() {
    super();

    this.state = {
      street: '',
      area: '',
      zipcode: '',
      city: '',
      state: '',
      addressMap: '',
      description: '',
      phone: '',
      notes: '',
      lat: 0,
      lng: 0,
      userId: 0,
      addressNotAvailable: false,
      address: '',
      latLng: null,
      userLocation: null,
      isLoading: false,
      errors: {},
      business: [],
      businessId: 0,
      businessView: false,
    }
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const business = await api.business.getAll();
    this.setState({ business });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({ isLoading: true });
      const response = await api.user.createAddress(this.state);
      const { ok, address } = response;

      if(ok) {
        this.setState({ isLoading: false });
        if(this.props.afterSave) {
          this.props.afterSave();
        }

      }
    }
  }

  saveBusinessAddress = async (e) => {
    e.preventDefault();

    if(this.isValidBusiness()) {
      this.setState({ isLoading: true });

      const response = await api.user.createAddressWithBusiness(this.state);
      const { ok, address } = response;
      if(ok) {
        this.setState({ isLoading: false });
        if(this.props.afterSave) {
          this.props.afterSave();
        }

      }
    }
  }

  isValid() {
    const { errors, isValid } = validation(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  isValidBusiness() {
    const { errors, isValid } = validationBusiness(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSuggestSelect = (suggest) => {
    if(suggest) {
      if(isPointAvailable([suggest.location.lng, suggest.location.lat])) {
        this.setState({ address: suggest.description, latLng: suggest.location, lat: suggest.location.lat, lng: suggest.location.lng, addressMap: suggest.label, addressNotAvailable: false }, () => {
          this.fillInAddress(suggest.gmaps);
        });
      } else {
        this.setState({ addressNotAvailable: true, userLocation: [suggest.location.lng, suggest.location.lat], address: '' });
      }
    }
  }

  fillInAddress = (place) => {
    var componentForm = {
      // street_number: 'short_name',
      // route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'long_name',
      // postal_code: 'short_name'
    };

    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        let name = document.getElementById(addressType).name;
        this.setState({ [name]: val });
      }
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        { !this.state.businessView ?
        <form className="signupForm" onSubmit={this.onSubmit} autoComplete="off" >
          <div className="row">
            <div className="col-md-12">
              <label>Dirección</label>
              <Geosuggest
                placeholder="Escribe correctamente la dirección (Colonia, Ciudad, Estado)"
                onSuggestSelect={this.onSuggestSelect}
                suggestsClassName="suggest"
                suggestItemClassName="suggestItem"
                inputClassName="input control-input"
                country="mx"
              />
            </div>
          </div>

          { this.state.address &&
            <div id="rowFormAddress">
              <div className="row">
                <div className="col-md-6">
                  <label>Calle y No.</label>
                  <InputText
                    error={errors.street}
                    value={this.state.street}
                    onChange={this.onChange}
                    type="text"
                    name="street"
                    id=""
                    label=""
                  />
                </div>
                <div className="col-md-6">
                  <label>Colonia</label>
                  <InputText
                    error={errors.area}
                    value={this.state.area}
                    onChange={this.onChange}
                    type="text"
                    name="area"
                    id=""
                    label=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input type="hidden" name="state" id="administrative_area_level_1" value={this.state.state} />
                </div>
                <div className="col-md-6">
                  <input type="hidden" name="city" id="locality" value={this.state.city} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Teléfono</label>
                  <InputText
                    error={errors.phone}
                    value={this.state.phone}
                    onChange={this.onChange}
                    type="text"
                    name="phone"
                    id=""
                    label=""
                  />
                  <p className="lbl-notes">Utilizado solo para notificarte algo sobre tu pedido.</p>
                </div>
                <div className="col-md-6">
                  <label>Instrucciones y Datos adicionales (Opcional)</label>
                  <InputText
                    error={errors.notes}
                    value={this.state.notes}
                    onChange={this.onChange}
                    type="text"
                    name="notes"
                    id=""
                    label=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <ButtonBlock
                    text="Guardar"
                    buttonStyle="btn btn-primary btn-large btn-block"
                    loading={this.state.isLoading}
                  />
                </div>
              </div>
            </div>
          }

          { this.state.addressNotAvailable &&
            <div>
              <p><strong>Aún no realizamos entregas en tu dirección.</strong></p>
              <MapZone userLocation={this.state.userLocation}/>
            </div>
          }

          <hr />
          <a className="#" className="btn-link" onClick={() => this.setState({ businessView: true })}>Servicio a empresas afiliadas</a>
          <p className="lbl-notes2">*Esta opción es para personas que trabajan en alguna empresa afiliada a eathouse.</p>
        </form> :

        <form className="signupForm" onSubmit={this.saveBusinessAddress} autoComplete="off" >
          <div className="row">
            <div className="col-md-12">
              <p>Si trabajas en una empresa afiliada a eathouse registra la siguiente información para que puedas aprovechar los descuentos y promociones que tenemos para ti.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Empresa de entrega</label>
              <select className="form-control" name="businessId" onChange={this.onChange} value={this.state.businessId}>
                <option>Seleccionar</option>
                { this.state.business.map((item) => (
                  <option value={item.id} key={item.id}>{item.name}</option>
                )) }
              </select>
              <br />
            </div>
          </div>
          <div id="rowFormAddress">
              <div className="row">
                <div className="col-md-12">
                  <label>Teléfono móvil</label>
                  <InputText
                    error={errors.phone}
                    value={this.state.phone}
                    onChange={this.onChange}
                    type="text"
                    name="phone"
                    id=""
                    label=""
                  />
                  <p className="lbl-notes">Utilizado solo para notificarte sobre tu pedido.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label>Datos adicionales (Opcional)</label>
                  <InputText
                    error={errors.notes}
                    value={this.state.notes}
                    onChange={this.onChange}
                    type="text"
                    name="notes"
                    id=""
                    label="Instrucciones de entrega/Dpto./Oficina/Piso"
                  />
                </div>
              </div>


              <div className="row">
                <div className="col-md-4">
                  <ButtonBlock
                    text="Guardar"
                    buttonStyle="btn btn-primary btn-large btn-block"
                    loading={this.state.isLoading}
                  />
                </div>
                <div className="col-md-4">
                  <ButtonBlock
                    text="Regresar"
                    buttonStyle="btn btn-default btn-large btn-block"
                    click={() => this.setState({ businessView: false })}
                  />
                </div>
              </div>
            </div>
        </form>
        }

        <style jsx global>{`
          label {
            font-size: 12px;
          }

          .lbl-notes {
            margin-top: 20px;
            font-size: 11px;
            color: #79776B;
          }

          .input {
            -moz-border-radius: 2px;
            -webkit-border-radius: 2px;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #c4c4c4;
            color: #565a5c;
            padding: 12px 10px;
            width: 100%;
            font-size: 14px;
          }

          .input:disabled {
            background: #dddddd;
          }

          .control-input{
            border: 1px solid #ccc;
          }

          .containerButton {
            padding: 10px 0px;
          }

          .geosuggest__suggests--hidden {
            max-height: 0;
            overflow: hidden;
            border-width: 0;
          }

          .suggest {
            border: 1px solid #DDD;
            padding: 0px;
          }

          .suggestItem:hover {
            cursor: pointer;
            background-color: rgb(250, 250, 250);
          }

          .suggestItem {
            padding: 15px 10px;
            list-style: none;
          }

          .inputCity {
            font-size: 24px;
            width: 100%;
            padding: 0px 10px;
            padding-left: 5px;
            line-height: 35px;
            border: none;
            color: #565a5c;
            border: none;
            border-bottom: 1px solid #DDDDDD !important;
          }

          .inputCity:focus {
            outline: 0px;
            border-bottom: 2px solid #ff1940 !important;
          }

          .form-group {
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 5rem;
            width: 100%;
          }

          .autocomplete-container {
            border-bottom: honeydew;
            border-left: honeydew;
            border-right: honeydew;
            border-top: 1px solid #e6e6e6;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            border-radius: 0 0 2px 2px;
          }

          .lbl-notes2 {
            font-size: 11px;
            color: #79776B;
            padding: 5px 0px;
          }

          .loadingSpinner {
            color: #18bc9c;
            font-size: 30px;
          }

          .btn-link {
            padding: 0px 0 !important;
            font-size: 14px;
            font-weight: bold;
            color: #B9B9AF;
            cursor: pointer;
            display: inline-block;
            text-decoration: underline;
          }
        `}</style>
      </div>
    )
  }
}


export default AddressForm;
