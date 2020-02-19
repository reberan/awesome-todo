<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">{{
          $t("appTitle")
        }}</q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          icon-right="account_circle"
          :label="$t(loggedIn ? 'logout' : 'login')"
          class="absolute-right"
          to="/auth"
          flat
        />
        <q-btn
          v-else
          icon-right="account_circle"
          :label="$t('logout')"
          class="absolute-right"
          @click="logoutUser"
          flat
        />
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-grey-1">{{
          $t("navigation")
        }}</q-item-label>
        <q-item
          clickable
          exact
          tag="a"
          class="text-grey-5"
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    navs() {
      return [
        { label: this.$t("navigation_todo"), icon: "list", to: "/" },
        {
          label: this.$t("navigation_settings"),
          icon: "settings",
          to: "/settings"
        },
        { label: this.$t("navigation_help"), icon: "help", to: "/help" }
      ];
    }
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  }
};
</script>
<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
