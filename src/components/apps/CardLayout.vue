<template>
  <div>
    <Herro />
    <router-view />
  </div>
</template>

<script>
import Herro from './Herro.vue';
export default {
  data() {
    return {};
  },
  components: { Herro },
};
</script>
