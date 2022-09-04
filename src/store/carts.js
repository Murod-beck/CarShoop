export default {
  state: {
    cart: [],
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    setCart: (state, item) => {
      if (state.cart.length) {
        let addProduct = false;
        state.cart.map((inx) => {
          if (inx.id === item.id) {
            addProduct = true;
            item.article++;
          }
        });
        if (!addProduct) {
          state.cart.push(item);
        }
      } else {
        state.cart.push(item);
      }
    },
    deleteCart: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    addCarts({ commit, dispatch }, item) {
      commit('setCart', item);
    },
    deletCarts({ commit, dispatch }, index) {
      commit('deleteCart', index);
    },
  },
};
