// import libraries
import Head from 'next/head'
import decode from 'jwt-decode';

// import components
import Header from './Header';
import Footer from './Footer';
import ModalGeneralAddress from '../general/ModalGeneralAddress';

export default ({ children, loggedUser, isAuthenticated, title = 'eathouse', user }) => { 
  return (
    <div id="layout">
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css' rel='stylesheet' />

        {/* <script src="https://use.fontawesome.com/f24acb12d1.js" /> */}
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-yTAH4cD5Lq3VDwysl-Me5bBek1phNBY&libraries=places" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
        <script type="text/javascript" src="https://cdn.conekta.io/js/latest/conekta.js"></script>
      </Head>
      <Header loggedUser={loggedUser} isAuthenticated={isAuthenticated} user={user} />
      { isAuthenticated && <ModalGeneralAddress show={!user.withAddress} /> }  
      <div className="container-margin-top">
        { children }
      </div>
      <Footer />
      <style jsx global>{`
        body {
          color: #42413E;
          background: #FAFAFA;
        }

        .container-margin-top {
          padding-top: 50px;
        }

        .container-box {
          border-radius: 3px;
          background-color: #fff;
          border: 1px solid #e8ebe9;
          margin-top: 15px;
          padding: 15px 40px;
        }

        .modal-credit-card {
          min-height: 490px;
        }

        .containerAppButon {
          padding: 5px;
        }
        .btn{
          display: inline-block;
          margin-bottom: 0;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          border: 1px solid;
          text-align: center;
          vertical-align: middle;
          font-weight: bold;
          line-height: 1.43;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          white-space: nowrap;
          cursor: pointer;
        }

        .btn[disabled]{
          opacity: .3;
          cursor: not-allowed;
        }

        .btn-large {
          padding: 10px 32px;
          font-size: 16px;
        }

        .btn-block {
          display: block;
          white-space: normal;
          width: 100%;
        }

        .btn-primary {
          border-color: #FF7901 !important;
          background-color: #FF7901 !important;
          color: #fff;
        }

        .btn-primary:hover, .btn-primary:focus{
          background: #cc1433;
        }

        .btn-blue{
          border-color: #3498db;
          background-color: #3498db;
          color: #fff;
        }

        .btn-blue:hover, .btn-blue:focus{
          background: #2980b9;
        }

        .btn-default{
          background: #fff;
          border-color: #9a9a9a;
          color: #000;
        }

        .btn-default:hover{
          background: #e8e8e8;
        }

        .btn-facebook{
          border-color: #3B5999;
          background-color: #3B5999;
          color: #fff;
        }

        .btn-facebook:hover, .btn-facebook:focus{
          background: #3B5999;
        }
      `}</style>
    </div>
  )
}