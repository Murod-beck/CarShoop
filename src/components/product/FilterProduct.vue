<template>
  <h6 class="color">Saralash</h6>
  <select ref="select" v-model="producta">
    <option value="" disabled selected>Yangilari</option>
    <option>{{ producta }}</option>
  </select>
  <h6 class="color">Ko'rsatish</h6>
  <select ref="selects">
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
      select: null,
      producta: '',
    };
  },
  props: ['products'],
  methods: {
    sortAZ() {
      console.log(filterData());
    },
  },
  computed: {
    filterData() {
      let comp = this.producta;
      return this.products.filter(function (elem) {
        if (comp === '') return true;
        else return elem.producta.indexOf(comp) > -1;
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
    }, 0);
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.selects);
    }, 0);
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>

<style scoped></style>
