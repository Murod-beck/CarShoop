import {
  getDatabase,
  ref as dbRef,
  push,
  onValue,
  update,
  child,
} from 'firebase/database';
import {
  getStorage,
  ref as sgRef,
  uploadBytes,
  updateMetadata,
  getMetadata,
  getDownloadURL,
} from 'firebase/storage';

export default {
  actions: {
    async addProduct({ commit, dispatch }, addProduct) {
      const photo = addProduct.photo;
      const title = addProduct.title;
      try {
        const sg = getStorage();
        const db = getDatabase();
        await push(dbRef(db, 'product/'), addProduct);
        await uploadBytes(sgRef(sg, 'photo/' + title), photo);
      } catch {
        commit('setError', e);
        throw e;
      }
    },
    async fetchProduct({ commit, dispatch }) {
      try {
        const db = getDatabase();
        const selectod = [];
        await onValue(dbRef(db, 'product'), (snapshot) => {
          snapshot.forEach((value) => {
            const val = value.val();
            const key = value.key;
            selectod.push({ ...val, id: key });
          });
        });
        return selectod;
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchPhoto({ commit, dispatch }) {
      try {
        const sg = getStorage();

        // return getMetadata(sgRef(sg, photo.title));
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async updateProduct({ commit, dispatch }, upProduct) {
      const id = upProduct.id;
      const photo = upProduct.photo;
      const title = upProduct.title;
      try {
        const sg = getStorage();
        const db = getDatabase();
        update(child(dbRef(db, 'product'), id), upProduct);
        updateMetadata(sgRef(sg, 'photo/' + title), photo);
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
};
