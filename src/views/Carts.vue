<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m6 l3">
        <div class="collection-header center">
          <h4>Korzinka</h4>
        </div>
      </div>
      <CartList :items="cart" @deletCart="deletCart" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartList from '@/components/cart/CartList.vue';
export default {
  name: 'Carts',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    deletCart(index) {
      this.$store.dispatch('deletCarts', index);
    },
  },
  computed: {
    ...mapGetters(['cart']),
  },
  components: { CartList },
};
</script>

<style scoped></style>
