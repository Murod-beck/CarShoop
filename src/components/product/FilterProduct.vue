<template>
  <h6 class="color">Saralash</h6>
  <select class="browser-default">
    <option value="" disabled selected>Yangilari</option>
    <option value="minPrice">Arzondan</option>
    <option value="maxPrice">Qimmatidan</option>
  </select>
  <h6 class="color">Ko'rsatish</h6>
  <select class="browser-default">
    <option value="" disabled selected>10</option>
    <option value="2">20</option>
    <option value="3">30</option>
  </select>
  <table>
    <tr>
      <td><a class="btn" @click="sortParam = 'title'">Title</a></td>
      <td><a class="btn" @click="sortParam = 'price'">Price</a></td>
    </tr>
    <tr v-for="phone in sortedList" :key="phone">
      <td>{{ phone.title }}</td>
      <td>{{ phone.price }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      select: null,
    };
  },
  props: ['products'],
  methods: {},
  computed: {
    sortedList() {
      let sortTitle = function (d1, d2) {
        return d1.title.toLowerCase() > d2.title.toLowerCase() ? 1 : -1;
      };
      let sortPrice = function (d1, d2) {
        return d1.price > d2.price ? 1 : -1;
      };
      switch (this.sortParam) {
        case 'title':
          return this.products.sort(sortTitle);
        case 'price':
          return this.products.sort(sortPrice);
        default:
          return this.products;
      }
    },
  },
};
</script>

<style scoped></style>
