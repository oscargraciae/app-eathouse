// import libraries
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import {connect} from 'react-redux';

// import components
import Header from './Header';
import Footer from './Footer';
import ModalGeneralAddress from '../general/ModalGeneralAddress';
import ModalAddress from '../general/ModalAddress';
import Meta from '../general/Meta';

const Layout = ({ children, loggedUser, isAuthenticated, title = 'UORDER', user, tokenData, userState }) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const handleShowAddressModal = () => {
    setShowAddressModal(true);
  }

  useEffect(() => {
    console.log("user state------>", userState);
    if (!userState.address) {
      setShowAddressModal(true);
    }
  }, []);

  return (
    <div id="layout" className="layout">
      <Head>
        <title>{ title }</title>
        <Meta />
      </Head>

      <Header
        loggedUser={loggedUser}
        isAuthenticated={isAuthenticated}
        user={user}
        userState={userState}
        userToken={tokenData}
        setShowAddressModal={handleShowAddressModal}
      />

      {/* { isAuthenticated && <ModalGeneralAddress show={!user.withAddress} /> } */}
      { isAuthenticated && <ModalAddress show={!user.withAddress || showAddressModal} hide={!showAddressModal} setShowAddressModal={setShowAddressModal} /> }
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
          /* background: rgb(247, 247, 247); */
          background: #FFFFFF !important;
          font-family: 'Roboto', sans-serif;
        }

        .layout {
          /* background: rgb(247, 247, 247) */;
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

const mapStateToProps = (state) => {
  return {
    userState: state.user,
  }
}

export default connect(mapStateToProps)(Layout);
