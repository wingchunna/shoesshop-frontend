<template>
  <!-- <Swiper
    class="swiper - cards"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
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
        shadow: false,
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="(slide, index) in slider" :key="index">
      <div class="p-0 effect-cls">
        <div class="slide-1 home-slider">
          <div>
            <div class="home text-center p-center">
              <img :src="slide.url" alt="" class="bg-img blur-up lazyload" />
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper> -->

  <section class="p-0 effect-cls">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(slide, index) in slider"
          :key="index"
          :class="{ active: index === 1 }"
        >
          <img :src="slide.url" alt="" id="slider_image" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script setup>
const slider = [
  {
    url: "/images/upload/banner1.jpg",
  },
  {
    url: "/images/upload/banner2.jpg",
  },
  {
    url: "/images/upload/banner3.jpg",
  },
  {
    url: "/images/upload/banner4.jpg",
  },
  {
    url: "/images/upload/banner6.jpg",
  },
  {
    url: "/images/upload/banner7.jpg",
  },
];
</script>

<style></style>
