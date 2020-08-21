import React, { Fragment } from 'react';

const Meta = () => {
  return (
    <Fragment>
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
      {/* <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css' rel='stylesheet' /> */}

      {/* <script src="https://use.fontawesome.com/f24acb12d1.js" /> */}
      {/* <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script> */}
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-yTAH4cD5Lq3VDwysl-Me5bBek1phNBY&libraries=places" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
      {/* <script type="text/javascript" src="https://cdn.conekta.io/js/latest/conekta.js"></script> */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TQS3BV7');`,
      }}>
      </script>
    </Fragment>
  )
}

export default Meta;
