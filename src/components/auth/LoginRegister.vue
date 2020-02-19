<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{
          tab === "register"
            ? $t("tab_register_banner_text")
            : $t("tab_login_banner_text")
        }}
      </q-banner>
    </div>
    <div class="row q-mb-sm">
      <q-input
        class="col"
        outlined
        v-model="formData.email"
        :label="$t('email')"
        type="email"
        lazy-rules
        :rules="[
          value =>
            isValidEmailAddress(value) || $t('validation_message_email_error')
        ]"
        ref="email"
      />
    </div>
    <div class="row q-mb-sm">
      <q-input
        class="col"
        outlined
        v-model="formData.password"
        :label="$t('password')"
        type="password"
        lazy-rules
        :rules="[
          value => value.length >= 6 || $t('validation_message_password_error')
        ]"
        ref="password"
      />
    </div>
    <div class="row q-mb-sm">
      <q-space />
      <q-btn filled :label="$t(this.tab)" color="primary" type="submit" />
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  props: ["tab"],
  methods: {
    isValidEmailAddress(email) {
      // eslint-disable-next-line no-useless-escape
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      const { email, password } = this.$refs;
      email.validate();
      password.validate();
      if (!email.hasError && !password.hasError) {
        if (this.tab === "login") {
          // eslint-disable-next-line no-console
          console.log("user login");
        } else {
          // eslint-disable-next-line no-console
          console.log("user register");
        }
      }
    }
  }
};
</script>
<style scoped></style>
