<template>
  <div class="conter">
    <Loader v-if="loading" />
    <div class="row" v-else>
      <div class="col s12 m12">
        <div class="card">
          <div class="row" v-for="produc of product" :key="produc">
            <div class="col s12 m5 l4">
              <div class="card-image">
                <img :src="produc.imagetitle" />
              </div>
            </div>
            <div class="col s12 m7">
              <div class="card-content">
                <span class="card-title">Nomi........{{ produc.title }}</span>
                <div
                  class="chip white-text"
                  :class="{
                    red: produc.color === 'qizil',
                    black: produc.color === 'qora',
                    blue: produc.color === 'kok',
                    green: produc.color === 'yashil',
                    yellow: produc.color === 'sariq',
                    white: produc.color === 'oq',
                    pink: produc.color === 'pushti',
                    brown: produc.color === 'jigarrang',
                  }"
                >
                  {{ produc.color }}
                </div>
                <h6>Article........{{ produc.article }}</h6>
                <span class="card-title">Narxi.......{{ produc.price }} ₽</span>
              </div>
              <div class="card-tabs">
                <ul class="tabs tabs-fixed-width">
                  <li class="tab">
                    <a class="waves-effect btns" @click.once="addCart(produc)"
                      ><i class="material-icons icons">add_shopping_cart</i></a
                    >
                  </li>
                  <li class="tab">
                    <a
                      class="waves-effect btns"
                      @click.once="addAsessment(produc)"
                      ><i class="material-icons icons">assessment</i></a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col s12">
              <div class="card-content">
                <p>{{ produc.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/apps/Loader.vue';
export default {
  name: 'Detail',
  data() {
    return {
      loading: true,
      product: [],
    };
  },
  props: {},
  methods: {
    addCart(produc) {
      this.$store.dispatch('addCarts', produc);
    },
    addAsessment(produc) {
      this.$store.dispatch('addAsessments', produc);
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    const products = await this.$store.dispatch('fetchProduct');
    products.map((pro) => {
      if (pro.id === id) {
        this.product.push(pro);
      }
    });

    this.loading = false;
  },
  components: { Loader },
};
</script>

<style scoped></style>
