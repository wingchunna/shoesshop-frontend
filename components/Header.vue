<template>
  <header class="color-dark">
    <div class="mobile-fix-option"></div>
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="header-contact">
              <ul>
                <li>Chào mừng đến với Shoes Shop Online</li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>Call Us: 0983
                  999 999
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 text-end">
            <ul class="header-dropdown">
              <li class="mobile-wishlist" v-if="store.userLogin.isAdmin">
                <NuxtLink to="/admin">
                  <div class="admin-dashboard">Admin Dashboard</div>
                </NuxtLink>
              </li>
              <li class="onhover-dropdown mobile-account">
                <i
                  v-if="store.userLogin.fullname"
                  class="fa fa-user"
                  aria-hidden="true"
                >
                  <span class="iconClass"
                    >Xin chào {{ store.userLogin.fullname }}</span
                  ></i
                >

                <i v-else class="fa fa-user" aria-hidden="true">
                  <span class="iconClass">Tài khoản</span>
                </i>

                <ul class="onhover-show-div">
                  <li v-if="store.userLogin.fullname">
                    <NuxtLink to="/login" @click="handleLogout()"
                      >Đăng xuất</NuxtLink
                    >
                  </li>
                  <div v-else>
                    <li>
                      <NuxtLink to="/login">Đăng nhập</NuxtLink>
                    </li>

                    <li>
                      <NuxtLink to="/register">Đăng ký</NuxtLink>
                    </li>
                  </div>
                </ul>
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
                    id="logo"
                /></a>
              </div>
            </div>
            <div class="menu-right pull-right">
              <div>
                <nav id="main-nav">
                  <div class="toggle-nav">
                    <i class="fa fa-bars sidebar-bar"></i>
                  </div>
                  <ul id="main-menu" class="sm pixelstrap sm-horizontal">
                    <li>
                      <div class="mobile-back text-end">
                        Trở lại<i
                          class="fa fa-angle-right ps-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>
                    <li><NuxtLink to="/">Trang chủ</NuxtLink></li>
                    <li class="mega" id="hover-cls">
                      <NuxtLink to="/about">Giới thiệu </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/products">Sản phẩm</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/categories">Bộ sưu tập</NuxtLink>
                    </li>

                    <li>
                      <NuxtLink to="/library">Thư viện</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/blogs">Tin tức</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/contact">Liên hệ</NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <div class="icon-nav">
                  <ul>
                    <li class="onhover-div mobile-search">
                      <div>
                        <img
                          src="/images/icon/search.png"
                          @click="handleSearch()"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                        <!-- <i class="ti-search" @click="handleSearch()"></i> -->
                      </div>
                      <div id="search-overlay" class="search-overlay">
                        <div>
                          <span
                            class="closebtn"
                            @click="handleCloseSearch()"
                            title="Close Overlay"
                            >×</span
                          >
                          <div class="overlay-content">
                            <div class="container">
                              <div class="row">
                                <div class="col-xl-12">
                                  <form @submit.prevent="searchItem()">
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Search a Product"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="onhover-div mobile-setting">
                      <div>
                        <img
                          @click="handleSearch()"
                          src="/images/icon/setting.png"
                          class="img-fluid blur-up lazyload"
                          alt=""
                        />
                        <i class="ti-settings"></i>
                      </div>
                      <div class="show-div setting">
                        <h6>Ngôn ngữ</h6>
                        <ul>
                          <li><a href="#">Vietnam</a></li>
                          <li><a href="#">English</a></li>
                        </ul>
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
                      <ul class="show-div shopping-cart">
                        <li>
                          <div class="media">
                            <a href="#"
                              ><img
                                class="me-3"
                                src="/images/fashion/product/1.jpg"
                                alt="Generic placeholder image"
                            /></a>
                            <div class="media-body">
                              <a href="#">
                                <h4>item name</h4>
                              </a>
                              <h4><span>1 x $ 299.00</span></h4>
                            </div>
                          </div>
                          <div class="close-circle">
                            <a href="#"
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></a>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <a href="#"
                              ><img
                                class="me-3"
                                src="/images/fashion/product/2.jpg"
                                alt="Generic placeholder image"
                            /></a>
                            <div class="media-body">
                              <a href="#">
                                <h4>item name</h4>
                              </a>
                              <h4><span>1 x $ 299.00</span></h4>
                            </div>
                          </div>
                          <div class="close-circle">
                            <a href="#"
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></a>
                          </div>
                        </li>
                        <li>
                          <div class="total">
                            <h5>Tạm tính : <span>$299.00</span></h5>
                          </div>
                        </li>
                        <li>
                          <div class="buttons">
                            <button
                              href="cart.html"
                              class="view-cart btn btn-giohang"
                            >
                              Giỏ hàng
                            </button>
                            <button href="#" class="checkout btn btn-thanhtoan">
                              Thanh toán
                            </button>
                          </div>
                        </li>
                      </ul>
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
</template>

<script setup>
import { userStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const store = userStore();
const { setStateLogin } = store;
// const { userLogin } = storeToRefs(store);

// const userAuth = toRaw(userLogin?.value?.user);
// const token = toRaw(userLogin?.value?.token);

function handleLogout() {
  setStateLogin({}, "");
}

function handleSearch() {
  document.getElementById("search-overlay").style.display = "block";
}
function handleCloseSearch() {
  document.getElementById("search-overlay").style.display = "none";
}
function searchItem() {
  document.getElementById("search-overlay").style.display = "none";
}
</script>

<style>
.btn-thanhtoan {
  background-color: rgb(255, 81, 0);
}
.btn-giohang {
  background-color: darkslategrey;
}
.btn-giohang:hover {
  color: rgb(255, 81, 0);
}
.btn {
  color: aliceblue;
}
a.nuxt-link-active {
  font-weight: bold;
}
.iconClass {
  margin-left: 20px;
}
.admin-dashboard {
  background-color: #ff4c3b;
  padding: 5px 10px;
  border-radius: 5px;
  color: aliceblue;
  font-weight: 600;
}
/* exact link will show the primary color for only the exact matching link */
</style>
