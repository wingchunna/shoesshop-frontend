<template>
  <section
    class="testimonial small-section team section-b-space slick-default-margin ratio_asos"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h4>Khách hàng nói về chúng tôi</h4>
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="2"
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
            <SwiperSlide v-for="(item, index) in testimonial" :key="index">
              <div>
                <div class="testimonial-item">
                  <div class="text-center">
                    <img :src="item.img" alt="#" />
                    <h4>{{ item.name }}</h4>
                    <h6>{{ item.job }}</h6>
                  </div>
                  <div>
                    <p class="testimonia-body">
                      {{ item.content }}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonial = [
  {
    img: "https://i.vietgiaitri.com/2014/5/29/hot-girl-kieu-trinh-da-trang-dang-chuan-mat-xinh-7fd7d4.jpg",
    name: "Nguyễn Trần Vân Anh",
    job: "Nhân viên văn phòng",
    content:
      "Sản phẩm và chất lượng thật tuyệt vời, tôi đã có những trải nghiệm thật tốt, tôi sẽ tiếp tục ủng hộ lâu dài",
  },
  {
    img: "https://media.viez.vn/prod/2022/11/19/312964599_2969136246725830_8595325813683023374_n_f6b3e1a820.jpg",
    name: "Myra Trần Minh Như",
    job: "Ca sỹ chuyên nghiệp",
    content:
      "Là một ca sỹ chuyên nghiệp, Myra thường xuyên xuất hiện tại các show diễn quan trọng. Những đôi giày Myra lựa cần phải tôn lên vóc dáng để Myra nổi bật trước đám đông. Và Shoes Shop là lựa chọn hoàn hảo !",
  },
  {
    img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/3/6/886280/Dinh-Tu1.jpg",
    name: "Đình Tú",
    job: "Diễn viên chuyên nghiệp",
    content:
      "Những đôi giày Tú chọn cần phải thể hiện được cá tính của mình. Tú luôn hài lòng với Shoes Shop vì sản phẩm thật sự đẳng cấp và khác biệt  !",
  },
  {
    img: "https://vnn-imgs-f.vgcloud.vn/2018/07/13/15/bi-to-an-tien-ban-quyen-only-c-quyet-kien-den-cung-8.jpg",
    name: "Only C",
    job: "Rapper chuyên nghiệp",
    content:
      "Mình là người có phong cách riêng và luôn theo đuổi sự hoàn hảo. Shoes Shop chưa từng làm mình thất vọng  !",
  },
];
</script>

<style>
.testimonial-item img {
  border-radius: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  height: 130px;
  width: 130px;
}
.testimonial-item {
  padding: 30px;
}
</style>
