import { createStore } from 'vuex';
import user from './user';
import info from './info';
import product from './product';
import category from './category';
import carts from './carts';
import asesment from './asesment';

export default createStore({
  state: {
    error: null,
  },
  getters: {
    error: (s) => s.error,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {},
  modules: { user, info, product, category, carts, asesment },
});
