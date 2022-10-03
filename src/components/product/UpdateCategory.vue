<template>
  <div>
    <form class="card auth-card">
      <div class="card-title center">
        <i class="material-icons">category</i>
      </div>

      <div class="input-field">
        <select ref="select" v-model="categorya" @change="selecCategory">
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
            @click.prevent="deletCategoryies"
          >
            Categorya O'chirish
            <i class="material-icons right">delete</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CategorySelect',
  created() {},
  data() {
    return {
      categorya: null,
      categories: [],
    };
  },
  props: {},
  emits: ['selectCategory'],
  methods: {
    deletCategoryies() {
      this.$store.dispatch('deleteCategory', this.categorya);
      this.$message("Categorya muvaffaqiyatli o'chirildi");
    },
    selecCategory() {
      this.$emit('selectCategory', this.categorya);
    },
  },

  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategory');
    if (this.categories.length) {
      this.categorya = this.categories[0].id;
    }
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
    }, 0);
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>

<style scoped></style>
