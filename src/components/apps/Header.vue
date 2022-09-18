<template>
  <div>
    <nav class="navi indigo lighten-4">
      <div class="nav-wrapper conter">
        <router-link to="/" class="brand-logo color hide-on-small-only"
          >Logo</router-link
        >
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons color">menu</i></a
        >
        <router-link to="/cart" class="right color"
          ><i class="material-icons right color">shopping_cart</i> Tovarlar:
          {{ cart.length }}
        </router-link>
        <ul class="right hide-on-med-and-down">
          <li>
            <div class="input-field">
              <input id="search" type="search" />
              <label class="label-icon" for="search"
                ><i class="material-icons color">search</i></label
              >
            </div>
          </li>
          <li>
            <router-link to="/user"
              ><i class="material-icons color">person</i></router-link
            >
          </li>
          <li>
            <router-link to="/"
              ><i class="material-icons color">favorite</i></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(['cart']),
  },
};
</script>

<style scoped>
.color {
  color: rgb(70, 0, 120);
}
li {
  margin-right: 20px;
}
</style>
