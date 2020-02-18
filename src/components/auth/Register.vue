<template>
  <form>
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ $t("tab_register_banner_text") }}
      </q-banner>
    </div>
    <div class="row q-mb-sm">
      <q-input
        class="col"
        outlined
        v-model="formData.email"
        :label="$t('email')"
        type="email"
      />
    </div>
    <div class="row q-mb-sm">
      <q-input
        class="col"
        outlined
        v-model="formData.password"
        :label="$t('password')"
        type="password"
      />
    </div>
    <div class="row q-mb-sm">
      <q-space />
      <q-btn filled :label="$t('register')" color="primary" type="submit" />
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
  }
};
</script>
<style scoped></style>
