export default {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value;
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value;
  },
  setLanguage(state, value) {
    // eslint-disable-next-line no-console
    console.log("TCL: setLanguage -> setLanguage", state, value);
    state.settings.language = value;
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  }
};
