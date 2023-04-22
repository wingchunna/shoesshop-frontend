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
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="zara"
                      />
                      <label class="form-check-label" for="zara">zara</label>
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="vera-moda"
                      />
                      <label class="form-check-label" for="vera-moda"
                        >vera-moda</label
                      >
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="forever-21"
                      />
                      <label class="form-check-label" for="forever-21"
                        >forever-21</label
                      >
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="roadster"
                      />
                      <label class="form-check-label" for="roadster"
                        >roadster</label
                      >
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="only"
                      />
                      <label class="form-check-label" for="only">only</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- color filter start here -->
              <div class="collection-collapse-block open">
                <h3 class="collapse-block-title">Màu sắc</h3>
                <div class="collection-collapse-block-content">
                  <div class="color-selector">
                    <ul>
                      <li class="color-1 active"></li>
                      <li class="color-2"></li>
                      <li class="color-3"></li>
                      <li class="color-4"></li>
                      <li class="color-5"></li>
                      <li class="color-6"></li>
                      <li class="color-7"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- size filter start here -->
              <div class="collection-collapse-block border-0 open">
                <h3 class="collapse-block-title">kích thước</h3>
                <div class="collection-collapse-block-content">
                  <div class="collection-brand-filter">
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="hundred"
                      />
                      <label class="form-check-label" for="hundred">s</label>
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="twohundred"
                      />
                      <label class="form-check-label" for="twohundred">m</label>
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="threehundred"
                      />
                      <label class="form-check-label" for="threehundred"
                        >l</label
                      >
                    </div>
                    <div class="form-check collection-filter-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="fourhundred"
                      />
                      <label class="form-check-label" for="fourhundred"
                        >xl</label
                      >
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
</script>

<style>
@import "@vueform/slider/themes/default.css";
.slider-red {
  --slider-connect-bg: #ef4444;
  --slider-tooltip-bg: #ef4444;
  --slider-handle-ring-color: #ef444430;
}
</style>
