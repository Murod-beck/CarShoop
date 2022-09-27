export default {
  state: {
    asessment: [],
  },
  getters: {
    asessment(state) {
      return state.asessment;
    },
  },
  mutations: {
    setAsessment: (state, product) => {
      state.asessment.push(product);
    },
    deleteAsessment: (state, index) => {
      state.asessment.splice(index, 1);
    },
  },
  actions: {
    addAsessments({ commit, dispatch }, product) {
      commit('setAsessment', product);
    },
    deleteAsessments({ commit, dispatch }, index) {
      commit('deleteAsessment', index);
    },
  },
};
