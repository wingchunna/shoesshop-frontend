<template>
  <small-banner></small-banner>
  <the-breadcum></the-breadcum>

  <product-detail :product="data.product"></product-detail>
  <product-tab-info :product="data.product"></product-tab-info>
  <related-product></related-product>
</template>

<script setup>
const route = useRoute();
const productId = route.params.id;
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;
// get product by Id

const { data } = await useFetch(apiBase + "/products/" + productId, {
  method: "GET",

  initialCache: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Access a private variable (only available on the server)
  },
  onResponse({ request, response, options }) {
    // Process the response data
    if (response.status === 403) {
      createToast("Không tìm thấy sản phẩm !", toastOption);
    }
    if (response.status === 500) {
      createToast("Đã có lỗi xảy ra!", toastOption);
    }
    // console.log(response._data.brands);
  },
});
</script>

<style></style>
