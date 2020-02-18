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
          <login />
        </q-tab-panel>
        <q-tab-panel name="register">
          <register />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "register"
    };
  },
  components: {
    register: () => import("../components/auth/Register.vue"),
    login: () => import("../components/auth/Login.vue")
  }
};
</script>
<style scoped>
.auth-tabs {
  max-width: 600px;
  margin: 0 auto;
}
</style>
