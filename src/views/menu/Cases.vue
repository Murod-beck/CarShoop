<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center">
          <h4>Sedina Chexollari</h4>
        </div>
        <FilterProduct />
      </div>
      <Loader v-if="loading" />
      <div
        v-else
        class="col s12 m4 l3"
        v-for="(produc, index) of product"
        :key="index"
      >
        <div class="card large">
          <div class="card-image" @click="$router.push('/detail/' + produc.id)">
            <img :src="produc.imagetitle" />
          </div>
          <div class="card-content">
            <span
              class="card-title"
              @click="$router.push('/detail/' + produc.id)"
              >Nomi.....{{ produc.title }}</span
            >
            <h6>Narxi....{{ produc.price }} ₽.</h6>
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
  </div>
</template>

<script>
import Loader from '@/components/apps/Loader.vue';
import FilterProduct from '@/components/product/FilterProduct.vue';
export default {
  name: 'Cases',
  data() {
    return {
      loading: true,
      product: [],
    };
  },
  methods: {
    addCart(produc) {
      this.$store.dispatch('addCarts', produc);
    },
    addAsessment(produc) {
      this.$store.dispatch('addAsessments', produc);
    },
  },
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
  components: { Loader, FilterProduct },
};
</script>

<style scoped></style>
