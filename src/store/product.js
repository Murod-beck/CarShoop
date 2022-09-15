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
  getDownloadURL,
} from 'firebase/storage';

export default {
  actions: {
    async addProduct({ commit, dispatch }, product) {
      const image = product.imagefile;
      try {
        const sg = getStorage();
        const db = getDatabase();
        const products = await push(dbRef(db, 'product/'), product);
        const imageExt = image.name.slice(image.name.lastIndexOf('.'));
        const fileDate = await uploadBytes(
          sgRef(sg, `photo/ ${products.key}${imageExt}`),
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
        const imageExt = images.name.slice(images.name.lastIndexOf('.'));
        const fileDate = await updateMetadata(
          sgRef(sg, `photo/ ${id}${imageExt}`),
          images
        );
        const imageSrc = await getDownloadURL(sgRef(sg, fileDate.ref.fullPath));
        await update(child(dbRef(db, `product/`), id), {
          imagetitle: imageSrc,
        });
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
