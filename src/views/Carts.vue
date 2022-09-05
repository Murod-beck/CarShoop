<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m6 l3">
        <div class="collection-header center">
          <h4>Korzinka</h4>
          <div class="collection">
            <a href="#!" class="collection-item">
              Xisob
              <h4 class="badge">1</h4></a
            >
          </div>
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
  mounted() {},
  computed: {
    ...mapGetters(['cart']),
  },
  components: { CartList },
};
</script>

<style scoped></style>
