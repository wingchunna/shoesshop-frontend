<template>
  <section class="section-b-space ratio_asos">
    <div class="container">
      <div class="row">
        <div class="col-12 product-related">
          <h5>Photo Album</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-4 col-12">
          <div class="image-box">
            <NuxtLink to="/library/abc"
              ><img src="/images/upload/album.jpg" alt=""
            /></NuxtLink>
            <div class="album-title">
              <h5>
                Bộ sưu tập sneaker xịn xò cho những runner chuyên nghiệp và
                những người ưa xê dịch
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 col-12">
          <div class="image-box">
            <NuxtLink to="/library/abc"
              ><img src="/images/upload/album.jpg" alt=""
            /></NuxtLink>
            <div class="album-title">
              <h5>
                Bộ sưu tập sneaker xịn xò cho những runner chuyên nghiệp và
                những người ưa xê dịch
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 col-12">
          <div class="image-box">
            <NuxtLink to="/library/abc"
              ><img src="/images/upload/album.jpg" alt=""
            /></NuxtLink>
            <div class="album-title">
              <h5>
                Bộ sưu tập sneaker xịn xò cho những runner chuyên nghiệp và
                những người ưa xê dịch
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 col-12">
          <div class="image-box">
            <NuxtLink to="/library/abc"
              ><img src="/images/upload/album.jpg" alt=""
            /></NuxtLink>
            <div class="album-title">
              <h5>
                Bộ sưu tập sneaker xịn xò cho những runner chuyên nghiệp và
                những người ưa xê dịch
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 col-12">
          <div class="image-box">
            <NuxtLink to="/library/abc"
              ><img src="/images/upload/album.jpg" alt=""
            /></NuxtLink>
            <div class="album-title">
              <h5>
                Bộ sưu tập sneaker xịn xò cho những runner chuyên nghiệp và
                những người ưa xê dịch
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 col-12">
          <div class="image-box">
            <NuxtLink to="/library/abc"
              ><img src="/images/upload/album.jpg" alt=""
            /></NuxtLink>
            <div class="album-title">
              <h5>
                Bộ sưu tập sneaker xịn xò cho những runner chuyên nghiệp và
                những người ưa xê dịch
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scope>
.image-box {
  max-width: 420px;
  height: 350px;
  margin: 20px 0px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
}
.image-box:hover {
  transition: all 0.5s ease-in-out;
  transform: scale(1.1);
}
.image-box img {
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
}
.album-title {
  width: 100%;
  text-align: left;
  padding: 20px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 120%; /* fallback */

  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
