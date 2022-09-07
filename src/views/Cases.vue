<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>Sedina Chexollari</h4></div>
        <Filters />
      </div>
      <div class="col s12 m4 l3" v-for="produc of product" :key="produc">
        <div class="card large">
          <div class="card-image">
            <img src="@/images/12.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title">{{ produc.name }}</span>

            <h6>Narxi: {{ produc.price }} ₽.</h6>
            <hr />
            <p>{{ produc.description }}</p>
          </div>
          <hr />
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <a class="waves-effect" @click="addCart(produc)"
                  ><i class="material-icons">add_shopping_cart</i></a
                >
              </li>
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons">assessment</i></a
                >
              </li>
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons">favorite_border </i></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';
export default {
  name: 'Cases',
  data() {
    return {
      product: [],
    };
  },
  methods: {
    addCart(produc) {
      this.$store.dispatch('addCarts', produc);
    },
  },
  async mounted() {
    this.product = await this.$store.dispatch('fetchProduct');
  },
  components: { Filters },
};
</script>

<style scoped></style>
