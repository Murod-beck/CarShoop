<template>
  <form class="card auth-card">
    <div class="card-title center">
      <i class="material-icons">login</i>
    </div>

    <div class="input-field">
      <input
        id="email"
        type="text"
        v-model.trim="email"
        :class="{ invalid: v$.email.$error && v$.email.required }"
      />
      <label for="email">Email</label>
      <small
        class="helper-text invalid"
        v-if="v$.email.$error && v$.email.required"
        >Emailni to'g'ri kiriting!</small
      >
    </div>

    <div class="input-field">
      <input
        id="password"
        type="password"
        v-model.trim="password"
        :class="{ invalid: v$.password.$error && v$.password.minLength }"
      />
      <label for="password">Parol</label>
      <small
        class="helper-text invalid"
        v-if="v$.password.$error && v$.password.minLength"
        >Parol 8 ta belgidan kam bolmasligi kerak!</small
      >
    </div>

    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          @click.prevent="submitLogin"
        >
          Kirish
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import messages from '@/message/messages';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
export default {
  name: 'Login',
  created() {},
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: '',
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { minLength: minLength(8), required },
    };
  },
  props: {},
  methods: {
    async submitLogin() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      const loginUser = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch('login', loginUser);
        this.$message('Kirish muvfaqiyatli yakunlandi');
        this.$router.push('/');
      } catch (e) {}
    },
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Xato');
    },
  },
};
</script>

<style lang="scss" scoped></style>
