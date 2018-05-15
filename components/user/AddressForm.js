// import libraries
import React from 'react';
import Geosuggest from 'react-geosuggest';
import dynamic from 'next/dynamic';

// import local libraries
import validation from '../../validations/address';
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
      lat: 0,
      lng: 0,
      userId: 0,
      addressNotAvailable: false,
      address: '',
      latLng: null,
      userLocation: null,
      isLoading: false,
      errors: {},
    }
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
        
      } else {
        console.log("Ha ocurrido un error");
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSuggestSelect = (suggest) => {
    console.log("Datos mapa-->", suggest);
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
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'long_name',
      postal_code: 'short_name'
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
                    id="street_number"
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
                    id="route"
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
                  <label>Codigo Postal</label>
                  <InputText
                    error={errors.zipcode}
                    value={this.state.zipcode}
                    onChange={this.onChange}
                    type="text"
                    name="zipcode"
                    id="postal_code"
                    label=""
                  />
                </div>
                <div className="col-md-6">
                  <label>Agregar Notas (Opcional)</label>
                  <InputText
                    error={errors.description}
                    value={this.state.description}
                    onChange={this.onChange}
                    type="text"
                    name="description"
                    id="postal_code"
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
              <p>Por el moment no tenemos covertura en en tu zona.</p>
              <MapZone userLocation={this.state.userLocation}/>
            </div>
          }
          
        </form>
        <style jsx>{`
          label {
            font-size: 12px;
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
          }

          .suggestItem:hover {
            color: green;
            cursor: pointer;
          }

          .suggestItem {
            padding: 10px;
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

          .loadingSpinner {
            color: #18bc9c;
            font-size: 30px;
          }
        `}</style>
      </div>
    )
  }
}


export default AddressForm;