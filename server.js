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

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login');
  });

  server.get('/logout', (req, res) => {
    return app.render(req, res, '/logout');
  });

  server.get('/onboarding', (req, res) => {
    return app.render(req, res, '/onBoarding');
  });

  server.get('/suscriptions', (req, res) => {
    return app.render(req, res, '/suscriptions');
  });

  server.get('/payment-suscription/:id', (req, res) => {
    return app.render(req, res, '/paymentSuscription', { id: req.params.id });
  });

  server.get('/menu', (req, res) => {
    return app.render(req, res, '/menu');
  });
  
  server.get('/menu/item/:id', (req, res) => {
    return app.render(req, res, '/menuItem', { id: req.params.id });
  });

  server.get('/checkout', (req, res) => {
    return app.render(req, res, '/checkout');
  });

  server.get('/profile', (req, res) => {
    return app.render(req, res, '/profile');
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

  server.get('/prueba', (req, res) => {
    return app.render(req, res, '/prueba');
  });

  server.get('/faq', (req, res) => {
    return app.render(req, res, '/faq');
  });

  
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000);
})
.catch(() => {
  process.exit(1);
});
