<template>
  <div v-if="updates">
    <form class="card auth-card">
      <div class="card-title center">
        <i class="material-icons">border_color</i>
      </div>

      <div class="input-field">
        <input
          id="input_texts"
          type="text"
          v-model.trim="category"
          class="validate"
        />
        <label for="input_texts">Categorya</label>
      </div>

      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
            @click.prevent="addCategoryies"
          >
            Yuklash
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
  <div v-else>
    <form class="card auth-card">
      <div class="card-title center">
        <i class="material-icons">category</i>
      </div>

      <div class="input-field">
        <select ref="select" v-model="categorya">
          <option
            v-for="categor of categories"
            :key="categor"
            :value="categor.id"
          >
            {{ categor.cat }}
          </option>
        </select>
        <label>Categorya</label>
      </div>

      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
            @click.prevent="udaletCategoryies"
          >
            Udalet
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      select: null,
      category: null,
      categorya: null,
      categories: [],
    };
  },
  props: 'updates',
  methods: {
    async addCategoryies() {
      try {
        await this.$store.dispatch('addCategory', this.category);
        this.$message('Categorya muvaffaqiyatli yuklandi');
        this.category = '';
        this.v$.$reset();
      } catch {}
    },
    udaletCategoryies() {
      console.log(this.categorya);
    },
  },
  async mounted() {
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
    }, 0);

    this.categories = await this.$store.dispatch('fetchCategory');
    if (this.categories.length) {
      this.categorya = this.categories[0].id;
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
