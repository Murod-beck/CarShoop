<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>Avto Bezaklar</h4></div>
        <Filters />
      </div>
      <div class="col s12 m4 l3" v-for="product of products" :key="product">
        <div class="card large">
          <div class="card-image">
            <img :src="require('@/images/' + product.img)" />
          </div>
          <div class="card-content">
            <span class="card-title">{{ product.title }}</span>
            <span class="card-title">Narxi: {{ product.sum }}</span>
            <span class="card-title">Art: {{ product.art }}</span>
            <p>{{ product.par }}</p>
          </div>
          <hr />
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <a class="waves-effect"
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
      products: [
        {
          id: 1,
          img: '51.jpg',
          title: 'Nomi',
          sum: 100,
          art: 153,
          par: 'I am a very simple card. I am a very simple card.I am good at containing small bits of information. I am convenient because I require ',
        },
        {
          id: 2,
          img: '52.jpg',
          title: 'Nomi',
          sum: 300,
          art: 253,
          par: 'I am a very simple card. I am good at containing small bits of information require ',
        },
        {
          id: 3,
          img: '54.jpeg',
          title: 'Nomi',
          sum: 300,
          art: 353,
          par: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require ',
        },
        {
          id: 3,
          img: '55.jpg',
          title: 'Nomi',
          sum: 400,
          art: 353,
          par: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require ',
        },
      ],
    };
  },
  props: {},
  methods: {},
  components: { Filters },
};
</script>

<style lang="scss" scoped></style>
