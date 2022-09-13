<template>
  <form class="card auth-card">
    <div class="card-title center">
      <i class="material-icons">add_circle</i>
    </div>

    <div class="input-field">
      <select ref="select" v-model="category">
        <option v-for="selec of selected" :key="selec.id" :value="selec.id">
          {{ selec.cat }}
        </option>
      </select>
      <label>Categorya</label>
    </div>

    <div class="input-field">
      <input
        id="title"
        type="text"
        v-model.trim="title"
        :class="{ invalid: v$.title.$error && v$.title.required }"
      />
      <label for="title">Nomi</label>
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
        id="textarea1"
        class="materialize-textarea"
        v-model.trim="description"
        :class="{ invalid: v$.description.$error && v$.description.required }"
      ></textarea>
      <label for="textarea1">Tavsif</label>
    </div>

    <div class="file-field">
      <input type="file" @change="newImage" />
      <label for="textarea1">Photo</label>
      <div class="file-path-wrapper">
        <input
          class="file-path"
          type="text"
          v-model="imagetitle"
          :class="{ invalid: v$.imagetitle.$error && v$.imagetitle.required }"
        />
      </div>
    </div>
    <div class="center" v-if="imagetitle">
      <img :src="imageUrl" width="150" />
    </div>

    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          @click.prevent="addProducts"
        >
          Yuklash
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
      selected: [],
      category: null,
      title: '',
      price: '',
      article: '',
      description: '',
      imagefile: null,
      imagetitle: '',
      imageUrl: '',
    };
  },
  validations() {
    return {
      title: { required },
      price: { required },
      article: { required },
      description: { required },
      imagetitle: { required },
    };
  },
  props: {},
  methods: {
    async addProducts() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      const setProduct = {
        categoryId: this.category,
        title: this.title,
        price: this.price,
        article: this.article,
        number: 1,
        description: this.description,
        imagefile: this.imagefile,
        imagetitle: this.imagetitle,
      };
      try {
        await this.$store.dispatch('addProduct', setProduct);
        this.$message('Yuklash muvaffaqiyatli yakunlandi');
        (this.title = ''),
          (this.price = ''),
          (this.article = ''),
          (this.description = ''),
          (this.imagetitle = '');
        this.v$.$reset();
      } catch (e) {}
    },
    newImage(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('File tanlang!');
      }
      this.imagetitle = filename;

      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.imagefile = files[0];
    },
  },
  async mounted() {
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
    }, 0);

    this.selected = await this.$store.dispatch('fetchCategory');
    if (this.selected.length) {
      this.category = this.selected[0].id;
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
