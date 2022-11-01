<template>
  <h6 class="color">Saralash</h6>
  <select class="browser-default">
    <option value="" disabled selected>Yangilari</option>
    <option value="1" @change="sortAZ">Nomi A > Z</option>
    <option value="3">Reyting A > Z</option>
    <option value="2">Arzondan > Qimmat</option>
  </select>
  <p>
    <label>
      <input type="checkbox" value="F" v-model="producta" />
      <span>Red</span>
    </label>
  </p>
  <h6 class="color">Ko'rsatish</h6>
  <select class="browser-default color">
    <option value="" disabled selected>10</option>
    <option value="2">20</option>
    <option value="3">30</option>
  </select>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      producta: [],
    };
  },
  props: ['products'],
  methods: {
    sortAZ() {
      this.$emit('producta', filterData());
    },
  },
  computed: {
    filterData() {
      let data = [];
      if (this.producta.length) {
        data = this.products.filter(
          (x) => this.producta.indexOf(x.title.toString()) != -1
        );
      } else {
        data = this.products;
      }
      return data;
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.selec);
  },
};
</script>

<style scoped></style>
