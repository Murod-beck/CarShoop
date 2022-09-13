<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m12 l6">
        <div>
          <div class="collection-header center">
            <h4>Admin</h4>
          </div>
          <div class="collection">
            <a href="#tahrirlash" class="collection-item" @click="update = true"
              >Yuklash</a
            >
            <a href="#yuklash" class="collection-item" @click="update = false"
              >Tahrirlash</a
            >
          </div>
        </div>
        <form class="card auth-card">
          <div class="card-title center">
            <i class="material-icons">category</i>
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
      <div class="col s12 m12 l6">
        <SetProduct v-if="update" />
        <UpdateProduct v-else />
      </div>
    </div>
  </div>
</template>

<script>
import SetProduct from '@/components/product/SetProduct.vue';
import UpdateProduct from '@/components/product/UpdateProduct.vue';
export default {
  name: 'Amin',
  created() {},
  data() {
    return {
      update: true,
      category: '',
    };
  },
  props: {},
  methods: {
    async addCategoryies() {
      const categories = this.category;
      try {
        await this.$store.dispatch('addCategory', categories);
        this.$message('Categorya muvaffaqiyatli yuklandi');
        this.category = '';
        this.v$.$reset();
      } catch {}
    },
  },
  components: { SetProduct, UpdateProduct },
};
</script>

<style scoped></style>
