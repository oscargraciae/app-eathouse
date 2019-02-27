import axios from 'axios';
// import fetch from 'isomorphic-unfetch';

const baseUrl = 'http://localhost:3001';
// const baseUrl = 'http://127.0.0.1:3000';
// const baseUrl = 'https://api.gigbox.mx';

// axios.defaults.baseURL = 'http://localhost:3001/api/v1';
axios.defaults.baseURL = 'https://api.eathouse.mx/api/v1';
// axios.defaults.baseURL = 'https://api-eathouse-cpefohxxee.now.sh/api/v1';


const api = {
  user: {
    async authentication(email, password) {
      try {
        const response = await axios.post(`/users/login`, { email, password });
        return response.data;
      } catch (error) {
        return {
          ok: false,
        }
      }
    },
    async authenticationFacebook(token) {
      try {
        const response = await axios.post(`/users/login-facebook`, { access_token: token });
        return response.data;
      } catch (error) {
        return {
          ok: false,
        }
      }
    },
    async create(userData) {
      const response = await axios.post(`/users/signup`, userData);
      return response.data;
    },
    async get(id) {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    },
    async createAddress(data) {
      const response = await axios.post(`/users/address`, data);
      return response.data;
    },
    async createAddressWithBusiness(data) {
      const response = await axios.post(`/users/link-business`, data);
      return response.data;
    },
    async getAddress() {
      const response = await axios.get(`/address`);
      return response.data;
    },
    async sendMailPassword(data) {
      const response = await axios.post(`/users/send-password-email`, data);
      return response.data;
    },
    async validationToken(emailToken, id) {
      const response = await axios.get(`/password?t=${emailToken}&id=${id}`);
      return response.data;
    },
    async changePassword(id, data) {
      const response = await axios.post(`/password/${id}`, data);
      return response.data;
    },
    async updateAlerts(data) {
      const response = await axios.post(`/users/control-alerts`, data);
      return response.data;
    }
  },
  creditCard: {
    async create(data) {
      const response = await axios.post(`/credit-cards`, data);
      return response.data;
    },
    async getAll() {
      const response = await axios.get(`/credit-cards`);
      return response.data;
    }
  },
  suscriptions: {
    async get(id) {
      const response = await axios.get(`/suscriptions/${id}`);
      return response.data;
    }
  },
  dish: {
    async getAll() {
      const response = await axios.get(`/dishes`);
      return response.data;
    },
    async getAllByCategory(categoryId) {
      const response = await axios.get(`/dishes/category/${categoryId}`);
      return response.data;
    },
    async get(id) {
      const response = await axios.get(`/dishes/${id}`);
      return response.data;
    }
  },
  orders: {
    async getAll() {
      const response = await axios.get(`/orders`);
      return response.data;
    },
    async create(order) {
      const response = await axios.post('/orders', order);
      return response.data;
    },
    async estimateOrder(order) {
      // Calcula el costo de la orden
      const response = await axios.post('/orders/estimate-order', order);
      return response.data;
    },
    async getDetail(id) {
      const response = await axios.get(`/orders/order-detail/${id}`);
      return response.data;
    },
    async getSchedules() {
      const response = await axios.get('/orders/schedules');
      return response.data;
    }
  },
  business: {
    async getAll() {
      const response = await axios.get('/bussines');
      return response.data;
    }
  }
};

export default api;
