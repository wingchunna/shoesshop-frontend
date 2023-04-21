<template>
  <div class="tap-top" @click="handleScrollToTop()">
    <div>
      <i class="fa fa-angle-double-up"></i>
    </div>
  </div>
</template>

<script setup>
function handleScrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<style></style>
