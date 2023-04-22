<template>
  <small-banner></small-banner>
  <the-breadcum></the-breadcum>
  <section class="collection section-b-space ratio_square">
    <div class="container">
      <div class="row partition-collection">
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="/categories/men" class="btn myButton"
                >xem ngay !</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="/categories/women" class="btn myButton"
                >xem ngay !</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="" class="btn myButton">xem ngay !</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="" class="btn myButton">xem ngay !</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="" class="btn myButton">xem ngay !</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="" class="btn myButton">xem ngay !</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 collection-item">
          <div class="collection-block">
            <div>
              <img
                src="/public/images/collection/7.jpg"
                class="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <div class="collection-content">
              <h4>(20 products)</h4>
              <h3>fashion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry....
              </p>
              <NuxtLink to="" class="btn myButton">xem ngay !</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SmallBanner from "~/components/SmallBanner.vue";
import TheBreadcum from "~/components/TheBreadcum.vue";
</script>

<style>
.collection-item {
  margin: 20px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-bottom: 20px;
}
.myButton {
  background-color: coral;
}
</style>
