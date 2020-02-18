import { LocalStorage } from "quasar";
export default {
  setShow12HourTimeFormat: ({ commit, dispatch }, payload) => {
    commit("setShow12HourTimeFormat", payload);
    dispatch("saveSettings");
  },
  setShowTasksInOneList: ({ commit, dispatch }, payload) => {
    commit("setShowTasksInOneList", payload);
    dispatch("saveSettings");
  },
  setLanguage({ commit, dispatch }, payload) {
    commit("setLanguage", payload);
    dispatch("saveSettings");
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem("settings");
    if (settings) {
      commit("setSettings", settings);
    }
  }
};
