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
              >Yuklash</a
            >
            <a
              href="#tahrirlash"
              class="collection-item"
              @click="update = false"
              >Tahrirlash</a
            >
          </div>
        </div>
        <Categories :updates="update" />
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
import Categories from '@/components/product/Categories.vue';
export default {
  name: 'Amin',
  created() {},
  data() {
    return {
      update: true,
    };
  },
  props: {},
  methods: {},
  components: { SetProduct, UpdateProduct, Categories },
};
</script>

<style scoped></style>
