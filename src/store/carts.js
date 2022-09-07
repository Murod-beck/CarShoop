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
    setCart: (state, product) => {
      if (state.cart.length) {
        let addProduct = false;
        state.cart.map((inx) => {
          if (inx.id === product.id) {
            addProduct = true;
            item.article++;
          }
        });
        if (!addProduct) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    deleteCarts: (state, index) => {
      state.cart.splice(index, 1);
    },
    incrementCarts: (state, index) => {
      state.cart[index].article++;
    },
    decrementCarts: (state, index) => {
      if (state.cart[index].article > 1) {
        state.cart[index].article--;
      }
    },
  },
  actions: {
    addCarts({ commit, dispatch }, product) {
      commit('setCart', product);
    },
    deleteCart({ commit, dispatch }, index) {
      commit('deleteCarts', index);
    },
    incrementCart({ commit, dispatch }, index) {
      commit('incrementCarts', index);
    },
    decrementCart({ commit, dispatch }, index) {
      commit('decrementCarts', index);
    },
  },
};
