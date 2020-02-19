import { LocalStorage } from "quasar";

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const loggedIn = LocalStorage.getItem("loggedIn");
    !loggedIn && to.path !== "/auth" ? next("/auth") : next();
  });
};
