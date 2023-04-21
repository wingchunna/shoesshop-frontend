<template>
  <div class="col-xl-3 col-lg-4 col-md-5">
    <div class="blog-sidebar">
      <recent-blogs></recent-blogs>
      <popular-blogs></popular-blogs>
    </div>
  </div>
</template>

<script>
import PopularBlogs from "./PopularBlogs.vue";
import RecentBlogs from "./RecentBlogs.vue";
export default {
  components: { RecentBlogs, PopularBlogs },
};
</script>

<style></style>
