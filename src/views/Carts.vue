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
          <div class="collection white">
            <h5>Sotib olish</h5>
            <a class="waves-effect waves-light btn"
              ><i class="material-icons right">credit_card</i>Cart</a
            >
          </div>
        </div>
      </div>
      <CartList v-if="cart.length" :carts="cart" />
      <h5 class="red-text center" v-else>Korzinka xozircha bo'sh</h5>
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
        result = result.reduce((sum, el) => {
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
