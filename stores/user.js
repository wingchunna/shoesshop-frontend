import { defineStore } from "pinia";

export const userStore = defineStore("userStore", () => {
  const userLogin = reactive({
    user: {},
    token: "",
  });

  function setStateLogin(user, token) {
    userLogin.user = user;
    userLogin.token = token;
  }

  return { setStateLogin, userLogin };
});
