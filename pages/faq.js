import React from 'react';

import Layout from '../components/common/Layout';

class Faq extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="container">
          <h2 className="text-center">Preguntas frecuentes</h2><br/>
          <div className="containerFaq">
            <ul>
              <li>
                <div>
                  <div className="question">¿En qué zona está disponible su servicio?</div>
                  <div className="answer">Para ver la zonas de entrega disponibles puedes hacer click aquí.</div>
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
                  <div className="answer">Tu puedes escoger una comida cuando gustes, hasta las 10:00 am del día actual.</div>
                </div>
              </li>
              <li>
                <div>
                  <div className="question">¿Puedo cancelar una comida?</div>
                  <div className="answer">Puedes hacer cualquier tipo de modificación a tus órdenes hasta las 9:00 pm del día anterior al que las vas a recibir.</div>
                </div>
              </li>
            </ul>
          </div>
          <h3>Para más información contacta a nuestro equipos de soporte ayuda@eathouse.mx</h3>
        </div>

        <style jsx>{`
          .containerFaq {

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
            font-size: 21px;
            font-weight: 500;
          }

          .answer {
            font-size: 18px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Faq;