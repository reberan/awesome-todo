<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("settings", ["settings"])
  },
  methods: {
    ...mapActions("settings", ["getSettings"]),
    ...mapActions("auth", ["handleAuthStateChange"])
  },
  mounted() {
    this.getSettings();
    this.$i18n.locale = this.settings.language || "en-us";
    this.handleAuthStateChange();
  }
};
</script>

<style>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
