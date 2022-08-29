<template>
  <div class="apps">
    <Header @openMenu="openNav = !openNav" />
    <Navbar :openMenyu="openNav" />
    <component :is="layout">
      <router-view />
    </component>
    <Footer />
  </div>
</template>
<script>
import CardLayout from './components/apps/CardLayout.vue';
import Header from './components/apps/Header.vue';
import Navbar from './components/apps/Navbar.vue';
import Footer from './components/apps/Footer.vue';
export default {
  data() {
    return {
      openNav: false,
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'card') + '-layout';
    },
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Xato');
    },
  },
  components: { CardLayout, Header, Navbar, Footer },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
