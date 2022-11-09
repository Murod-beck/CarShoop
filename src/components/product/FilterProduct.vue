<template>
  <table>
    <tr>
      <td>
        <h6 class="color">Saralash</h6>
        <label>
          <input type="radio" name="sort" @change="sortMin" />
          <span>Arzonidan</span>
        </label>
      </td>
    </tr>
    <tr>
      <td>
        <label>
          <input type="radio" name="sort" @change="sortMax" />
          <span>Qimmatidan</span>
        </label>
      </td>
    </tr>
    <tr>
      <td>
        <label>
          <input type="radio" name="sorts" @change="sortA" />
          <span>A---Z</span>
        </label>
      </td>
    </tr>
    <tr>
      <td>
        <label>
          <input type="radio" name="sorts" @change="sortZ" />
          <span>Z---A</span>
        </label>
      </td>
    </tr>
    <tr>
      <td>
        <a class="waves-effect waves-light" @click="refresh"
          ><i class="material-icons">refresh</i></a
        >
        <span>Refresh</span>
      </td>
    </tr>
    <tr>
      <td>
        <h6 class="color">Ko'rsatish</h6>
        <label>
          <input type="radio" name="pagination" />
          <span>10</span>
        </label>
      </td>
    </tr>
    <tr>
      <td>
        <label>
          <input type="radio" name="pagination" />
          <span>20</span>
        </label>
      </td>
    </tr>
    <tr>
      <td>
        <label>
          <input type="radio" name="pagination" />
          <span>30</span>
        </label>
      </td>
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
  methods: {
    sortMin() {
      return this.products.sort((a, b) => {
        return a.price - b.price;
      });
    },
    sortMax() {
      return this.products.sort((a, b) => {
        return b.price - a.price;
      });
    },
    sortA() {
      return this.products.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    },
    sortZ() {
      return this.products.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      });
    },
    refresh() {
      console.log(this.products);
      return this.products;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
