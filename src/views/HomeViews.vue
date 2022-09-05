<template>
  <div class="conter fonts grey lighten-3">
    <nav class="bgc">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Tavsiyalar</a>
      </div>
    </nav>
    <Recommend />
  </div>
  <div class="parallax-container" ref="parallaxi">
    <div class="parallax"><img src="@/images/5.jpg" /></div>
  </div>
  <div class="conter fonts">
    <nav class="bgc">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Bizning Xizmatlar</a>
      </div>
    </nav>
    <Service />
  </div>
</template>

<script>
import Recommend from '@/components/home/Recommend.vue';
import Service from '@/components/home/Service.vue';
export default {
  name: 'HomeViews',
  created() {},
  data() {
    return {};
  },
  mounted() {
    M.Parallax.init(this.$refs.parallaxi);
  },
  props: {},
  methods: {},
  components: { Recommend, Service },
};
</script>

<style scoped>
.color {
  color: rgb(70, 0, 120);
}
.parallax {
  bottom: -350px;
}
</style>
