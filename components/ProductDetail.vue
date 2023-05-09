<template>
  <section class="section-b-space">
    <div class="collection-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="gallery">
              <div class="swiper-container gallery-slider">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/b4e9c91d73650acc30e571dee9515744.jpg_720x720q80.jpg_.webp"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://salt.tikicdn.com/cache/w1200/ts/product/cd/0c/1f/23a251b92f1c6452acc87639512f796c.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://streetstyleshop.vn/wp-content/uploads/2020/12/the-thao-nu-de-hoi-10-600x600.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://giay1988.vn/wp-content/uploads/2021/05/giay-the-thao-nu-mau-den-de-MD-cao-3-phan-3.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKv0AoLB2ebQ7bioCXLS-p0jfW7I6N1hdgg&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://www.chapi.vn/img/product/2020/9/27/giay-the-thao-nam-sneaker-conxegn-15-500x500.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="swiper-prev"></div>
                <div class="swiper-next"></div>
              </div>

              <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/b4e9c91d73650acc30e571dee9515744.jpg_720x720q80.jpg_.webp"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://salt.tikicdn.com/cache/w1200/ts/product/cd/0c/1f/23a251b92f1c6452acc87639512f796c.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://streetstyleshop.vn/wp-content/uploads/2020/12/the-thao-nu-de-hoi-10-600x600.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://giay1988.vn/wp-content/uploads/2021/05/giay-the-thao-nu-mau-den-de-MD-cao-3-phan-3.jpg"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKv0AoLB2ebQ7bioCXLS-p0jfW7I6N1hdgg&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      src="https://www.chapi.vn/img/product/2020/9/27/giay-the-thao-nam-sneaker-conxegn-15-500x500.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="open3d">
              <button
                class="btn btn-solid hover-solid btn-animation"
                data-bs-toggle="modal"
                data-bs-target="#product-modal"
              >
                Trải nghiệm sản phẩm 3D
              </button>
            </div>

            <!-- <div
              class="image-360"
              data-bs-toggle="modal"
              data-bs-target="#product-modal"
            >
              <img
                src="data:image/png;base64,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"
                class="img-fluid"
              />
            </div> -->
          </div>
          <div class="col-lg-6 rtl-text">
            <div class="product-right">
              <div class="product-count">
                <ul>
                  <li>
                    <img
                      src="/public/images/fire.gif"
                      class="img-fluid"
                      alt="image"
                    />
                    <span class="p-counter">37</span>
                    <span class="lang"> người đã mua 1 ngày trước</span>
                  </li>
                  <li>
                    <img
                      src="/public/images/person.gif"
                      class="img-fluid user_img"
                      alt="image"
                    />
                    <span class="p-counter">44</span>
                    <span class="lang"> người đã mua sản phẩm này</span>
                  </li>
                </ul>
              </div>
              <h2>{{ props.product.name }}</h2>
              <div class="rating-section">
                <div class="rating">
                  <i class="fa fa-star" />
                </div>
                <h6>{{ props.product.reviews.length }} đánh giá</h6>
              </div>
              <div class="label-section">
                <span class="badge badge-grey-color">#1 Sản phẩm bán chạy</span>
                <span class="label-text">in {{ data.category.name }}</span>
              </div>
              <h2 class="price-detail">
                {{
                  props.product.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
                }}
              </h2>
              <ul
                class="color-variant"
                v-for="(color, index) in props.product.colors"
                :key="index"
              >
                <li
                  :class="active_el == index ? [color, 'active'] : color"
                  @click="handleChooseColor(index, color)"
                ></li>
              </ul>
              <div
                id="selectSize"
                class="addeffect-section product-description border-product"
              >
                <h6 class="product-title size-text">
                  chọn size
                  <span
                    ><a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#sizemodal"
                      >tham khảo size giày nữ</a
                    ></span
                  >
                </h6>
                <div
                  class="modal fade"
                  id="sizemodal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Bảng size giày
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img
                          src="/public/images/size-nu.jpg"
                          alt=""
                          class="img-fluid blur-up lazyload"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="product-title size-text">
                  <span
                    ><a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#sizemodalmen"
                      >tham khảo size giày nam</a
                    ></span
                  >
                </h6>
                <div
                  class="modal fade"
                  id="sizemodalmen"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Bảng size giày
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img
                          src="/public/images/size-nam.jpg"
                          alt=""
                          class="img-fluid blur-up lazyload"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="error-message">Chọn size</h6>
                <div class="size-box">
                  <ul>
                    <li
                      v-for="(size, index) in props.product.sizes"
                      :key="index"
                    >
                      <a
                        href="javascript:void(0)"
                        :class="size_active_el == index ? 'active' : ''"
                        @click="handleChooseSize(index, size)"
                        >{{ size }}</a
                      >
                    </li>
                  </ul>
                </div>
                <h6 class="product-title">Số lượng</h6>
                <div class="qty-box">
                  <div class="input-group">
                    <span class="input-group-prepend"
                      ><button
                        type="button"
                        class="btn quantity-left-minus"
                        data-type="minus"
                        data-field=""
                        @click="handleDecreaseQuantity()"
                      >
                        <i class="ti-angle-left"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      class="form-control input-number"
                      v-model="quantity"
                    />
                    <span class="input-group-prepend"
                      ><button
                        type="button"
                        class="btn quantity-right-plus"
                        data-type="plus"
                        data-field=""
                        @click="handleIncreaseQuantity()"
                      >
                        <i class="ti-angle-right"></i></button
                    ></span>
                  </div>
                </div>
              </div>
              <div class="product-buttons">
                <a
                  @click="handleAddToCart()"
                  id="cartEffect"
                  class="btn btn-solid hover-solid btn-animation"
                  ><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i>
                  thêm vào giỏ</a
                >
                <a href="#" class="btn btn-solid"
                  ><i class="fa fa-bookmark fz-16 me-2" aria-hidden="true"></i
                  >yêu thích</a
                >
              </div>
              <div class="product-count">
                <ul>
                  <li>
                    <img
                      src="/public/images/icon/truck.png"
                      class="img-fluid"
                      alt="image"
                    />
                    <span class="lang"
                      >Miễn phí ship cho hóa đơn trên 1 triệu đồng</span
                    >
                  </li>
                </ul>
              </div>

              <div class="border-product">
                <h6 class="product-title">Thông tin vận chuyển</h6>
                <ul class="shipping-info">
                  <li>Sản phẩm mới 100%</li>
                  <li>Miễn phí ship toàn quốc với đơn hàng từ 1 triệu đồng</li>
                  <li>Thanh toán khi nhận hàng hoặc chuyển khoản</li>
                  <li>Hoàn trả trong vòng 30 ngày</li>
                </ul>
              </div>
              <div class="border-product">
                <h6 class="product-title">chia sẻ</h6>
                <div class="product-icon">
                  <ul class="product-social">
                    <li>
                      <a href="#"><i class="fa fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-rss"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
  </section>
  <div
    class="modal fade"
    id="product-modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="product360_view" class="product360">
            <div class="product-image-360">
              <div class="nav_bar">
                <a href="#" class="custom_previous">
                  <i class="ti-angle-left"></i>
                </a>
                <a href="#" class="custom_play">
                  <i class="ti-control-play"></i>
                </a>
                <a href="#" class="custom_stop">
                  <i class="ti-control-pause"></i>
                </a>
                <a href="#" class="custom_next">
                  <i class="ti-angle-right"></i>
                </a>
              </div>
              <ul class="product-images-item" style="display: block"></ul>
              <div class="spinner"><span>0%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";
const toastOption = {
  showCloseButton: true,
  toastBackgroundColor: "#ff4c3b",
};

const props = defineProps(["product"]);
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

import { cartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
const store = cartStore();
const { setStateCart, calTotalSum } = store;

import { ref, onMounted } from "vue";
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  EffectFade,
} from "swiper";
Swiper.use([Autoplay, Navigation, Pagination, Controller, EffectFade]);

const testslider = [
  {
    url: "https://contents.mediadecathlon.com/p2155510/2d4c941c14f1be10172d8977107329a6/p2155510.jpg?format=auto&quality=70&f=650x0",
  },
  {
    url: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_776%2Cy_755/MTk0Njk2MDgyNjkxNzI4NTQ2/ja-morant-shoe.jpg",
  },
];
onMounted(() => {
  let str =
    "https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img01.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img02.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img03.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img04.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img05.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img06.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img07.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img08.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img09.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img10.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img11.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img12.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img13.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img14.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img15.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img16.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img17.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img18.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img19.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img20.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img21.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img22.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img23.jpg, https://cdn.shopify.com/s/files/1/0032/3279/2674/files/img24.jpg";
  let img_array = str.split(",");
  let len_count = img_array.length;

  function init() {
    let pro_view = $(".product-image-360").ThreeSixty({
      totalFrames: len_count,
      endFrame: len_count,
      currentFrame: 1,
      imgList: ".product-images-item",
      progress: ".spinner",
      imgArray: img_array,
      height: null,
      width: null,
      responsive: true,
      navigation: false,
    });

    $(".custom_previous").bind("click", function (e) {
      pro_view.previous();
    });

    $(".custom_next").bind("click", function (e) {
      pro_view.next();
    });

    $(".custom_play").bind("click", function (e) {
      pro_view.play();
      $(".nav_bar").addClass("play-video");
    });

    $(".custom_stop").bind("click", function (e) {
      pro_view.stop();
      $(".nav_bar").removeClass("play-video");
    });

    let myModalEl = document.getElementById("product-modal");
    myModalEl.addEventListener("shown.bs.modal", function (event) {
      $(window).trigger("resize");
    });
    $("#360view").on("shown.bs.modal", function () {
      $(window).trigger("resize");
    });
  }
  init();

  const slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    // navigation: {
    //   nextEl: ".swiper-next",
    //   prevEl: ".swiper-prev",
    // },
  });

  const thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  //
  //   slider.params.control = thumbs;
  //   thumbs.params.control = slider;

  //

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
});

// handle Increase - Decrease Quantity
let quantity = ref(1);
function handleDecreaseQuantity() {
  if (quantity.value <= 1) {
    quantity.value += 1;
  }
  quantity.value -= 1;
}

function handleIncreaseQuantity() {
  if (quantity.value >= props.product.quantity) {
    quantity.value -= props.product.quantity;
  }
  quantity.value += 1;
}

//get category
const { data } = await useFetch(
  apiBase + "/categories/" + props.product.category,
  {
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
        createToast("Không tìm thấy sản phẩm !", toastOption);
      }
      if (response.status === 500) {
        createToast("Đã có lỗi xảy ra!", toastOption);
      }
      // console.log(response._data.brands);
    },
  }
);
let active_el = ref(-1);
let size_active_el = ref(-1);
let colorChoosed = ref("");
let sizeChoosed = ref("");

// chose color
function handleChooseColor(el, color) {
  active_el.value = el;
  colorChoosed.value = color;
}
// chose size
function handleChooseSize(el, size) {
  size_active_el.value = el;
  sizeChoosed.value = size;
}

// add to Cart
function handleAddToCart() {
  if (colorChoosed.value == "" || sizeChoosed.value == "") {
    createToast("Bạn cần chọn màu sắc hoặc size của sản phẩm !", toastOption);
  } else {
    const product = {
      productId: props.product._id,
      name: props.product.name,
      image: props.product.images[0],
      price: props.product.price,
      itemBuy: quantity.value,
      color: colorChoosed.value,
      size: sizeChoosed.value,
      totalPrice: props.product.price * quantity.value,
    };
    setStateCart(product);

    createToast("Đã thêm sản phẩm vào giỏ hàng !", toastOption);
    calTotalSum();
  }
}
</script>

<style>
@import "swiper/css";
@import "mosha-vue-toastify/dist/style.css";

.open3d {
  width: 50%;
  margin: auto;
  text-align: center;
}

.gallery {
  width: 100%;
  max-width: 620px;
  margin: 40px auto;
}
.gallery-slider {
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  overflow: hidden;
}
.gallery-slider .swiper-slide {
  width: auto;
  height: 400px;
}
.gallery-slider .swiper-slide img {
  display: block;
  width: auto;
  height: 100%;
  margin: 0 auto;
}
.gallery-thumbs {
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.gallery-thumbs .swiper-slide {
  width: 100px;
  height: 100px;
  text-align: center;
  overflow: hidden;
  opacity: 0.1;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
.gallery-thumbs .swiper-slide img {
  width: auto;
  height: 100%;
}
</style>
