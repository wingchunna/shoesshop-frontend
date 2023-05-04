<template>
  <section class="cart-section section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="cart_counter">
            <div class="countdownholder">
              Giỏ hàng của bạn sẽ hết hạn sau <span id="timer"></span> phút!
            </div>
            <NuxtLink to="/checkout" class="cart_checkout btn btn-solid btn-xs"
              >Thanh toán ngay</NuxtLink
            >
          </div>
        </div>
        <div class="col-sm-12 table-responsive-xs">
          <table class="table cart-table">
            <thead>
              <tr class="table-head">
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">hành động</th>
                <th scope="col">Tổng tiền</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in store.productInCart" :key="index">
              <tr>
                <td>
                  <a href="#"><img :src="item.image" alt="" /></a>
                </td>
                <td>
                  <a href="#">{{ item.name }}</a>
                  <div class="mobile-cart-content row">
                    <div class="col">
                      <div class="qty-box">
                        <div class="input-group">
                          <input
                            type="text"
                            name="quantity"
                            class="form-control input-number"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <h2 class="td-color">{{ item.color }}</h2>
                    </div>
                    <div class="col">
                      <h2 class="td-color">
                        <a href="#" class="icon"><i class="ti-close"></i></a>
                      </h2>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>
                    {{ item.price.toLocaleString("it-IT") }}
                  </h2>
                </td>
                <td>
                  <div class="qty-box">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quantity"
                        class="form-control input-number"
                        v-model="item.quantity"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a @click="hanleRemoveItem(index)" class="icon"
                    ><i class="ti-close"></i
                  ></a>
                </td>
                <td>
                  <h2 class="td-color">{{ item.totalPrice }}</h2>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="table-responsive-md">
            <table class="table cart-table">
              <tfoot>
                <tr>
                  <td>Tổng tiền :</td>
                  <td>
                    <h2>
                      {{
                        store.totalSum.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })
                      }}
                    </h2>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div class="row cart-buttons">
        <div class="col-6">
          <NuxtLink to="/products" class="btn btn-solid"
            >Tiếp tục mua sắm</NuxtLink
          >
        </div>
        <div class="col-6">
          <NuxtLink to="/checkout" class="btn btn-solid">Thanh toán</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
const store = cartStore();
const { removeItem, calTotalSum } = store;

watch(store.productInCart, () => {
  calTotalSum();
});

watch(() => {
  console.log(store.productInCart);
});

function hanleRemoveItem(index) {
  removeItem(index);
  calTotalSum();
}
</script>

<style></style>
