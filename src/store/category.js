import { ref, push, getDatabase, onValue } from 'firebase/database';

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async addCategory({ commit, dispatch }, categories) {
      try {
        const db = getDatabase();
        await push(ref(db, 'category/'), categories);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchCategory({ commit, dispatch }) {
      try {
        const db = getDatabase();
        const selected = [];
        await onValue(ref(db, 'category'), (snapshot) => {
          snapshot.forEach((value) => {
            const val = value.val();
            const key = value.key;
            selected.push({ cat: val, id: key });
          });
        });
        return selected;
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
};
