<template>
  <q-page>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-grey"
        align="justify"
        indicator-color="primary"
        active-color="primary"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register"></q-tab>
      </q-tabs>
      <q-separator></q-separator>
      <q-tab-panels v-model="activeTab">
        <q-tab-panel name="login">
          <login-register :tab="activeTab" />
        </q-tab-panel>
        <q-tab-panel name="register">
          <login-register :tab="activeTab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "login"
    };
  },
  components: {
    "login-register": () => import("../components/auth/LoginRegister.vue")
  }
};
</script>
<style scoped>
.auth-tabs {
  max-width: 600px;
  margin: 0 auto;
}
</style>
