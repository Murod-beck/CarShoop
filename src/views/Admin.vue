<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m12 l6">
        <div>
          <div class="collection-header center">
            <h4>Admin</h4>
          </div>
          <div class="collection">
            <a href="#yuklash" class="collection-item" @click="update = true"
              >Yaratish</a
            >
            <a
              href="#tahrirlash"
              class="collection-item"
              @click="update = false"
              >Tahrirlash</a
            >
          </div>
        </div>
        <EditCategory v-if="update" />
        <UpdateCategory v-else />
      </div>
      <div class="col s12 m12 l6">
        <EditProduct v-if="update" />
        <UpdateProduct v-else />
      </div>
    </div>
  </div>
</template>

<script>
import EditCategory from '@/components/product/EditCategory.vue';
import UpdateCategory from '@/components/product/UpdateCategory.vue';
import EditProduct from '@/components/product/EditProduct.vue';
import UpdateProduct from '@/components/product/UpdateProduct.vue';
export default {
  name: 'Admin',
  data() {
    return {
      update: true,
    };
  },
  props: {},
  methods: {},
  components: {
    EditCategory,
    UpdateCategory,
    EditProduct,
    UpdateProduct,
  },
};
</script>

<style scoped></style>
