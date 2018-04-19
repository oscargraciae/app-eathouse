import React from 'react';

import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';

import defaultPage from '../hocs/defaultPage';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';

class Index extends React.Component {
  static getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(loggedUser) {
      redirect('/menu', context);
    }
    return {};
  }

  constructor() {
    super();
    
    this.state = {
      email: '',
      errors: {},
    }
  }

  onChange = () => {
    console.log("Prueba");
  }

  render() {
    return (
      <Layout>
        <main>
          {/* Hero */}
          <section className="Hero">
            <div className="container">
              <div className="Hero-Box">
                <h2>Saludable y delicioso directo a tu casa y oficina.</h2>
                <div className="signupForm">
                  <form>
                    <InputText
                      value={this.state.email}
                      onChange={this.onChange}
                      type="email"
                      name="email"
                      label="Correo electrónico"
                      focus={true}
                    />
                    <ButtonBlock
                      text="Registrate"
                      buttonStyle="btn btn-primary btn-large btn-block"
                      click={this.handlerLogin}
                      loading={this.state.isLoading}
                    />
                  </form>
                  {/* <hr/>
                  <ButtonBlock
                    text="Ingresar con Facebook"
                    buttonStyle="btn btn-facebook btn-large btn-block"
                    click={this.handlerLogin}
                    loading={this.state.isLoading}
                  /> */}
                </div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="how-it-works">
            <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <h2>¿Como funciona?</h2>
                    <div className="row">
                      <div className="col-md-4 how-works-steps">
                        <img src="static/chef.png" width="70" />
                        <p className="how-works-title">Tu eliges</p>
                        <p>Usted elige sus comidas de nuestro menú semanal en constante rotación de más de 30 opciones diferentes sin gluten.</p>
                      </div>
                      <div className="col-md-4 how-works-steps">
                        <img src="static/calendar.png" width="70" />
                        <p className="how-works-title">Cocinamos y entregamos</p>
                        <p>Todas sus comidas son preparadas y cocinadas por nuestros chefs y entregadas frescas, nunca congeladas.</p>
                      </div>
                      <div className="col-md-4 how-works-steps">
                        <img src="static/delivery.png" width="70" />
                        <p className="how-works-title">tu disfrutas</p>
                        <p>Nuestras comidas saludables y totalmente preparadas están listas en menos de 3 minutos. Lo único que debes hacer es disfrutar.</p>
                      </div>
                      {/* <div className="col-md-3 how-works-steps">
                        <img src="static/cutlery.png" width="60" />
                        <p className="how-works-title">Nosotros cocinamos</p>
                        <p>Buen provecho y a comer cuando estes listo.</p>
                      </div> */}
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
                    <h2>¿Que es eathouse?</h2>
                    <p>En eathouse preparamos comidas ricas, saludables, con costos accesibles y entregadas directamente a la puerta de tu casa u oficina. Come como si estuvieras en casa. Agenda tus comidas para mañana o para el resto de la semana.</p>
                  </div>
                </div>
              </div>
          </section>

          {/* MENU */}
          <section className="how-it-works">
            <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <h2>Algunos de nuestros platillos</h2>
                    <div className="row">
                      <div className="col-md-3 how-works-steps">
                        <img src="static/01.png" width="200" />
                        <p className="how-works-title">Moroccan Vegan Grain Bowl</p>
                      </div>
                      <div className="col-md-3 how-works-steps">
                        <img src="static/03.png" width="200" />
                        <p className="how-works-title">Grilled Pesto Salmon Quinoa Bowl</p>
                      </div>
                      <div className="col-md-3 how-works-steps">
                        <img src="static/04.png" width="200" />
                        <p className="how-works-title">Honey Lime Chicken</p>
                      </div>
                      <div className="col-md-3 how-works-steps">
                        <img src="static/05.png" width="200" />
                        <p className="how-works-title">Argentinian Grilled Steak</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <style jsx>{`
            .Hero {
              background: url('static/Hero.jpg');
              height: 500px;
              border-bottom: 10px solid #FF7901;
            }

            .Hero-Box {
              position: absolute;
              background-color: white;
              top: 100px;
              margin-right: auto;
              margin-left: auto;
              padding: 5px 30px 25px 30px;
              width: 95%;
              max-width: 400px;
              box-shadow: 0 2px 10px 5px rgba(0,0,0,0.2);
              right: 35px;
            }

            .how-it-works {
              text-align: center;
              padding: 40px 0;
            }

            .how-it-works h2 {
              font-size: 36px;
              margin-bottom: 40px;
            }

            .how-works-steps {
              padding: 10px 20px;
            }

            .how-works-steps .how-works-title {
              color: black;
              font-weight: bold;
            }

            .how-works-steps > img {
              padding: 15px 0px;
            }

            .how-works-steps > p {
              font-size: 16px;
            }

            .why-container {
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

            .why-container h2 {
              font-size: 36ipx;
              padding: 20px 0px;
            }

            .why-container p {
              font-size: 26px;
            }
            
          `}</style>
        </main>
      </Layout>
    )
  }
}
export default defaultPage(Index);