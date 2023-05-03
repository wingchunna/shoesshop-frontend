<template>
  <section class="section-b-space ratio_asos">
    <div class="collection-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 collection-filter">
            <!-- side-bar colleps block stat -->
            <div class="collection-filter-block">
              <!-- brand filter start -->
              <div class="collection-mobile-back">
                <span class="filter-back"
                  ><i class="fa fa-angle-left" aria-hidden="true"></i>
                  back</span
                >
              </div>
              <div class="collection-collapse-block open">
                <h3 class="collapse-block-title">Thương hiệu</h3>
                <div class="collection-collapse-block-content">
                  <div class="collection-brand-filter">
                    <div
                      class="form-check collection-filter-checkbox"
                      v-for="(brand, index) in brandList"
                      :key="index"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="zara"
                      />
                      <label class="form-check-label" for="zara">{{
                        brand.name
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- color filter start here -->
              <div class="collection-collapse-block open">
                <h3 class="collapse-block-title">Màu sắc</h3>
                <div class="collection-collapse-block-content">
                  <div class="collection-brand-filter">
                    <div
                      class="form-check collection-filter-checkbox"
                      v-for="(color, index) in colorList"
                      :key="index"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="zara"
                      />
                      <label class="form-check-label" for="zara">{{
                        color.name
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- size filter start here -->
              <div class="collection-collapse-block border-0 open">
                <h3 class="collapse-block-title">kích thước</h3>
                <div class="collection-collapse-block-content">
                  <div class="collection-brand-filter">
                    <div
                      class="form-check collection-filter-checkbox"
                      v-for="(size, index) in sizes"
                      :key="index"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="hundred"
                      />
                      <label class="form-check-label" for="hundred">{{
                        size
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- price filter start here -->
              <div class="collection-collapse-block border-0 open">
                <h3 class="collapse-block-title">giá</h3>
                <div class="collection-collapse-block-content">
                  <div class="wrapper mt-3">
                    <Slider
                      class="slider-red"
                      v-model="value"
                      :format="format"
                      :merge="merge"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- silde-bar colleps block end here -->
            <!-- side-bar single product slider start -->

            <!-- side-bar single product slider end -->
            <!-- side-bar banner start here -->
            <div class="collection-sidebar-banner">
              <a href="#"
                ><img
                  src="../assets/images/side-banner.png"
                  class="img-fluid blur-up lazyload"
                  alt=""
              /></a>
            </div>
            <!-- side-bar banner end here -->
          </div>
          <product-slidebar></product-slidebar>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Slider from "@vueform/slider";
import ProductSlidebar from "./ProductSlidebar.vue";
import ThePagination from "./ThePagination.vue";

import { defineComponent } from "vue";
import { createToast } from "mosha-vue-toastify";

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

const toastOption = {
  showCloseButton: true,
  toastBackgroundColor: "#ff4c3b",
};
const sizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "45"];

let value = [8, 80];
let format = function (value) {
  let money = Math.round(value) * 100000;
  money = money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return `${money}`;
};

// let format = {
//   prefix: "VND ",
//   decimals: 0,
// };
let merge = 20;

// get brand
const { data } = await useFetch(apiBase + "/brands", {
  method: "GET",

  initialCache: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Access a private variable (only available on the server)
  },
  onResponse({ request, response, options }) {
    // Process the response data
    if (response.status === 403) {
      createToast("Không tìm thấy nhãn hàng !", toastOption);
    }
    if (response.status === 500) {
      createToast("Đã có lỗi xảy ra!", toastOption);
    }
    // console.log(response._data.brands);
  },
});
const brandList = data.value.brands;

// get Color

const { data: colors } = await useFetch(apiBase + "/colors", {
  method: "GET",

  initialCache: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Access a private variable (only available on the server)
  },
  onResponse({ request, response, options }) {
    // Process the response data
    if (response.status === 403) {
      createToast("Không tìm thấy màu sắc !", toastOption);
    }
    if (response.status === 500) {
      createToast("Đã có lỗi xảy ra!", toastOption);
    }
    // console.log(response);
  },
});
const colorList = colors.value.colors;

// const colorList = color.value.colors;

onMounted(() => {});
</script>

<style>
@import "@vueform/slider/themes/default.css";
.slider-red {
  --slider-connect-bg: #ef4444;
  --slider-tooltip-bg: #ef4444;
  --slider-handle-ring-color: #ef444430;
}
</style>
