<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m6 l3">
        <div class="collection-header center">
          <h4>Korzinka</h4>
          <div class="collection white">
            <h5>Umumiy qiymat</h5>
            <h4 class="badge">{{ totalCart }} ₽.</h4>
          </div>
        </div>
      </div>
      <CartList :items="cart" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartList from '@/components/cart/CartList.vue';
export default {
  name: 'Carts',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cart']),
    totalCart() {
      let result = [];

      if (this.cart.length) {
        for (let item of this.cart) {
          result.push(item.price * item.article);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  components: { CartList },
};
</script>

<style scoped></style>
