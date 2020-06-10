// import libraries
import Head from 'next/head'
import decode from 'jwt-decode';

// import components
import Header from './Header';
import Footer from './Footer';
import ModalGeneralAddress from '../general/ModalGeneralAddress';

export default ({ children, loggedUser, isAuthenticated, title = 'UORDER', user, tokenData }) => {
  return (
    <div id="layout" className="layout">
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='google-site-verification' content='M6vcqaYYRkLZlKWOvTNC6Q7HMwZXk9wlPW5ya6jQ3es' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="language" content="es" />
        <meta name="author" content="UOrder" />
        <meta name="pagename" content="UOrder" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <link rel="icon" type="image/png" sizes="64x64"  href="/static/u-order-64x64.png" />

        {/* <meta property="og:type" content="website" />
        <meta property="og:title" content="COMER BIEN TODOS LOS DÍAS, ¡ES POSIBLE!" />
        <meta property="og:description" content="Comidas ricas y saludables, entregadas directamente a la puerta de tu oficina." />
        <meta property="og:image" content="https://s3.us-west-2.amazonaws.com/eathouse/assets/og-page.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://uorder.mx" />
        <meta property="og:site_name" content="Uorder" />
        <meta property="og:locale" content="es" /> */}


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css' rel='stylesheet' />

        {/* <script src="https://use.fontawesome.com/f24acb12d1.js" /> */}
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-yTAH4cD5Lq3VDwysl-Me5bBek1phNBY&libraries=places" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
        <script type="text/javascript" src="https://cdn.conekta.io/js/latest/conekta.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TQS3BV7');`,
        }}>
        </script>
      </Head>
      <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQS3BV7"
          height="0" width="0" style={{ display:'none', visibility:'hidden' }}></iframe>`,
        }}>
      </noscript>

      <Header loggedUser={loggedUser} isAuthenticated={isAuthenticated} user={user} userToken={tokenData} />
      { isAuthenticated && <ModalGeneralAddress show={!user.withAddress} /> }
      <div className="container-margin-top">
        { children }
      </div>
      {/* <Footer /> */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto');

        :root {
          --primary-color: rgb(232, 68, 30);
          --sec-color: #81AC05;
          --border-color: #e7e7e7;
        }

        body {
          color: #42413E;
          background: rgb(247, 247, 247);
          font-family: 'Roboto', sans-serif;
        }

        .layout {
          background: rgb(247, 247, 247);
        }

        .btn {
          border-radius: 0px !important;
        }

        .container-margin-top {
          padding-top: 50px;
        }

        .fluid-container {
          margin-left: auto;
          margin-right: auto;
          max-width: 1230px;
        }

        .container-box {
          border-radius: 3px;
          background-color: #fff;
          border: 1px solid rgba(217,219,224,0.5);
          margin-top: 15px;
          padding: 15px 40px;
        }

        .modal-credit-card {
          /* min-height: 490px; */
        }

        .containerAppButon {
          padding: 5px;
        }

        .header-title {
          font-size: 21px;
          padding: 0px 0px;
          margin-top: 0;
          margin: 20px 0 0px;
          color: #2D3138;
          font-weight: 600;
          line-height: 34px;
          text-transform: uppercase;
          /* border-bottom: 1px solid #DDD; */
          font-family: "BentonSans",Helvetica,Arial,sans-serif;
        }

        .header-subtitle {
          font-size: 18px;
          padding: 0px 0px;
          margin-top: 0;
          margin: 20px 0 0px;
          color: #2D3138;
          font-weight: 600;
          line-height: 34px;
          text-transform: uppercase;
          /* border-bottom: 1px solid #DDD; */
          font-family: "BentonSans",Helvetica,Arial,sans-serif;
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
          border-color: var(--primary-color) !important;
          background-color: var(--primary-color) !important;
          color: #fff;
        }

        .btn-primary:hover, .btn-primary:focus{
          background: #cc1433;
        }

        .btn-facebook {
          color: rgb(255, 255, 255) !important;
          background: rgb(37, 80, 151) !important;
          border-color: transparent !important;
        }

        .btn-facebook:hover, .btn-facebook:focus{
          color: rgb(255, 255, 255) !important;
          background: rgb(69, 104, 178) !important;
          border-color: transparent !important;
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

        .lbl-danger {
          color: #B31E0B;
        }

        @media (max-width: 600px) {
          .mobile-hide {
            display: none;
          }
        }

      `}</style>
    </div>
  )
}
