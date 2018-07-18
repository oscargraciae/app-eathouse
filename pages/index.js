// import libraries
import React from 'react';

// import local libraries
import defaultPage from '../hocs/defaultPage';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import api from '../api';
import { logEvent } from '../config/analytics';

// import components
import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';
import Dish from '../components/home/Dish';
import ModalMapZone from '../components/general/ModalMapZone';

class Index extends React.Component {
  static getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(loggedUser) {
      redirect('/menu', context);
    }
    return {};
  }

  state = {
    email: '',
    errors: {},
    dishes: [],
    isShowModalZone: false,
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const dishes = await api.dish.getAll();
    this.setState({ dishes: dishes.slice(0,4) });
  }

  onModalClose = () => {
    this.setState({ isShowModalZone: false });
  }

  render() {
    return (
      <Layout>
        <ModalMapZone show={this.state.isShowModalZone} onHide={this.onModalClose} />
        <main>
          {/* Hero */}
          <section className="Hero onlyMobile">
            <div className="container">
              <div className="Hero-Box">
                <h1>Comer bien todos los días, ¡es posible!</h1>
                <h2>Comidas ricas y saludables, entregadas directamente a la puerta de tu oficina. <br /><small>Envío Gratis.</small></h2>
                {/* <h2>Ordena para hoy o programa tú semana.</h2> */}
                <div className="signupForm">
                  <a id="btnOrdeneYa" href="/menu-public" className="btn btn-primary btn-large btn-block">¡Ordena ya!</a>
                  <a className="lnk-default" onClick={() => this.setState({ isShowModalZone: true })}>Ver zonas de entrega disponibles</a>
                </div>
              </div>
            </div>
          </section>

          <section className="Hero-mobile onlyWeb">
            <div className="container">
              <div className="Hero-Box">
                <h1>Comer bien todos los días, ¡es posible!</h1>
                <h2>Comidas ricas y saludables, entregadas directamente a la puerta de tu oficina. <br /><small>Envío Gratis.</small></h2>
                {/* <h1>Saludable y delicioso directo a tu casa u oficina. <br /><small>Envío Gratis.</small></h1> */}
                {/* <h2>Ordena para hoy o programa tú semana.</h2> */}
                <div className="signupForm">
                  <a href="/menu-public" id="btnMobileOrdeneYa" className="btn btn-primary btn-large btn-block">¡Ordena ya!</a><br/>
                  <a href="https://play.google.com/store/apps/details?id=com.eathouse" className="btn btn-default btn-large btn-block btnDownloadAndroid">Descarga eathouse Gratis</a>
                  <div className="lbll-default">*Versión para Android</div>
                  {/* <a href="https://play.google.com/store/apps/details?id=com.eathouse" className="btn-app">
                    <img src="/static/google-play-badge.png" className="android" />
                  </a> */}
                  {/* <a href="/" className="btn-app">
                    <img src="https://play.google.com/store/apps/details?id=com.eathouse" className="ios" />
                  </a> */}
                  {/* <a className="lnk-default" onClick={() => this.setState({ isShowModalZone: true })}>Ver zonas de entrega disponibles</a> */}
                </div>
              </div>
            </div>
            <div className="HeroMobile-image"></div>
          </section>

          <section className="how-it-works">
            <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <div className="about-us-title">Somos el primer <strong>restaurante online</strong>, con <strong>nuestra propio menú y nuestro propio servicio</strong> en Nuevo León</div>
                    {/* <p className="about-us-subtitle">Nuestro principal objetivo es llenarte el estomago y brindarte una buena experiencia.</p> */}
                  </div>
                </div>
              </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="how-it-works">
            <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <h2>CÓMO FUNCIONA</h2>
                    <div className="row">
                      <div className="col-md-4 how-works-steps">
                        <p className="how-works-title">Elige tu comida</p>
                        <p className="how-works-description">Selecciona de una variedad de platillos que tenemos disponibles.</p>
                      </div>
                      <div className="col-md-4 how-works-steps">
                        <p className="how-works-title">Ordena o programa tus platillos</p>
                        <p className="how-works-description">Ordena tus platillos o programa por adelantado para la semana. Disponible de Lunes a Viernes.</p>
                      </div>
                      <div className="col-md-4 how-works-steps">
                        <p className="how-works-title">Disfruta tu comida</p>
                        <p className="how-works-description">Tu orden será entregada a la puerta de tu casa u oficina entre 12:30 pm y la 1:30 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          {/* WHY */}
          <section className="why-container">
            <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <h2>¿Qué es eathouse?</h2>
                    <p>En eathouse preparamos comidas ricas, saludables, con costos accesibles y entregadas directamente a la puerta de tu casa u oficina. Come como si estuvieras en casa. Agenda tus comidas para mañana o para el resto de la semana.</p>
                  </div>
                </div>
              </div>
          </section>

          <section className="how-it-works">
            <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <h2>Algunos de nuestros platillos</h2>
                    <div className="row">
                      { this.state.dishes.map((item, index) => {
                        return (
                          <Dish key={item.id} {...item} />
                        )
                      }) }
                    </div>
                  </div>
                </div>

                <div className="signupForm onlyMobile">
                  <a id="btnHomeVerMenu" href="/menu-public" className="btn btn-primary btn-large">Ver menu</a>
                  <a className="lnk-default" onClick={() => this.setState({ isShowModalZone: true })}>Ver zonas de entrega disponibles</a>
                </div>
              </div>
          </section>

          <section className="container-apps">
            {/* DESCARGAR APP */}
            <div className="row info-phones">
              <div className="col-md-4">
                <h3>Descarga eathouse en tu celular</h3>
                <p>Descargue nuestra aplicación móvil para hacer tu orden más fácil y más rápido.</p>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.eathouse" className="btn-app btnDownloadAndroid">
                  <img src="/static/google-play-badge.png" className="android-phone" />
                </a>
                {/* <a href="https://play.google.com/store/apps/details?id=com.eathouse" className="btn-app">
                  <img src="/static/app_store_badge.svg" className="ios-phone" />
                </a> */}
              </div>
              <div className="col-md-3">
                <img src="static/eathouse-phone.png" height="400" />
              </div>
            </div>
          </section>

          <style jsx>{`
            body {
              background: white;
            }
            .Hero {
              background: url('static/hero-edit-2.jpg');
              /* background: white; */
              height: 445px;
              /* border-bottom: 10px solid #FF7901; */
              background-size: cover;
              /* margin-bottom: 100px; */
            }

            .Hero-Box {
              position: absolute;
              /* background-color: white; */
              /* top: 170px; */
              top: 110px;
              margin-right: auto;
              margin-left: auto;
              padding: 5px 30px 25px 30px;
              width: 95%;
              max-width: 470px;
              /* box-shadow: 0 2px 10px 5px rgba(0,0,0,0.2); */
              left: 35px;
            }

            .about-us-title {
              font-size: 32px;
              margin-bottom: 40px;
              font-weight: 500;
              text-transform: uppercase;
              padding: 0px 200px;
              padding-top: 80px;
            }

            .about-us-title > strong {
              color: #FF7901;
            }

            .Hero-Box > h1 {
              font-weight: 500;
              text-transform: uppercase;
              line-height: 1.37;
              font-size: 32px;
            }

            .Hero-Box > h2 > small{
              color: #3BCF75;
            }

            .Hero-Box > h2 {
              font-weight: 300;
              font-size: 24px;
              line-height: 32px;
            }

            .how-it-works {
              text-align: center;
              padding: 40px 0;
              background: white;
            }

            .step-box {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            }

            .how-it-works h2 {
              font-size: 32px;
              margin-bottom: 40px;
              font-weight: 500;
              text-transform: uppercase;
            }

            .how-works-steps {
              padding: 10px 20px;
            }

            .how-works-steps .how-works-title {
              font-weight: bold;
              font-size: 21px;
              color: #FF7901;
            }

            .how-works-description {
              font-size: 16px;
              color: #79776B;
            }

            .how-works-steps > img {
              padding: 15px 0px;
            }

            .why-container2 {
              background: url('static/our-chefs-bg.jpg');
              background-repeat: no-repeat;
              background-position-x: center;
              background-position-y: center;
              background-size: cover;

              text-align: center;
              padding: 40px 130px;
              color: white !important;
              height: 400px;
              margin: 40px 0px;

              align-items: center;
              display: flex;
            }

            .why-container {
              background: #3BCF75;
              text-align: center;
              padding: 40px 130px;
              color: white !important;
              height: 400px;
              /* margin: 40px 0px; */

              align-items: center;
              display: flex;
            }

            .why-container h2 {
              font-size: 36ipx;
              padding: 20px 0px;
            }

            .why-container p {
              font-size: 26px;
            }

            .lnk-default {
              color: #79776B;
              font-size: 14px;
              text-align: center;
              width: 100%;
              display: inline-block;
              padding: 10px 0px;
              text-decoration: underline;
              cursor: pointer;
            }

            .lbll-default {
              color: #79776B;
              font-size: 14px;
              text-align: left;
              width: 100%;
              display: inline-block;
              padding: 5px 0px;
            }

            .Hero-mobile {
              display: none;
            }

            .android-phone {
              float: left;
              width: 170px;
              margin: 0;
              padding: 0;
              position: relative;
              left: -4px;
            }

            .ios-phone {
              float: left;
              /* width: 178px; */
              width: 160px;
              position: relative;
              left: 8px;
              top: 10px;
            }

            .info-phones {
              align-items: center;
              justify-content: center;
              flex: 1;
              display: flex;
            }

            .container-apps {
              background: white;
            }

            @media (max-width: 600px) {
              .onlyMobile {
                display: none;
              }

              .Hero-mobile {
                display: block;
                background: #FFF;
              }

              .HeroMobile-image {
                background: url(static/hero-edit-2.jpg) -300px;
                height: 250px;
                background-size: cover;
                background-repeat: no-repeat;
                /* margin-top: 220px */
                margin-top: 300px
              }

              .Hero-Box > h1 {
                font-size: 26px;
              }

              .Hero-Box > h2 {
                font-size: 18px;
              }

              .Hero-mobile .Hero-Box {
                position: absolute;
                top: 50px;
                margin-right: auto;
                margin-left: auto;
                padding: 0px;
                max-width: 470px;
                left: 10px;
              }

              .how-it-works h2 {
                font-size: 21px;
                margin-bottom: 40px;
                font-weight: 500;
                text-transform: uppercase;
              }

              .about-us-title {
                font-size: 26px;
                margin-bottom: 0px;
                font-weight: 500;
                text-transform: uppercase;
                padding: 0px;
              }

              .btn-app > .android {
                float: left;
                /* width: 201px; */
                width: 170px;
                margin: 0;
                padding: 0;
                position: relative;
                left: -4px;
              }

              .btn-app > .ios {
                float: left;
                /* width: 178px; */
                width: 160px;
                position: relative;
                left: 8px;
                top: 10px;
              }

              .lnk-default {
                padding: 30px 0px;
              }

              .why-container {
                padding: 40px 10px;
              }
              
              .why-container h2 {
                font-size: 26px;
              }

              .why-container p {
                font-size: 21px;
              }

              .info-phones {
                flex-direction: column;
                padding: 20px;
              }
            }
            
          `}</style>
        </main>
      </Layout>
    )
  }
}
export default defaultPage(Index);