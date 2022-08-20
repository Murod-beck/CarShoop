<template>
  <form class="card auth-card grey lighten-4">
    <div class="card-title center">
      <i class="material-icons">login</i>
    </div>

    <div class="input-field">
      <input id="email" type="text" />
      <label for="email">Email</label>
      <small class="helper-text invalid">Emailni to'g'ri kiriting!</small>
    </div>

    <div class="input-field">
      <input id="password" type="password" />
      <label for="password">Parol</label>
      <small class="helper-text invalid">Parolni to'g'ri kiriting!</small>
    </div>

    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Kirish
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login',
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
