// import libraries
import React from 'react';

// import local libraries
// import securePage from '../hocs/page';

// import components
import Layout from '../components/common/Layout';
import AddressForm from '../components/user/AddressForm';

class OnBoarding extends React.Component {
  static getInitialProps(context) {
    return {};
  }

  render(){
    return (
      <Layout {...this.props}>
        <div className="fluid-container onboarding">
          <div className="container">
            <div className="onboarding-container">
              <h2>Nueva dirección</h2>
              <AddressForm />
            </div>
          </div>
        </div>
        <style>{`
          .onboarding {
            background: #FFFFFF;
          }

          .onboarding-container {
            max-width: 768px;
            width: 100%;
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    )
  }
};

export default OnBoarding;


