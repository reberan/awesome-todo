<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>{{
        $t("settings_page_settings_header")
      }}</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>{{ $t("settings_page_show_12_format") }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="blue" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>{{
            $t("settings_page_show_single_list")
          }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle color="blue" v-model="showTasksInOneList" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>{{ $t("settings_page_languages") }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-select
            v-model="lang"
            :options="languageOptions"
            dense
            borderless
            emit-value
            map-options
            options-dense
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-mt-sm">
      <q-item-label header>{{ $t("settings_page_more_header") }}</q-item-label>
      <q-item tag="label" v-ripple to="/help">
        <q-item-section>
          <q-item-label>{{ $t("settings_page_help") }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item tag="a" v-ripple @click="visitOurWebsite">
        <q-item-section>
          <q-item-label>{{
            $t("settings_page_visit_our_website")
          }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item tag="a" v-ripple @click="emailUs">
        <q-item-section>
          <q-item-label>{{ $t("settings_page_email_us") }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";
export default {
  data() {
    return {
      lang: this.$i18n.locale
    };
  },
  watch: {
    lang(lang) {
      // eslint-disable-next-line no-console
      console.log("TCL: language -> value", lang);
      this.$i18n.locale = lang;
      this.setLanguage(lang);
    }
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        this.setShow12HourTimeFormat(value);
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(value) {
        this.setShowTasksInOneList(value);
      }
    },
    language: {
      get() {
        return this.settings.language || this.$i18n.locale;
      },
      set(value) {
        // eslint-disable-next-line no-console
        console.log("TCL: set -> value", value);

        this.setLanguage(value);
      }
    },
    languageOptions() {
      return [
        { value: "en-us", label: this.$t("language_en") },
        { value: "de", label: this.$t("language_de") }
      ];
    }
  },
  methods: {
    ...mapActions("settings", [
      "setShow12HourTimeFormat",
      "setShowTasksInOneList",
      "setLanguage"
    ]),
    visitOurWebsite() {
      openURL("https://github.com/reberan/awesome-todo");
    },
    emailUs() {
      window.location.href = `mailto:reberan@mail.com?subject=${this.$t(
        "settings_email_subject"
      )}`;
    }
  }
};
</script>
