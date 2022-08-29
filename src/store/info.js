import { getDatabase, ref, onValue } from 'firebase/database';

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const db = getDatabase();
        return onValue(ref(db, 'users/' + uid + '/info'), (snapshot) => {
          const username = snapshot.val() || 'Anonymous';
          commit('setInfo', username);
        });
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    info: (s) => s.info,
  },
};
