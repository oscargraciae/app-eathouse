import React from 'react';

// import local libraries
import api from '../api';

// import components
import InputTextMaterial from '../components/general/InputTextMaterial';
import Layout from '../components/common/Layout';
import securePage from '../hocs/page';
import LoadingSpinner from '../components/common/LoadingSpinner';

class Account extends React.Component {
  static getInitialProps() {
    return 1;
  }

  state = {
    user: null,
  }

  componentDidMount() {
    console.log("PROPS----->", this.props);
    this.initialFetch();
  }

  async initialFetch() {
    const user = await api.user.get(this.props.user.id);
    console.log("USER DATA---->", user);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    console.log("USER STATE----->", user);

    if (!user) {
      return (
        <Layout {...this.props}>
          <LoadingSpinner />
        </Layout>
      )
    }

    return (
      <Layout {...this.props}>
        <div className="container">
          <h2 className="header-title">Ajustes de la cuenta</h2>

          <div className="content-account">
            <div className="account-input">
              <InputTextMaterial label="Nombre(s)" value={user.firstName} />
            </div>
            <div className="account-input">
              <InputTextMaterial label="Apellido" value={user.lastName} />
            </div>
            <div className="account-input">
              <InputTextMaterial label="Email" value={user.email} />
            </div>
          </div>
        </div>
        <style jsx>{`
          .content-account {
            margin-top: 30px;
            padding: 15px 0px;
          }

          .account-input {
            padding: 10px 0px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default securePage(Account);
