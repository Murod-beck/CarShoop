<template>
  <Loader v-if="loading" />
  <div class="row" v-else>
    <div class="col s12 m6 l4" v-for="(produc, index) of product" :key="index">
      <div class="card large">
        <div class="card-image" @click="$router.push('/detail/' + produc.id)">
          <img :src="produc.imagetitle" />
        </div>
        <div class="card-content">
          <span class="card-title" @click="$router.push('/detail/' + produc.id)"
            >Nomi: {{ produc.title }}</span
          >
          <h6>{{ produc.price }} ₽.</h6>
          <hr />
          <p>{{ produc.description }}</p>
        </div>
        <div class="card-tabs tabl">
          <ul class="tabs tabs-fixed-width">
            <li class="tab">
              <a class="waves-effect btns" @click.once="addCart(produc)"
                ><i class="material-icons icons">add_shopping_cart</i></a
              >
            </li>
            <li class="tab">
              <a class="waves-effect btns" @click.once="addAsessment(produc)"
                ><i class="material-icons icons">assessment</i></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../apps/Loader.vue';
export default {
  name: 'Recommend',
  created() {},
  data() {
    return {
      product: [],
      loading: true,
    };
  },
  props: {},
  methods: {},
  async mounted() {
    const category = await this.$store.dispatch('fetchCategory');
    const products = await this.$store.dispatch('fetchProduct');
    products.map((pro) => {
      if (pro.categoryId === category[0].id) {
        this.product.push(pro);
      }
    });
    this.loading = false;
  },
  components: { Loader },
};
</script>

<style scoped></style>
