<template>
  <form class="card auth-card">
    <div class="card-title center">
      <i class="material-icons">person_add</i>
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

    <div class="input-field">
      <input
        id="name"
        type="text"
        v-model.trim="names"
        :class="{ invalid: v$.names.$error && v$.names.required }"
      />
      <label for="name">Ismingiz</label>
      <small
        class="helper-text invalid"
        v-if="v$.names.$error && v$.names.required"
        >Ismingizni kiriting!</small
      >
    </div>

    <p>
      <label>
        <input type="checkbox" v-model.trim="check" />
        <span>Tanlang!</span>
      </label>
    </p>

    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          @click.prevent="submitForm"
        >
          Ro'yxatdan o'tish
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import messages from '@/message/messages';
import useVuelidate from '@vuelidate/core';
import { email, required, minLength } from '@vuelidate/validators';
export default {
  name: 'Register',
  created() {},
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: '',
      names: '',
      check: false,
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { minLength: minLength(8), required },
      names: { required },
      check: { checked: (v) => v },
    };
  },
  props: {},
  methods: {
    async submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      const formUser = {
        email: this.email,
        password: this.password,
        name: this.names,
      };
      try {
        await this.$store.dispatch('register', formUser);
        this.$message("Ro'yxatdan muvfaqiyatli o'tdingiz");
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
