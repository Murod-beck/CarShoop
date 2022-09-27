<template>
  <div class="conter">
    <div class="row">
      <div
        class="col s12 m6 l4"
        v-for="(produc, index) of asessment"
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
                <a class="waves-effect btns" @click="deleteAsessment(index)"
                  ><i class="material-icons icons">delete</i></a
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
import { mapGetters } from 'vuex';
import Filters from '@/components/product/Filters.vue';
export default {
  name: 'Asesment',
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    addCart(produc) {
      this.$store.dispatch('addCarts', produc);
    },
    deleteAsessment(index) {
      this.$store.dispatch('deleteAsessments', index);
    },
  },
  computed: {
    ...mapGetters(['asessment']),
  },
  components: { Filters },
};
</script>

<style scoped></style>
