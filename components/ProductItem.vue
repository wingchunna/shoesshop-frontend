<template>
  <div class="product-box">
    <div class="img-wrapper">
      <div class="front">
        <a href="#"
          ><img
            :src="props.product.images[0]"
            class="img-fluid blur-up lazyload bg-img"
            alt=""
        /></a>
      </div>
      <div class="back">
        <a href="#"
          ><img
            :src="props.product.images[0]"
            class="img-fluid blur-up lazyload bg-img"
            alt=""
        /></a>
      </div>
      <div class="cart-info cart-wrap">
        <button
          data-bs-toggle="modal"
          data-bs-target="#addtocart"
          title="Thêm vào giỏ"
        >
          <i class="ti-shopping-cart"></i>
        </button>
        <a href="javascript:void(0)" title="Yêu thích"
          ><i class="ti-heart" aria-hidden="true"></i
        ></a>
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#quick-view"
          title="Xem nhanh"
          ><i class="ti-search" aria-hidden="true"></i
        ></a>
        <NuxtLink to="/compare" title="So sánh"
          ><i class="ti-reload" aria-hidden="true"></i
        ></NuxtLink>
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
      <NuxtLink :to="`/products/${props.product._id}`">
        <h4>{{ props.product.name }}</h4>
      </NuxtLink>
      <p>
        {{ props.product.description }}
      </p>
      <h4>
        {{
          props.product.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })
        }}
      </h4>
      <ul
        class="color-variant"
        v-for="color in props.product.colors"
        :key="color"
      >
        <li :class="color"></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
</script>

<style>
.color-variant {
  display: inline-block;
  margin-left: 10px;
}
.product-box img {
  width: 100%;
}
.product-box {
  margin: 10px;
  max-width: 350px;
}
.product-detail {
  padding: 20px;
}
.product-detail h6 {
  margin: 10px;
}
.product-detail p {
  margin: 10px;
}
.product-detail h4 {
  margin: 10px;
}
.rating {
  margin: 10px;
}
</style>
