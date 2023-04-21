<template>
  <small-banner></small-banner>
  <the-breadcum></the-breadcum>
  <section class="section-b-space blog-page ratio2_3">
    <div class="container">
      <div class="row">
        <blogs-block></blogs-block>
        <blogs-slidebar></blogs-slidebar>
        <div class="col-xl-9 col-lg-8 col-md-7">
          <the-pagination></the-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BlogsBlock from "~/components/BlogsBlock.vue";
import SmallBanner from "~/components/SmallBanner.vue";
import TheBreadcum from "~/components/TheBreadcum.vue";
</script>

<style></style>
, BlogsBlock
