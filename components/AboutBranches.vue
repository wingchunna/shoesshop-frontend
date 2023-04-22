<template>
  <section
    id="team"
    class="team section-b-space slick-default-margin ratio_asos"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h4>Hệ thống cửa hàng</h4>
          <div class="team-4">
            <Swiper
              :modules="[SwiperAutoplay, SwiperEffectCreative]"
              :slides-per-view="4"
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
              <SwiperSlide v-for="(item, index) in branchSlider" :key="index">
                <div class="branch-item">
                  <div>
                    <img
                      :src="item.url"
                      class="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <h4>{{ item.name }}</h4>
                  <h6>{{ item.address }}</h6>
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
const branchSlider = [
  {
    url: "https://danangaz.com/wp-content/uploads/2018/07/1-min-9.jpg",
    name: "Cơ sở Trần Duy Hưng",
    address: "Tầng 1 GrandPlaza, 117 Trần Duy Hưng, Cầu Giấy, TP. Hà Nội",
  },
  {
    url: "https://kientrucanviet.com/wp-content/uploads/2021/10/shop-giay-dep-nu.jpg",
    name: "Chi nhánh Vincom",
    address: "Tầng 3 Vincom Tower, 8 Bà Triệu, Hai Bà Trưng, Hà Nội",
  },
  {
    url: "https://anviethouse.vn/wp-content/uploads/2021/07/Mau-thiet-ke-shop-giay-dep-dep-11.jpg",
    name: "Chi nhánh Đà Nẵng",
    address:
      "Tầng 1 GrandPlaza, 117 Kinh Dương Vương, Q. Liên Chiểu, TP. Đà Nẵng",
  },
  {
    url: "https://gotrangtri.vn/wp-content/uploads/2020/06/b%C3%ACa-2.jpg",
    name: "Chi nhánh Hồ Chí Minh  ",
    address: "Tầng 1 Bitexco, 116 Nguyễn Thị Minh Khai, Q1, TP. HCM",
  },
];
</script>

<style>
.team-4 {
  margin: 20px;
}
.branch-item {
  margin: 10px;
}
.branch-item img {
  width: 100%;
  height: 200px;
}
</style>
