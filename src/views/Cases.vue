<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>Sedina Chexollari</h4></div>
        <Filters />
      </div>
      <div class="col s12 m4 l3" v-for="cas of cases" :key="cas">
        <div class="card large">
          <div class="card-image">
            <img src="@/images/12.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title">{{ cas.name }}</span>

            <h6>Narxi: {{ cas.price }} ₽.</h6>
            <hr />
            <p>{{ cas.description }}</p>
          </div>
          <hr />
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <a class="waves-effect" @click="addCart(cas)"
                  ><i class="material-icons color">add_shopping_cart</i></a
                >
              </li>
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons color">assessment</i></a
                >
              </li>
              <li class="tab">
                <a class="waves-effect"
                  ><i class="material-icons color">favorite_border </i></a
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
  created() {},
  data() {
    return {
      cases: [],
    };
  },
  props: {},
  methods: {
    addCart(item) {
      this.$store.dispatch('addCarts', item);
    },
  },
  async mounted() {
    this.cases = await this.$store.dispatch('fetchProduct');
  },
  components: { Filters },
};
</script>

<style scoped></style>
