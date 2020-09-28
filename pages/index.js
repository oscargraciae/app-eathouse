// import libraries
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// import local libraries
// import securePage from '../hocs/page';
import api from '../api';

// import components
import Layout from '../components/common/Layout';
import StoreItem from '../components/stores/StoreItem';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = (props) => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { address } = useSelector(state => state.user);

  const fetchStores = async () => {
    setIsLoading(true);

    let params = {};
    if (address) {
      params = { lat: address.lat, lng: address.lng };
    }

    const { stores } = await api.store.getAll(params);

    setIsLoading(false);
    setStores(stores);
  }

  useEffect(() => {
    fetchStores();
  }, [address]);

  return (
    <Layout {...props} showHeaderAddress={true}>
      <main>
        <section className="Hero onlyWeb">
            <div className="container Hero-Box">
              <div className="">
                <h1>Encuentra restaurantes cerca de ti</h1>
              </div>
            </div>
            <div className="HeroMobile-image"></div>
        </section>

        <div className="container container-home">
          <div>
            <h1 className="title-category" id="products">Negocios Principales</h1>
            <hr />
          </div>
          { isLoading && <LoadingSpinner /> }
          { !isLoading &&
            <div className="store-items">
              {stores.map((item) => (
                <StoreItem key={item.id} {...item} />
              ))}
            </div>
          }
        </div>

        <section className="container-business-info">
          <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div className="about-us-title-2">Si respondes SI a las siguientes preguntas, UORDER es para tí:</div>
                  <div className="about-questions text-center">
                    ¿Cuentas con distribución propia (vehículos y choferes)? <br />

                    ¿Tus clientes te solicitan productos de manera recurrente (2 o más veces por mes)? <br />

                    ¿Cuentas con inventario/productos para ser entregados de manera inmediata o en el corto plazo? <br/><br/>
                    <strong>Contactanos a hola@uorder.mx</strong>
                  </div>
                </div>
              </div>
            </div>
        </section>


        <style jsx>{`
          .container-home {
            margin-top: 40px;
            margin-bottom: 40px;
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

          .Hero {
            height: 200px;
            background: #FFFFFF;

            display: flex;
            justify-content: center;
          }

          .Hero-Box {
            position: absolute;
            top: 110px;
            margin-right: auto;
            margin-left: auto;
            padding: 5px 30px 25px 30px;
            width: 65%;
            text-align: center;
          }

          .about-us-title {
            font-size: 26px;
            margin-bottom: 40px;
            font-weight: 500;
            text-transform: uppercase;
            padding: 0px 200px;
            padding-top: 40px;
          }

          .about-us-title-2 {
            font-size: 21px;
            margin-bottom: 40px;
            font-weight: 500;
            text-transform: uppercase;
            padding: 0px 200px;
            padding-top: 40px;
          }

          .about-us-title > strong {
            color: var(--primary-color);
          }

          .Hero-Box h1 {
            font-weight: bold;
            text-transform: uppercase;
            line-height: 1.37;
            font-size: 42px;
          }

          .Hero-Box > h2 > small{
            color: #3BCF75;
          }

          .Hero-Box > h2 {
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
          }

          .how-it-works {
            text-align: center;
            padding: 50px 0;
            background: white;
          }

          .how-it-works h2 {
            font-size: 32px;
            padding: 15px 0px;
            margin-bottom: 40px;
            font-weight: 500;
            /* text-transform: uppercase; */
          }

          .how-works-steps {
            padding: 10px 20px;
          }

          .how-works-steps .how-works-title {
            font-weight: bold;
            font-size: 18px;
            /* color: var(--primary-color); */
            color: #333;
            padding: 12px 0px;
          }

          .how-works-description {
            font-size: 16px;
            color: #79776B;
          }

          .how-works-steps > img {
            padding: 15px 0px;
          }

          .background-primary {
            background: var(--primary-color);
            color: #FFFFFF;
          }

          .about-questions {
            font-size: 18px;
          }

          .container-business-info {
            background: #FFFFFF;
            padding: 40px 0px;
          }



          @media (max-width: 600px) {
            .Hero {
              height: 200px;
            }

            .Hero-Box {
              width: 100%;
            }

            .mobile-hide {
              display: none;
            }

            .Hero-Box h1 {
              font-size: 21px;
            }

            .how-it-works {
              padding: 50px 0;
            }


            .how-it-works h2 {
              font-size: 12px;
            }

            .how-works-steps {
              padding: 10px 20px;
            }

            .how-works-steps .how-works-title {
              font-size: 18px;
            }

            .about-us-title {
              font-size: 14px;
              padding: 0px 20px;
              padding-top: 1Q0px;
            }

            .about-us-title-2 {
              font-size: 16px;
              padding: 0px 20px;
              padding-top: 1Q0px;
            }

            .about-questions {
              font-size: 12px;
            }

          }

        `}</style>
      </main>
    </Layout>
  )
}

export default Home;
