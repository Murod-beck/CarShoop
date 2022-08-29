<template>
  <form class="card auth-card">
    <div class="card-title center">
      <i class="material-icons">edit</i>
    </div>

    <div class="input-field">
      <select ref="select" v-model="products">
        <option v-for="selec of selectod" :key="selec.id" :value="selec.id">
          {{ selec.name }}
        </option>
      </select>
      <label>Product</label>
    </div>

    <div class="input-field">
      <input
        id="name"
        type="text"
        v-model.trim="names"
        :class="{ invalid: v$.names.$error && v$.names.required }"
      />
      <label for="name">Nomi</label>
    </div>

    <div class="input-field">
      <input
        id="price"
        type="text"
        v-model.trim="price"
        :class="{ invalid: v$.price.$error && v$.price.required }"
      />
      <label for="price">Narxi</label>
    </div>

    <div class="input-field">
      <input
        id="article"
        type="text"
        v-model.trim="article"
        :class="{ invalid: v$.article.$error && v$.article.required }"
      />
      <label for="article">Article</label>
    </div>

    <div class="input-field">
      <textarea
        id="description"
        class="materialize-textarea"
        v-model.trim="description"
        :class="{ invalid: v$.description.$error && v$.description.required }"
      ></textarea>
      <label for="description">Tavsif</label>
    </div>

    <div class="file-field">
      <input type="file" @change="upPhoto" />
      <label for="textarea1">Photo</label>
      <div class="file-path-wrapper">
        <input
          class="file-path"
          type="text"
          v-model="photoTitle"
          :class="{ invalid: v$.photoTitle.$error && v$.photoTitle.required }"
        />
      </div>
    </div>
    <div class="center" v-if="photoTitle">
      <img :src="photoUrl" width="150" />
    </div>

    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          @click.prevent="upProducta"
        >
          Tahrirlash
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
export default {
  name: 'SetProduct',
  data() {
    return {
      v$: useVuelidate(),
      select: null,
      selectod: [],
      products: null,
      names: '',
      price: '',
      article: '',
      description: '',
      photoFile: null,
      photoTitle: '',
      photoUrl: '',
    };
  },
  validations() {
    return {
      names: { required },
      price: { required },
      article: { required },
      description: { required },
      photoTitle: { required },
    };
  },
  props: {},
  methods: {
    async upProducta() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      const upProduct = {
        id: this.products,
        name: this.names,
        price: this.price,
        article: this.article,
        description: this.description,
        photo: this.photoFile,
        title: this.photoTitle,
      };
      try {
        await this.$store.dispatch('updateProduct', upProduct);
        this.$message('Yuklash muvaffaqiyatli yangilandi');
        (this.names = ''),
          (this.price = ''),
          (this.article = ''),
          (this.description = ''),
          (this.photoTitle = '');
      } catch (e) {}
    },
    upPhoto(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('File tanlang!');
      }
      this.photoTitle = filename;

      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.photoUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.photoFile = files[0];
    },
  },
  async mounted() {
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
    }, 0);

    this.selectod = await this.$store.dispatch('fetchProduct');
    if (this.selectod.length) {
      this.products = this.selectod[0].id;
    }
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>

<style scoped></style>
