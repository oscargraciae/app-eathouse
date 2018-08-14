import React from 'react';

import Layout from '../components/common/Layout';
import ModalMapZone from '../components/general/ModalMapZone';

class Faq extends React.Component {
  render() {
    return (
      <Layout {...this.props}>        
        <div className="container">
          <div className="col-md-12 Account">
            <div className="col-md-12">
              <h2 className="text-center">Condiciones del Servicio de Eathouse <br /> <small>Última actualización: Agosto de 2018</small></h2>
              <br />

              <h4>Bienvenido a Eathouse</h4>
              <p className="text-left">
                Chambita Labs, S. A. P. I. de C. V., (en delante eathouse) Al usar este sitio, Usted consiente las presentes Condiciones y Términos de Uso (en delante, las “Condiciones”).  Al usar en cualquier forma este sitio, Usted expresa su consentimiento con las presentes “Condiciones” conforme a lo previsto en la fracción II del artículo 1803, del Código Civil Federal, y sus correlativos de las entidades federativas de los Estados Unidos Mexicanos.  Si Usted no acepta estas “Condiciones”, en todo o en parte, no existirá ningún acuerdo, de ninguna especie, entre Usted y eathouse.
                Sus datos personales y sus derechos <a href="arco" className="lbl-principal">ARCO</a> se tratan conforme al Aviso de Privacidad que se encuentra publicado en este mismo sitio, el cual Usted debe aceptar por separado, pues también rige las presentes “Condiciones”.
              </p>
              <br />

              <h4>Uso del Sitio.</h4>
              <p className="text-left">
                Cualquier persona con capacidad legal para contratar y obligarse puede usar el sitio de "eathouse". El registro en este sitio no tiene ningún costo, pero Usted no podrá usarlo si es menor de edad conforme a la ley aplicable, si es incapaz para efectos de Derecho; si está inhabilitado para ejercer el comercio en cualquier forma prevista por las leyes; o si está exceptuado en cualquier forma prevista por las leyes.  Tampoco pueden usar el sitio de "eathouse" los usuarios cuya cuenta haya sido suspendida o cancelada, ni por sí ni mediante interpósita persona.  Tratándose de personas morales, el sitio solo podrá ser usado por una persona física con capacidad para representar y obligar a la persona moral de que se trate.
              </p>
              <br />

              <h4>Su Cuenta.</h4>
              <p className="text-left">
                Para usar este Sitio, usted debe abrir una Cuenta, con una contraseña personal elegida libremente por Usted, proporcionando los datos personales para registrar su Cuenta en forma verídica, completa y exacta, según sean solicitados en el Formulario de Registro.  "eathouse" podrá –en cualquier momento- solicitarle información o documentación para corroborar la exactitud y veracidad de los datos con los que Usted registró su Cuenta y, en caso de falsedad, o de que un Usuario tenga más de una Cuenta, o de que su Cuenta sea usada con fines ilícitos, delictuosos o en cualquiera manera contraria a la moral, a las buenas costumbres o al Derecho, o en contravención a las presentes “Condiciones”, podremos cancelar o suspender su Cuenta.
              </p>
              <br />

              <h4>Modificaciones a las “Condiciones”.</h4>
              <p className="text-left">
                "eathouse" se reserva el derecho de modificar de tiempo en tiempo las presentes “Condiciones”, para lo cual hará del conocimiento de los Usuarios del sitio las modificaciones, en el entendido de que si Usted no cancela su Cuenta en un lapso de 5 días naturales siguientes a la fecha de modificación de las “Condiciones”, estará aceptando las modificaciones publicadas.
              </p>
              <br />

              <h4>Prohibiciones.</h4>
              <p className="text-left">
                Los “Usuarios” no deberán infringir en todo o en parte lo estipulado en las presentes  “Condiciones”, ni ejecutar acción de ninguna índole, o uso de dispositivos o software, o cualquier otro medio, para interferir o ingresar a las bases de datos de "eathouse" o en la información almacenada en nuestros servidores; ni reproducir en todo ni en parte, los contenidos de las pantallas de este sitio, sus redes o archivos, puesto que son objeto de propiedad industrial o intelectual; en el entendido de que cualquier contravención a lo anterior será investigado por nosotros y, en su caso, su Cuenta, Solicitud u Ofrecimiento será cancelado del sitio, sin perjuicio de las demás responsabilidades civiles o penales que, en su caso, resulten conforme a las leyes aplicables.
              </p>
              <br />

              <h4>Enlaces.</h4>
              <p className="text-left">
                Este sitio contiene enlaces a servidores de terceros, mismos que no son propiedad ni están bajo el dominio, control, posesión ni propiedad de "eathouse", por lo que no seremos responsables por los contenidos, acciones, materiales ni servicios prestados por tales servidores, amén de que tales enlaces no representan ni constituyen relación de sociedad, aprobación ni respaldo de "eathouse" a los contenidos de los servidores antes referidos.
              </p>
              <br />
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

export default Faq;