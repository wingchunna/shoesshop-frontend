<template>
  <small-banner></small-banner>
  <div class="container">
    <the-breadcum></the-breadcum>
    <div class="row">
      <div
        class="image-gallery col-xl-3 col-md-3 col-3"
        v-for="(img, index) in images"
        :key="index"
      >
        <a :href="img" class="fancybox" rel="gallery" title="Sample title 1"
          ><img :src="img"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  "https://thao.giaythainguyen.com/wp-content/uploads/2020/04/giay-micky-2.jpg",

  "https://salt.tikicdn.com/cache/w1200/ts/product/4f/e4/f5/68c4845f9250b913b57133347228fa56.jpg",

  "https://quatangyeuthuong.com.vn/uploads/source/giay/247383677-113417091129323-4728723811360494237-n.png",
  "https://down-vn.img.susercontent.com/file/d0ab3f520d879b170de68ffe686080c0_tn",
  "https://vn-test-11.slatic.net/p/869c1de27a925ec9c2f57e8a3f5022cf.jpg",
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
      overlay: {
        css: {
          display: "block",
        },
      },
    },
    afterLoad: function () {
      $.extend(this, {
        aspectRatio: true,
        fitToView: false,
        // width: "60%",
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
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.image-gallery {
  padding: 20px;
}
</style>
