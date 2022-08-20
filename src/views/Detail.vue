<template>
  <div class="conter">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>Sedina Chexollari</h4></div>
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
export default {
  name: 'Detail',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
