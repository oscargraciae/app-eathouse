import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" sizes="64x64" href="/static/u-order-64x64.png" />
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />

          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-yTAH4cD5Lq3VDwysl-Me5bBek1phNBY&libraries=places" />
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" /> */}
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous" />
          {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" /> */}
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
        @import url('https://fonts.googleapis.com/css?family=Roboto');

        :root {
          --primary-color: rgb(232, 68, 30);
          --sec-color: #81AC05;
          --border-color: #e7e7e7;
        }

        body {
          background: #FFFFFF !important;
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          color: #333333;
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

      `}
        </style>
      </Html>
    );
  }
}

export default MyDocument;
