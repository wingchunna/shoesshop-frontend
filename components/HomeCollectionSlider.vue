<template>
  <section class="game-product pt-0 ratio_asos">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="product-slider-5 product-m no-arrow">
            <Swiper
              :modules="[SwiperAutoplay, SwiperEffectCreative]"
              :slides-per-view="5"
              :loop="true"
              :effect="''"
              :autoplay="{
                delay: 8000,
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
                <div class="product-box">
                  <div class="img-wrapper">
                    <div class="front">
                      <a href="product-page(no-sidebar).html"
                        ><img
                          src="/images/game/pro/16.jpg"
                          class="img-fluid bg-img blur-up lazyload"
                          alt=""
                      /></a>
                    </div>
                    <div class="cart-info cart-wrap">
                      <a href="javascript:void(0)" title="Add to Wishlist"
                        ><i class="ti-heart" aria-hidden="true"></i
                      ></a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view"
                        title="Quick View"
                        ><i class="ti-search" aria-hidden="true"></i
                      ></a>
                      <a href="compare.html" title="Compare"
                        ><i class="ti-reload" aria-hidden="true"></i
                      ></a>
                    </div>
                    <div
                      class="add-button"
                      data-bs-toggle="modal"
                      data-bs-target="#addtocart"
                    >
                      add to cart
                    </div>
                  </div>
                  <div class="product-detail">
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <a href="product-page(no-sidebar).html">
                      <h6>Civilzation VI</h6>
                    </a>
                    <h4>$12.00 <del>$15.00</del></h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const slider = [
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
  {
    url: "/images/game/pro/16.jpg",
  },
];
</script>

<style scope>
.product-box {
  margin: 10px;
  padding-bottom: 20px;
  margin-bottom: 50px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 12px 12px 0px;
}
.product-box:hover {
  margin: 10px;

  transform: scale(1.1);
}
</style>
