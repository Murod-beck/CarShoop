<template>
  <h6 class="color">Saralash</h6>
  <select class="browser-default">
    <option value="" disabled selected>Yangilari</option>
    <option value="1">Nomi A > Z</option>
    <option value="3">Reyting A > Z</option>
    <option value="2">Arzondan > Qimmat</option>
  </select>
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
  created() {},
  data() {
    return {};
  },
  mounted() {
    M.FormSelect.init(this.$refs.selec);
  },
  props: {},
  methods: {},
};
</script>

<style scoped></style>
