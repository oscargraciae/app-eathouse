import React from 'react';

import Layout from '../components/common/Layout';
import ModalMapZone from '../components/general/ModalMapZone';

class Faq extends React.Component {

  state = {
    isShowModalZone: false,
  }

  onModalClose = () => {
    this.setState({ isShowModalZone: false });
  }

  render() {
    return (
      <Layout {...this.props}>
        <ModalMapZone show={this.state.isShowModalZone} onHide={this.onModalClose} />
        <div className="container">
          <h2 className="text-center">Preguntas frecuentes</h2><br/>
          <div className="containerFaq">
            <ul>
              <li>
                <div>
                  <div className="question">¿Qué es eathouse?</div>
                  <div className="answer">Eathouse es la nueva forma de comer rico, saludable y barato en la oficina o en casa. Somos un restaurante online, con nuestra propio menú y nuestro propio servicio. Nuestro principal objetivo es llenarte el estomago y brindarte una buena experiencia.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿Hay costo de entrega?</div>
                  <div className="answer">La entrega es gratuita.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿Cómo funciona?</div>
                  <div className="answer">Solo tienes que ordenar tu pedido por medio de nuestra web o la aplicación móvil, seleccionar el día que quieres que sea entregada y listo, tus platillos serán entregados a la puerta de tu casa u oficina listos para comer.</div>
                </div>
              </li>
              {/* <li>
                <div>
                  <div className="question">¿Aceptan efectivo?</div>
                  <div className="answer">No, el efectivo es un medio de pago cada vez menos utilizado y que complica los procesos cuando hay muchas transacciones.</div>
                </div>
              </li> */}
              <li>
                <div>
                  <div className="question">¿Hay un pedido mínimo?</div>
                  <div className="answer">No, elige el platillo que quieras y te lo llevamos</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿En qué zona está disponible su servicio?</div>
                  <div className="answer">Para ver la zonas de entrega disponibles puedes hacer <a href="#" onClick={() => this.setState({ isShowModalZone: true })}>click aquí</a>.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿Como se entrega mi comida?</div>
                  <div className="answer">Tu comida llega en empaques diseñados para ser compatibles con microondas y para NO ser nocivos. Se incluyen cubiertos desechables.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿A qué hora se entregan las comidas?</div>
                  <div className="answer">Las comidas se entregan a partir de las 12:30pm y hasta las 1:30pm en la dirección que hayas seleccionado.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿Con cuánta anticipación debo elegir mis comidas?</div>
                  <div className="answer">Tu puedes escoger una comida cuando gustes, hasta las 11:00 am del día actual.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿Qué pasa si mi pedido llega tarde?</div>
                  <div className="answer">Muy rara vez llegamos tarde, pero como decimos, somos humanos y estas cosas pasan. Si llegamos tarde te avisaremos con antelación y trataremos de compensarte.</div>
                </div>
              </li>
              {/* <li>
                <div>
                  <div className="question">¿Puedo cancelar una comida?</div>
                  <div className="answer">Puedes hacer cualquier tipo de modificación a tus órdenes hasta las 9:00 pm del día anterior al que las vas a recibir.</div>
                </div>
              </li> */}

            </ul>
          </div>
          <h3>Para más información contacta a nuestro equipos de soporte ayuda@eathouse.mx</h3>
        </div>

        <style jsx>{`
          .containerFaq {
            padding: 0px 120px;
          }

          .containerFaq > ul {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }

          .containerFaq > ul > li{
            margin-bottom: 40px;
          }

          .question {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 15px;
          }

          .answer {
            font-size: 16px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Faq;
