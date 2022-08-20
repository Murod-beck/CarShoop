<template>
  <form class="card auth-card grey lighten-4">
    <div class="card-title center">
      <i class="material-icons">person_add</i>
    </div>

    <div class="input-field">
      <input id="email" type="text" />
      <label for="email">Email</label>
      <small class="helper-text invalid">Email kiriting!</small>
    </div>

    <div class="input-field">
      <input id="password" type="password" />
      <label for="password">Parol</label>
      <small class="helper-text invalid"> Parolni to'g'ri kiriting</small>
    </div>

    <div class="input-field">
      <input id="name" type="text" />
      <label for="name">Ismingiz</label>
      <small class="helper-text invalid">Ismingizni kiriting!</small>
    </div>

    <p>
      <label>
        <input type="checkbox" />
        <span>tanlang!</span>
      </label>
    </p>

    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Ro'yxatdan o'tish
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Register',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
