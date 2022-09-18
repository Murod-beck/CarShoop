<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>Sedina Chexollari</h4></div>
        <Filters />
      </div>
      <Loader v-if="loading" />
      <div
        v-else
        class="col s12 m4 l3"
        v-for="(produc, index) of product"
        :key="index"
      >
        <div class="card large">
          <div class="card-image">
            <img :src="produc.imagetitle" />
          </div>
          <div class="card-content">
            <span class="card-title">{{ produc.title }}</span>

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
                <a class="waves-effect" @click="addSelected(produc, index)"
                  ><i class="material-icons"
                    >{{ favorit ? 'favorite_border' : 'favorite' }}
                  </i></a
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
import Filters from '@/components/product/Filters.vue';
import Loader from '@/components/apps/Loader.vue';
export default {
  name: 'Cases',
  data() {
    return {
      loading: true,
      favorit: true,
      product: [],
    };
  },
  methods: {
    addCart(produc) {
      this.$store.dispatch('addCarts', produc);
    },
    addSelected(produc, index) {
      this.$store.dispatch('addSelect', produc);
      this.favorit = false;
    },
  },
  async mounted() {
    const category = await this.$store.dispatch('fetchCategory');
    const products = await this.$store.dispatch('fetchProduct');
    products.map((pro) => {
      if (pro.categoryId === category[4].id) {
        this.product.push(pro);
      }
    });
    this.loading = false;
  },
  components: { Filters, Loader },
};
</script>

<style scoped></style>
