<template>
  <div>
    <nav class="hide-on-med-and-down purple darken-4">
      <div class="nav-wrapper conter">
        <ul>
          <li v-for="menu of menus" :key="menu.url">
            <router-link :to="menu.url">
              {{ menu.title }}
            </router-link>
          </li>
          <div class="right">
            <a href="#"
              ><i class="material-icons icons left">phone_in_talk</i>+7 966 118
              80 89
            </a>
          </div>
        </ul>
      </div>
    </nav>
    <ul id="mobile-demo" class="sidenav blue lighten-5" ref="sideNav">
      <li>
        <router-link
          to="/"
          class="brand-logo color center"
          @click="Menu.close()"
          >Logo</router-link
        >
      </li>
      <div class="input-field searchs">
        <input id="search" type="search" required />
        <label class="label-icon" for="search"
          ><i class="material-icons">search</i></label
        >
        <i class="material-icons">close</i>
      </div>
      <router-link to="/user" @click="Menu.close()"
        ><i class="material-icons">person</i></router-link
      >
      <router-link to="/asessment" @click="Menu.close()"
        ><i class="material-icons">assessment</i></router-link
      >
      <a href="#"
        ><i class="material-icons">phone_in_talk</i>+7 966 118 80 89</a
      >
      <li v-for="menu of menus" :key="menu.url" @click="Menu.close()">
        <router-link class="color" :to="menu.url">
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      Menu: null,
      menus: [
        { id: 1, title: 'Sidena Chexollari', logo: '', url: '/cases' },
        { id: 1, title: "Ro'l Chexollari", logo: '', url: '/whell' },
        { id: 1, title: 'Avto Bezaklar', logo: '', url: '/autos' },
        { id: 1, title: 'Avto Iforlari', logo: '', url: '/flavors' },
        { id: 1, title: 'Aksessuarlar', logo: '', url: '/accessories' },
        { id: 1, title: 'Yangiliklar', logo: '', url: '/news' },
      ],
    };
  },
  mounted() {
    this.Menu = M.Sidenav.init(this.$refs.sideNav, {
      draggable: false,
    });
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.color {
  color: rgb(70, 0, 120);
}
</style>
