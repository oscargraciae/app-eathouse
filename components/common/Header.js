import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import { Fragment } from 'react';
import { GrLocation } from 'react-icons/gr';

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
    <ul className="nav navbar-nav navbar-right nav-menu-right">
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
      <li>
        <Link href="/signup-store">
          <a className="btn_navf">
            <span>Publicar tu tienda</span>
          </a>
        </Link>
      </li>
    </ul>
  )
}

const menuAuth = (props) => {
  const { user, userToken, setShowAddressModal, userState } = props;
  return (
    <Fragment>
      <ul className="nav navbar-nav navbar-left navbar-location">
        { (userState && userState.address) &&
          <li onClick={() => setShowAddressModal(true)}>
            <GrLocation size={21} />
            <a>{userState.address.addressMap.substr(0, 50)}...</a>
          </li>
        }
      </ul>
      <ul className="nav navbar-nav navbar-right nav-menu-right">
        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hola, {user.firstName} <span className="caret" />
          </a>
          <ul className="dropdown-menu">
            {/* <li>
              <a
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                href={`/services/new`}
                className="btn_nav nav-lbl-principal"
              >
                Mi cuenta
              </a>
            </li>
            <li role="separator" className="divider" /> */}
            <li>
              <a
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                href={`/account`}
                className="btn_nav nav-lbl-principal"
              >
                Ajustes de cuenta
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                href={`/orders`}
                className="btn_nav nav-lbl-principal"
              >
                Mis compras
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                href={`/schedules`}
                className="btn_nav nav-lbl-principal"
              >
                Mi Calendario
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
        {/* <li className="onlyMobile">
          <a className="btn-link onlyMobile" href="/menu"><span className="btn btn-primary btn-block">Menu</span></a>
        </li> */}
        <li>
          { userToken.storeId &&
            <a className="btn_navf mobile-hide" href="http://manager.uorder.mx/" target="_blank">
              <span>Administrar mi tienda</span>
            </a>
            }
            { !userToken.storeId &&
            <Link href="/signup-store">
              <a className="btn_navf">
                <span>Publicar tu tienda</span>
              </a>
            </Link>
            }
        </li>
      </ul>
    </Fragment>
  )
}

export default function Header(props) {
  return (
    <header>
        <nav className="navbar navbar-default">
          <div className="fluid-container header-uorder">
            <div className="navbar-header">
              {/* <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button> */}

              <Link href="/">
                <a>
                <img
                  src="/static/uorder-logo.png"
                  alt="eathouse"
                  height="40"
                />
                </a>
              </Link>

            </div>
            <div className="navbar-collapse">
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

          .header-uorder {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .header-message {
            background: var(--primary-color);
            font-size: 14px;
            color: #FFF;
            text-align: center;
            padding: 8px 0px;
          }

          .navbar-brand {
            height: 40px;
          }

          .navbar-default {
            background: #FFF;
            border: 1px solid rgba(217,219,224,0.5);
            margin-bottom: 0px;
          }

          .navbar-collapse {
            width: 100%;
          }

          .btn-link {
            padding: 9px !important;
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

          .nav-menu-right {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .navbar-location > li {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 600px) {
            .navbar-default {
              box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
            }

            .navbar-default .navbar-toggle {
              border: none;
            }

            .onlyMobile {
              display: none;
            }

            .navbar-location {
              display: none;
            }

            .dropdown-menu {
              position: absolute !important;
              top: 100%;
              left: 0;
              z-index: 1000;
              display: none;
              float: left !important;
              min-width: 160px !important;
              padding: 5px 0;
              margin: 2px 0 0;
              font-size: 14px;
              text-align: left;
              list-style: none;
              background-color: #fff !important;
              background-clip: padding-box;
              border: 1px solid #ccc !important;
              border: 1px solid rgba(0,0,0,.15) !important;
              border-radius: 4px;
              box-shadow: 0 6px 12px rgba(0,0,0,.175) !important;
            }

            .mobile-hide {
              display: none !important;
            }

          }
        `}</style>
      </header>
  )
}
