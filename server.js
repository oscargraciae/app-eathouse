const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use((req, res, next) => {
    next();
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/index');
  });

  server.get('/signup', (req, res) => {
    return app.render(req, res, '/signup');
  });

  server.get('/signup-store', (req, res) => {
    return app.render(req, res, '/signup-store');
  });

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login');
  });

  server.get('/password-reset', (req, res) => {
    return app.render(req, res, '/passwordReset');
  });

  server.get('/logout', (req, res) => {
    return app.render(req, res, '/logout');
  });

  server.get('/onboarding', (req, res) => {
    return app.render(req, res, '/onBoarding');
  });

  server.get('/payment-suscription/:id', (req, res) => {
    return app.render(req, res, '/paymentSuscription', { id: req.params.id });
  });

  server.get('/store/:name/:id', (req, res) => {
    // return app.render(req, res, '/store', { id: req.params.id });
    return app.render(req, res, '/store-profile', { id: req.params.id });
  });

  server.get('/menu-public', (req, res) => {
    return app.render(req, res, '/menuPublic');
  });

  server.get('/menu/item/:id/:deliveryDate', (req, res) => {
    return app.render(req, res, '/menuItem', { id: req.params.id });
  });

  server.get('/checkout/:id', (req, res) => {
    return app.render(req, res, '/checkout', { id: req.params.id });
  });

  server.get('/account', (req, res) => {
    return app.render(req, res, '/account');
  });

  server.get('/service/:id', (req, res) => {
    return app.render(req, res, '/service', { id: req.params.id });
  });

  server.get('/orders', (req, res) => {
    return app.render(req, res, '/orders');
  });

  server.get('/schedules', (req, res) => {
    return app.render(req, res, '/schedules');
  });

  server.get('/map-available', (req, res) => {
    return app.render(req, res, '/mapAvailable');
  });

  server.get('/active', (req, res) => {
    return app.render(req, res, '/active');
  });


  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // server.listen(process.env.PORT || 3000);
  const port = process.env.PORT || 3004;

  server.listen(port, () => {
    console.log(`Server listen on port: ${port}`);
  });
})
.catch((error) => {
  console.log("HA OCURRIDO UN ERROR------->", error);
  process.exit(1);
});
