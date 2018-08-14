import React from 'react';

import Layout from '../components/common/Layout';

class Privacy extends React.Component {
  render() {
    return (
      <Layout {...this.props}>        
        <div className="container">
          <div className="col-md-12 Account">
            <div className="col-md-12">
              <h2 className="text-center">SOLICITUD PARA EL EJERCICIO DE LOS DERECHOS ARCO ANTE CHAMBITA LABS, S. A. P. I. de C. V. <br /> <small>Última actualización: Agosto de 2018</small></h2>
              <br />

              <p className="text-left">
                (Acceso, Rectificación, Cancelación, Oposición, Revocación y Limitación de Datos Personales)

                <ul>
                  <li>Fecha de solicitud (dd/mm/aaaa): __________</li>
                  <li>Derecho que desea ejercer (marque con una X):</li>
                  <li>Acceso.</li>
                  <li>Rectificación.</li>
                  <li>Cancelación.</li>
                  <li>Oposición.</li>
                  <li>Revocación.</li>
                  <li>Limitación.</li>
                </ul>
              </p>
              <br />

              <h4>Datos del Titular de los Datos Personales (Se requiere adjuntar una copia de identificación oficial del titular de los derechos ARCO y, en tratándose de personas jurídicas, el Instrumento Público en que conste la representación o una carta ante 2 testigos):</h4>
              <p className="text-left">
                <ol>
                  <li>Apellido Paterno:</li>
                  <li>Apellido Materno:</li>
                  <li>Nombre(s):</li>
                  <li>Domicilio (indicar calle, número exterior, número interior, entrecalles, colonia, municipio o delegación y entidad federativa):</li>
                  <li>Correo electrónico:</li>
                  <li>Teléfono:</li>
                  <li>En su caso, datos del representante legal (Apellido paterno, apellido materno y nombre).</li>
                </ol>
              </p>
              <br />

              <h4>DESCRIPCIÓN DEL DERECHO QUE DESEA EJERCER</h4>
              <p className="text-left">
                Describa de forma clara y precisa el derecho que se desea ejercer sobre los datos personales, así como otros elementos o documentos que faciliten la localización de sus datos. En el caso de revocación del consentimiento deberá indicar si es total o parcial; en caso de ser de ser parcial, se deberá indicar cuál o cuáles tratamientos son aquéllos con los que el titular no está conforme.
              </p>
              <br />

              <p>
                Correo electrónico ayuda@eathouse.mx
              </p>


            </div>
          </div>
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

export default Privacy;