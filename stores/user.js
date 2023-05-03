import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("userStore", () => {
  const userLogin = ref({});
  const userToken = ref("");

  if (localStorage.getItem("userLogin")) {
    userLogin.value = JSON.parse(localStorage.getItem("userLogin"));
  }
  if (localStorage.getItem("userToken")) {
    userToken.value = JSON.parse(localStorage.getItem("userToken"));
  }

  watch(
    userLogin,
    (value) => {
      localStorage.setItem("userLogin", JSON.stringify(value));
    },
    { deep: true }
  );
  watch(
    userToken,
    (value) => {
      localStorage.setItem("userToken", JSON.stringify(value));
    },
    { deep: true }
  );

  function setStateLogin(user, token) {
    userLogin.value = user;
    userToken.value = token;
  }

  return { setStateLogin, userLogin, userToken };
});
