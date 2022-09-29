<template>
  <div>
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
            Categorya yaratish
            <i class="material-icons right">add_circle</i>
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
    };
  },
  props: {},
  methods: {
    async addCategoryies() {
      try {
        await this.$store.dispatch('addCategory', this.category);
        this.$message('Categorya muvaffaqiyatli yuklandi');
        this.category = '';
        this.v$.$reset();
      } catch {}
    },
  },
};
</script>

<style scoped></style>
