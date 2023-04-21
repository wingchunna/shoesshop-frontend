<template>
  <div>
    <ClientOnly>
      <Menu />
      <HeaderVue />

      <body class="theme-color-1">
        <slot />
      </body>
      <the-footer></the-footer>
      <modal-popup></modal-popup>
      <cart-modal-popup></cart-modal-popup>
      <button-to-top></button-to-top>
    </ClientOnly>
  </div>
</template>

<script setup>
import HeaderVue from "~/components/Header.vue";
import MenuVue from "~/components/Menu.vue";

// $(window).on("load", function () {
//   setTimeout(function () {
//     $("#exampleModal").modal("show");
//   }, 2500);
// });
</script>

<style></style>
