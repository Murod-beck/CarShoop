<template>
  <div>
    <Herro />
    <router-view />
  </div>
</template>

<script>
import Herro from './Herro.vue';
export default {
  name: 'CardLayout',
  data() {
    return {};
  },
  components: { Herro },
};
</script>

<style scoped></style>
