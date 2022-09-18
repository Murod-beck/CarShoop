<template>
  <div class="col s12 m6 l3" v-for="(cart, index) in carts" :key="index">
    <div class="card large">
      <div class="card-image">
        <img :src="cart.imagetitle" />
      </div>
      <div class="card-content">
        <span class="card-title">{{ cart.title }}</span>
        <h6>Narxi: {{ cart.price }} ₽.</h6>
        <h6>Dona: {{ cart.number }}</h6>
      </div>
      <hr />
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab">
            <a class="waves-effect" @click="Increment(index)"
              ><i class="material-icons color">add_circle_outline</i></a
            >
          </li>
          <li class="tab">
            <a class="waves-effect" @click="Decrement(index)"
              ><i class="material-icons color">remove_circle_outline </i></a
            >
          </li>
          <li class="tab">
            <a class="waves-effect" @click="Delete(index)"
              ><i class="material-icons color">delete </i></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  data() {
    return {};
  },
  props: {
    carts: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    Delete(index) {
      this.$store.dispatch('deleteCart', index);
    },
    Increment(index) {
      this.$store.dispatch('incrementCart', index);
    },
    Decrement(index) {
      this.$store.dispatch('decrementCart', index);
    },
  },
};
</script>

<style scoped></style>
