<template>
  <div class="container">
    <div class="image-gallery" v-for="(img, index) in images" :key="index">
      <a :href="img" class="fancybox" rel="gallery" title="Sample title 1"
        ><img :src="img"
      /></a>
    </div>
  </div>
</template>

<script setup>
const images = [
  "https://static.nike.com/a/images/t_default/471bffe8-9757-4b0e-8416-8ed1a9e5c7d0/pegasus-39-road-running-shoes-kmZSD6.png",

  "https://images.vans.com/is/image/VansEU/VN000EE3RED-HERO?$PDP-FULL-IMAGE$",

  "https://cld.accentuate.io/5353320710301/1663094662150/Madrid_Heathered-Grey_Feature-Float-1380.png?v=1669223444554&options=w1000",
];
$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "elastic",
    closeEffect: "elastic",
    padding: 0, // default 15
    margin: 0, // default 20
    width: 560, // default 800
    height: 340, // default 600
    autoSize: false,
    autoScale: false,
    autoDimensions: false,
    closeExisting: true,
    arrows: true,
    infobar: true,
    opacity: true, // default false
    helpers: {
      title: null,
    },
    afterLoad: function () {
      $.extend(this, {
        aspectRatio: false,
        fitToView: false,
        width: "80%",
        height: "80%",
        maxWidth: "90%",
      });
    },
  });
});
</script>

<style>
.fancybox img {
  width: 300px;
  height: 250px;
}
</style>
