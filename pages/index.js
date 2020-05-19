// import libraries
import React from 'react';

// import local libraries
// import defaultPage from '../hocs/defaultPage';
import securePage from '../hocs/page';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
// import generateName from '../utils/generateName';
import redirect from '../utils/redirect';
import api from '../api';

// import components
import Layout from '../components/common/Layout';
import Dish from '../components/home/Dish';
import ModalMapZone from '../components/general/ModalMapZone';
import StoreItem from '../components/stores/StoreItem';

class Home extends React.Component {
  static async getInitialProps({ query }) {
    const { success, stores } = await api.store.getAll();
    return {
      stores,
      id: 1,
    };
  }

  render() {
    const { stores } = this.props;
    return (
      <Layout {...this.props}>
        <main>
          <div className="container container-home">
            <div>
              <h1 className="title-category" id="products">Tiendas Principales</h1>
              <hr />
            </div>
            <div className="store-items">
              {stores.map((item) => (
                <StoreItem key={item.id} {...item} />
              ))}
            </div>
          </div>


          <style jsx>{`
            .container-home {
              margin-top: 20px;
            }

            .store-items {
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
            }

            .title-category {
              font-size: 18px;
              padding: 0px 0px;
              margin-top: 0;
              margin: 0 0 0px;
              color: #2D3138;
              font-weight: 600;
              line-height: 34px;
              text-transform: uppercase;
              /* border-bottom: 1px solid #DDD; */
              font-family: "BentonSans",Helvetica,Arial,sans-serif;
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}
export default securePage(Home);
