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
            item.number++;
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
      state.cart[index].number++;
    },
    decrementCarts: (state, index) => {
      if (state.cart[index].number > 1) {
        state.cart[index].number--;
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
