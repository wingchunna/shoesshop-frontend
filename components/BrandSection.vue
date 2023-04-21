<template>
  <section class="">
    <div class="container">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="5"
        :loop="true"
        :effect="''"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="(slide, index) in slider" :key="index">
          <a href="#">
            <img :src="slide.url" alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
const slider = [
  {
    url: "/images/logos/1.png",
  },
  {
    url: "/images/logos/2.png",
  },
  {
    url: "/images/logos/3.png",
  },
  {
    url: "/images/logos/4.png",
  },
  {
    url: "/images/logos/5.png",
  },
  {
    url: "/images/logos/6.png",
  },
  {
    url: "/images/logos/7.png",
  },
  {
    url: "/images/logos/8.png",
  },
];
</script>

<style></style>
