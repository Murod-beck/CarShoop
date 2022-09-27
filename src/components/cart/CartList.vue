<template>
  <div class="col s12 m4 l3" v-for="(cart, index) of carts" :key="index">
    <div class="card large">
      <div class="card-image" @click="$router.push('/detail/' + cart.id)">
        <img :src="cart.imagetitle" />
      </div>
      <div class="card-content">
        <span class="card-title" @click="$router.push('/detail/' + cart.id)"
          >Nomi: {{ cart.title }}</span
        >
        <h6>Narxi: {{ cart.price }} ₽.</h6>
        <h5>Dona: {{ cart.number }}</h5>
      </div>
      <div class="card-tabs tabl">
        <ul class="tabs tabs-fixed-width">
          <li class="tab">
            <a class="waves-effect btns" @click="Increment(index)"
              ><i class="material-icons icons">add_circle</i></a
            >
          </li>
          <li class="tab">
            <a class="waves-effect btns" @click="Decrement(index)"
              ><i class="material-icons icons">do_not_disturb_on</i></a
            >
          </li>
          <li class="tab">
            <a class="waves-effect btns" @click="Delete(index)"
              ><i class="material-icons icons">delete </i></a
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
