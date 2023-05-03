<template>
  <div class="title1 section-t-space">
    <h4>Offer đặc biệt</h4>
    <h2 class="title-inner1">Bộ sưu tập</h2>
  </div>
  <section class="game-product ratio_asos pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="product-para">
            <p class="text-center">
              Shoes Store hân hạnh giới thiệu đến quý khách hàng bộ sưu tập đặc
              biệt, đang là hot trend toàn cầu năm <b>2023</b>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="theme-tab">
            <ul class="tabs tab-title">
              <li
                :class="{
                  current: toRaw(selectedComponent) === HomeNewProductTab,
                }"
              >
                <a
                  @click="handlerSelectedComponent(HomeNewProductTab)"
                  class="tab-title"
                  >Sản phẩm mới</a
                >
              </li>
              <li
                :class="{
                  current: toRaw(selectedComponent) === HomeFeatureProductTab,
                }"
              >
                <a
                  @click="handlerSelectedComponent(HomeFeatureProductTab)"
                  class="tab-title"
                  >Sản phẩm Hot</a
                >
              </li>
              <li
                :class="{
                  current: toRaw(selectedComponent) === HomeBestSellerTab,
                }"
              >
                <a
                  @click="handlerSelectedComponent(HomeBestSellerTab)"
                  class="tab-title"
                  >Sản phẩm bán chạy</a
                >
              </li>
            </ul>
            <div class="tab-content-cls">
              <div>
                <keep-alive>
                  <component :is="selectedComponent"></component>
                </keep-alive>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HomeBestSellerTab from "./HomeBestSellerTab.vue";
import HomeFeatureProductTab from "./HomeFeatureProductTab.vue";
import HomeNewProductTab from "./HomeNewProductTab.vue";

let selectedComponent = ref(HomeNewProductTab);

function handlerSelectedComponent(comp) {
  selectedComponent.value = comp;
}

const isActive = computed((comp) => selectedComponent.value === comp);
</script>

<style scope>
li {
  cursor: pointer;
}
.active {
  color: #bc4b1f !important;
}
.tab-title {
  font-weight: bold;
}
</style>
