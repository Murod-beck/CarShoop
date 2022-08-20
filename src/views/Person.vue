<template>
  <div class="conter color">
    <div class="row">
      <div class="col s12 m4 l3">
        <div class="collection-header center"><h4>User</h4></div>
        <div class="collection">
          <a href="#!" class="collection-item" @click="login = true">Kirish</a>
          <a href="#!" class="collection-item" @click="login = false"
            >Ro'yxatdan o'tish</a
          >
          <a href="#!" class="collection-item">Parolni unitdingizmi</a>
          <a href="#!" class="collection-item">Buyurtmalar tarixi</a>
        </div>
      </div>
      <div class="col s12 m8 l5">
        <Login v-if="login" />
        <Register v-else />
      </div>
      <div class="col s12 l4">
        <div class="card grey lighten-4">
          <div class="card-content">
            <span class="card-title">Yangi Mijozlar Uchun!</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div class="card-action">
            <a href="#">Davom etish</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/person/Login.vue';
import Register from '../components/person/Register.vue';
export default {
  name: 'Person',
  created() {},
  data() {
    return {
      login: false,
    };
  },
  props: {},
  methods: {},
  components: { Login, Register },
};
</script>

<style lang="scss" scoped></style>
