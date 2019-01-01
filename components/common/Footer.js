
export default () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="footernav col-md-3">
              <h4 className="footer-title">EMPRESA</h4>
              <ul>
                <li className="footernav-item"><a href="/faq">Preguntas frecuentes</a></li>
                {/* <li className="footernav-item"><a href="https://eathouse.mx/app/ayuda-clientes">Ayuda a clientes</a></li> */}
                {/* <li className="footernav-item">
                  <a href="/privacy">Política de privacidad</a>
                </li>
                <li className="footernav-item">
                  <a href="/terms"> Términos y condiciones</a>
                </li> */}
                {/* <li className="footernav-item">
                  <a target="_blank" rel="noopener noreferrer" href="http://blog.eathouse.mx/"> Blog</a>
                </li> */}
              </ul>
            </div>

            <div className="footernav footernav-right col-md-3">
              <h4 className="footer-title">CONTACTANOS</h4>
              <ul>
                <li className="footernav-item">
                  <a href="mailto:ayuda@eathouse.mx"> ayuda@eathouse.mx</a>
                </li>
                <li className="footernav-item"><a target="_blank" rel="noopener noreferrer" href="https://www.messenger.com/t/eathousemx/"> Deja tu Mensaje en Facebook</a></li>
                {/* <li className="footernav-item">
                  <a> (81) 8119086812</a>
                </li> */}
              </ul>
            </div>

            <div className="footernav footernav-right col-md-3">
              <h4 className="footer-title">SIGUENOS EN</h4>
              <ul>
                <li className="footernav-item"><a className="social-button" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/eathousemx"><i className="fab fa-facebook-f fa-lg" /></a></li>
                <li className="footernav-item"><a className="social-button" target="_blank" rel="noopener noreferrer" href="https://twitter.com/eathousemx"><i className="fab fa-twitter fa-lg" /></a></li>
                <li className="footernav-item"><a className="social-button" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eathousemx/"> <i className="fab fa-instagram fa-lg" /></a></li>
                {/* <li className="footernav-item"><a className="social-button" target="_blank" rel="noopener noreferrer" href="https://eathouse.mx/blog">Blog</a></li> */}
              </ul>
            </div>

          </div>

          <div className="row">
            <div className="footernav col-md-8">
              <hr />
              <img alt="eathouse Footer" src="/static/logo-eathouse.png" width="100" />
              <p>
                Hecho con <i className="fa fa-heart lbl-danger" /> en Monterrey (Mexico)
                {/* <br /><span>© eathouse. Todos los derechos reservados</span> */}
              </p>
              {/* <p>Chambita Labs S.A.P.I de C.V</p> */}
            </div>
          </div>

        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid rgba(217,219,224,0.5);
          background: #FFF;
          color: #42413E;
          margin-top: 0px;
        }

        .footer-title {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 600;
          font-style: normal;
          letter-spacing: 0.5px;
          color: #2D3138;
          font-size: 14px;
          text-align: left;
          text-transform: uppercase;
          line-height: normal;
          letter-spacing: 1px;
          cursor: pointer;
        }
        
        .footernav {
          padding: 20px 10px;
        }
        
        .footernav ul {
          margin: 0px;
          padding: 0px;
        }

        
        
        .footernav-item {
          padding: 0px 0px;
          list-style: none;
          margin-top: 12px;
        }
        
        .footernav-item, .footernav a {
          color: #79776B;
          font-size: 14px;
        }
        
        .social-button {
          border-radius: 50%;
          border: 2px solid #42413E;
          padding: 7px 0 0;
          width: 40px;
          height: 40px;
          margin-bottom: 0;
          text-align: center;
          display: inline-block;
          font-size: 14px;
          float: left;
          margin: 0 5px;
        }
        
        .footernav-item .social-button:hover {
          color: #FF7901;
          border-color: #FF7901;
        }
        
        .arrow {
          border-bottom-color: #ddd;
          border-color: transparent;
          border-style: solid;
          border-top-width: 0;
          border-width: 11px;
          height: 0;
          left: 75px;
          margin-left: -11px;
          position: absolute;
          top: -11px;
          width: 0;
        }

        .footernav-ul{
          float:left;
          padding-right: 50px !important;
        }

        @media (max-width: 600px) {
          .footernav-ul {
            float:left;
            padding-right: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}