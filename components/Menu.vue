<template>
  <div class="loader_skeleton">
    <header class="color-dark">
      <div class="top-header d-none d-sm-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="header-contact">
                <ul>
                  <li>Chào mừng đến với Shoes Shop</li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>Liên hệ : 0989
                    999 999
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 text-end">
              <ul class="header-dropdown">
                <li class="mobile-wishlist">
                  <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
                </li>
                <li class="onhover-dropdown mobile-account">
                  <i class="fa fa-user" aria-hidden="true"></i> Tài khoản của
                  tôi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <a href="index.html"
                    ><img
                      src="/images/icon/logo.png"
                      class="img-fluid blur-up lazyload"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="menu-right pull-right">
                <div>
                  <nav>
                    <div class="toggle-nav">
                      <i class="fa fa-bars sidebar-bar"></i>
                    </div>
                    <ul class="sm pixelstrap sm-horizontal">
                      <li>
                        <div class="mobile-back text-end">
                          Trở về<i
                            class="fa fa-angle-right ps-2"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </li>
                      <li>
                        <a href="index.html">Trang chủ</a>
                      </li>
                      <li>
                        <a href="#">Giới thiệu</a>
                      </li>
                      <li>
                        <NuxtLink to="/products">Sản phẩm</NuxtLink>
                      </li>
                      <li>
                        <a href="#">Bộ sưu tập</a>
                      </li>

                      <li>
                        <a href="#">Thư viện</a>
                      </li>

                      <li><a href="#">Tin tức</a></li>
                      <li><a href="#">Liên hệ</a></li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <div class="icon-nav d-none d-sm-block">
                    <ul>
                      <li class="onhover-div mobile-search">
                        <div>
                          <img
                            src="/images/icon/search.png"
                            @click="handleSearch()"
                            class="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <i class="ti-search" @click="handleSearch()"></i>
                        </div>
                      </li>
                      <li class="onhover-div mobile-setting">
                        <div>
                          <img
                            src="/images/icon/setting.png"
                            class="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <i class="ti-settings"></i>
                        </div>
                      </li>
                      <li class="onhover-div mobile-cart">
                        <div>
                          <img
                            src="/images/icon/cart.png"
                            class="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <i class="ti-shopping-cart"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="pt-0 effect-cls">
      <div class="home-slider">
        <div class="home"></div>
      </div>
    </section>
    <section class="collection-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="ldr-bg">
              <div class="contain-banner">
                <div>
                  <h4></h4>
                  <h2></h2>
                  <h6></h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="ldr-bg">
              <div class="contain-banner">
                <div>
                  <h4></h4>
                  <h2></h2>
                  <h6></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container section-b-space">
      <div class="row section-t-space">
        <div class="col-lg-6 offset-lg-3">
          <div class="product-para">
            <p class="first"></p>
            <p class="second"></p>
          </div>
        </div>
        <div class="col-12">
          <div class="no-slider center-detail five-product row">
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
            <div class="product-box">
              <div class="img-wrapper"></div>
              <div class="product-detail">
                <h4></h4>
                <h5></h5>
                <h6></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
