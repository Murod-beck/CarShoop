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
        id="input_text1"
        type="text"
        v-model.trim="names"
        :class="{ invalid: v$.names.$error && v$.names.required }"
      />
      <label for="input_text1">Nomi</label>
    </div>

    <div class="input-field">
      <input
        id="input_text2"
        type="text"
        v-model.trim="price"
        :class="{ invalid: v$.price.$error && v$.price.required }"
      />
      <label for="input_text2">Narxi</label>
    </div>

    <div class="input-field">
      <input
        id="input_text3"
        type="text"
        v-model.trim="article"
        :class="{ invalid: v$.article.$error && v$.article.required }"
      />
      <label for="input_text3">Article</label>
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
      <input type="file" @change="newPhoto" />
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
    async addProducts() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      const setProduct = {
        categoryId: this.category,
        name: this.names,
        price: this.price,
        article: this.article,
        description: this.description,
        photo: this.photoFile,
        title: this.photoTitle,
      };
      try {
        await this.$store.dispatch('addProduct', setProduct);
        this.$message('Yuklash muvaffaqiyatli yakunlandi');
        (this.names = ''),
          (this.price = ''),
          (this.article = ''),
          (this.description = ''),
          (this.photoTitle = '');
      } catch (e) {}
    },
    newPhoto(event) {
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
