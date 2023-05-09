import { defineStore } from "pinia";
import { ref } from "vue";

export const cartStore = defineStore("cartStore", () => {
  const productInCart = ref([]);
  const totalSum = ref(0);

  if (localStorage.getItem("productInCart")) {
    productInCart.value = JSON.parse(localStorage.getItem("productInCart"));
  }

  if (localStorage.getItem("totalSum")) {
    totalSum.value = JSON.parse(localStorage.getItem("totalSum"));
  }

  watch(
    totalSum,
    (value) => {
      localStorage.setItem("totalSum", JSON.stringify(value));
    },
    { deep: true }
  );

  watch(
    productInCart,
    (value) => {
      localStorage.setItem("productInCart", JSON.stringify(value));
    },
    { deep: true }
  );

  function setStateCart(product) {
    productInCart.value.push(product);
  }

  function removeItem(index) {
    productInCart.value.splice(index, 1);
  }

  function calTotalSum() {
    if (productInCart.value) {
      totalSum.value = 0;
      productInCart.value.forEach((element) => {
        totalSum.value += element.price * element.itemBuy;
        element.totalPrice = element.price * element.itemBuy;
      });
    }
  }

  function resetCart() {
    productInCart.value = [];
    totalSum.value = 0;
  }
  return {
    setStateCart,
    productInCart,
    totalSum,
    calTotalSum,
    removeItem,
    resetCart,
  };
});
