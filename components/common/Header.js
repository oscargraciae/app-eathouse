import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

Router.onRouteChangeStart = () => {
  return NProgress.start();
};
Router.onRouteChangeComplete = () => {
  return NProgress.done();
};
Router.onRouteChangeError = () => {
  return NProgress.done();
};

const menuGuest = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Link href="/login">
          <a className="btn_nav">
            <span>Iniciar sesión</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a className="btn_navf">
            <span>Regístrate</span>
          </a>
        </Link>
      </li>
    </ul>
  )
}

const menuAuth = (props) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      { props.user.userAddress.length > 0 &&
        <li>
          <a><i className="fas fa-map-marker-alt" /> {props.user.userAddress[0].addressMap.substr(0, 30)}...</a>
        </li>
      }
      <li className="dropdown">
        <a
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Cuenta <span className="caret" />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              data-toggle="collapse"
              data-target=".navbar-collapse.in"
              href={`/services/new`}
              className="btn_nav nav-lbl-principal"
            >
              Mi cuenta
            </a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a
              data-toggle="collapse"
              data-target=".navbar-collapse.in"
              href={`/services/new`}
              className="btn_nav nav-lbl-principal"
            >
              Mis pedidos
            </a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a
              data-toggle="collapse"
              data-target=".navbar-collapse.in"
              href={`/logout`}
              className="btn_nav"
            >
              Salir
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default function Header(props) {
  return (
    <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <Link href="/">
                <a className="navbar-brand">
                <img
                  src="/static/logo2.png"
                  alt="eathouse"
                  width="120"
                />
                <h2>{props.isAuthenticated}</h2>
                </a>
              </Link>
            
            </div>
            <div className="collapse navbar-collapse">
              { props.isAuthenticated ? menuAuth(props) : menuGuest() }
            </div>

          </div>
        </nav>
        <style jsx global>{`
          header {
            position: fixed;
            width: 100%;
            z-index: 100;
            box-shadow: initial;
        }

          .navbar-brand {
            height: 40px;
          }

          .navbar-default {
            background: #FFF;
            border: 1px solid #e8ebe9;
            margin-bottom: 0px;
          }

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #ff9300;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
            opacity: 1.0;
            transform: rotate(3deg) translate(0px, -4px);
          }

          @media (max-width: 600px) {
            .navbar-default {
              box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
            }

            .navbar-default .navbar-toggle {
              border: none;
            }

          }
        `}</style>
      </header>
  )
}