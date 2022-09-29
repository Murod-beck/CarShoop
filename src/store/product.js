import {
  getDatabase,
  ref as dbRef,
  push,
  onValue,
  update,
  child,
  remove,
} from 'firebase/database';
import {
  getStorage,
  ref as sgRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

export default {
  actions: {
    async addProduct({ commit, dispatch }, product) {
      const image = product.imagefile;
      try {
        const sg = getStorage();
        const db = getDatabase();
        const products = await push(dbRef(db, 'product/'), product);
        const fileDate = await uploadBytes(
          sgRef(sg, `photo/ ${products.key}`),
          image
        );
        const imageSrc = await getDownloadURL(sgRef(sg, fileDate.ref.fullPath));
        await update(child(dbRef(db, `product/`), products.key), {
          imagetitle: imageSrc,
        });
      } catch {
        commit('setError', e);
        throw e;
      }
    },
    async updateProduct({ commit, dispatch }, upProduct) {
      const id = upProduct.id;
      const images = upProduct.imagefile;
      try {
        const sg = getStorage();
        const db = getDatabase();
        await update(child(dbRef(db, 'product/'), id), upProduct);
        const forRef = await sgRef(sg, `photo/ ${id}`);
        await deleteObject(forRef);
        const fileDate = await uploadBytes(forRef, images);
        const imageSrc = await getDownloadURL(sgRef(sg, fileDate.ref.fullPath));
        await update(child(dbRef(db, `product/`), id), {
          imagetitle: imageSrc,
        });
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async deleteProduct({ commit, dispatch }, deletProduct) {
      try {
        const sg = getStorage();
        const db = getDatabase();
        await remove(child(dbRef(db, 'product/'), deletProduct));
        await deleteObject(sgRef(sg, `photo/ ${deletProduct}`));
      } catch (e) {
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
  },
};
