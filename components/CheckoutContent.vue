<template>
  <section class="section-b-space">
    <div class="container">
      <div class="checkout-page">
        <div class="checkout-form">
          <form>
            <div class="row">
              <div class="col-lg-6 col-sm-12 col-xs-12">
                <div class="checkout-title">
                  <h3>Chi tiết thanh toán</h3>
                </div>
                <div class="row check-out">
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Họ</div>
                    <input
                      type="text"
                      name="field-name"
                      placeholder=""
                      v-model="store.userLogin.firstName"
                    />
                  </div>
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Tên</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.lastName"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Điện thoại</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.phone"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Email</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.email"
                      placeholder=""
                    />
                  </div>

                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <div class="field-label">Địa chỉ</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.address"
                      placeholder="Street address"
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <div class="field-label">Tỉnh/Thành phố</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.city"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-6 col-xs-12">
                    <div class="field-label">Quận/ Huyện</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.province"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-6 col-xs-12">
                    <div class="field-label">Quốc gia</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.country"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-6 col-xs-12">
                    <div class="field-label">Mã bưu chính</div>
                    <input
                      type="text"
                      name="field-name"
                      v-model="store.userLogin.postalCode"
                      placeholder=""
                    />
                  </div>
                  <div
                    class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    v-if="!store.userLogin.email"
                  >
                    <input
                      type="checkbox"
                      name="shipping-option"
                      id="account-option"
                    />
                    &ensp;
                    <label for="account-option">Tạo tài khoản?</label>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12 col-xs-12">
                <div class="checkout-details">
                  <div class="order-box">
                    <div class="title-box">
                      <div>Sản phẩm <span>Tổng tiền</span></div>
                    </div>
                    <ul
                      class="qty"
                      v-for="(item, index) in userCartStore.productInCart"
                      :key="index"
                    >
                      <li>
                        {{ item.name }} × {{ item.quantity }}
                        <span
                          ><b>{{
                            item.totalPrice.toLocaleString("it-IT")
                          }}</b></span
                        >
                      </li>
                    </ul>
                    <ul class="sub-total">
                      <li>
                        Nhập mã giảm giá
                        <b style="color: red"> SUMMER-2023 </b> để được giảm 20%
                        trên tổng đơn hàng
                      </li>
                      <li>
                        <div>
                          Mã giảm giá
                          <input
                            type="text"
                            id="coupon"
                            name="coupon"
                            v-model="coupon"
                          />

                          <button
                            @click.prevent="handleApplyCoupon(coupon)"
                            class="btn btn-solid coupon-apply"
                          >
                            Áp Dụng
                          </button>
                        </div>
                      </li>
                    </ul>
                    <ul class="total">
                      <li>
                        Tổng tiền
                        <span class="count"
                          ><b>{{
                            userCartStore.totalSum.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })
                          }}</b></span
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="payment-box">
                    <div class="upper-box">
                      <div class="payment-options">
                        <ul>
                          <li>
                            <div class="radio-option">
                              <input
                                type="radio"
                                name="payment-group"
                                id="payment-1"
                                checked="checked"
                                value="1"
                                v-model="payment"
                              />
                              <label for="payment-1"
                                >VNPAY<span class="small-text"
                                  >Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.</span
                                ></label
                              >
                            </div>
                          </li>
                          <li>
                            <div class="radio-option">
                              <input
                                type="radio"
                                name="payment-group"
                                id="payment-2"
                                value="2"
                                v-model="payment"
                              />
                              <label for="payment-2"
                                >Thanh toán khi nhận hàng<span
                                  class="small-text"
                                  >Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.</span
                                ></label
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="text-end">
                      <a @click="handleCheckout()" class="btn-solid btn"
                        >Thanh toán</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { userStore } from "@/stores/user";
import { cartStore } from "@/stores/cart";
const store = userStore();
const userCartStore = cartStore();
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

import { createToast } from "mosha-vue-toastify";
const toastOption = {
  showCloseButton: true,
  toastBackgroundColor: "#ff4c3b",
};

async function handleApplyCoupon(coupon) {
  if (coupon) {
    const { data } = await useFetch(apiBase + "/coupons/getcoupon/" + coupon, {
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
          createToast("Mã giảm giá không hợp lệ !", toastOption);
        }
        if (response.status === 500) {
          createToast("Đã có lỗi xảy ra!", toastOption);
        }
        userCartStore.totalSum =
          userCartStore.totalSum -
          (userCartStore.totalSum * response._data.coupon.discount) / 100;
      },
    });
  } else {
    createToast("Bạn cần nhập mã giảm giá !", toastOption);
  }
}

let payment = ref(1);
let coupon = ref();
function handleCheckout() {
  if (payment.value == 1) {
    // xử lý hàm tạo order với vnpay
    // chuyển sang trang thanh toán thành công

    navigateTo({
      path: "/order-success",
    });
  } else {
    // xử lý hàm tạo order

    // chuyển sang trang thanh toán thành công
    navigateTo({
      path: "/order-success",
    });
  }
}
</script>

<style>
@import "mosha-vue-toastify/dist/style.css";
#coupon {
  margin: 0px 20px;
  width: 50%;
}
.coupon-apply {
  float: right;
}
</style>
