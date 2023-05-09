import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("userStore", () => {
  const userLogin = ref({});
  const userToken = ref("");
  const shippingAddress = ref({
    firstName: "Nguyễn Minh",
    lastName: "Tâm",
    city: "Hà Nội",
    address: "Tòa nhà Lotte Số 7 Đào Tấn",
    postalCode: "100000",
    province: "Cầu Giấy",
    phone: "0983455222",
    country: "Việt Nam",
  });

  if (localStorage.getItem("userLogin")) {
    userLogin.value = JSON.parse(localStorage.getItem("userLogin"));
  }
  if (localStorage.getItem("userToken")) {
    userToken.value = JSON.parse(localStorage.getItem("userToken"));
  }
  if (localStorage.getItem("shipingAddress")) {
    userToken.value = JSON.parse(localStorage.getItem("shipingAddress"));
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

  watch(
    shippingAddress,
    (value) => {
      localStorage.setItem("shipingAddress", JSON.stringify(value));
    },
    { deep: true }
  );

  function setStateLogin(user, token) {
    userLogin.value = user;
    userToken.value = token;
  }

  function setShipingAddress(address) {
    shippingAddress.value = address;
  }

  return {
    setStateLogin,
    userLogin,
    userToken,
    shippingAddress,
    setShipingAddress,
  };
});
