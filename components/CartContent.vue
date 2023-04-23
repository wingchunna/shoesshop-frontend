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
            <tbody>
              <tr>
                <td>
                  <a href="#"><img src="/public/images/pro3/2.jpg" alt="" /></a>
                </td>
                <td>
                  <a href="#">cotton shirt</a>
                  <div class="mobile-cart-content row">
                    <div class="col">
                      <div class="qty-box">
                        <div class="input-group">
                          <input
                            type="text"
                            name="quantity"
                            class="form-control input-number"
                            value="1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <h2 class="td-color">$63.00</h2>
                    </div>
                    <div class="col">
                      <h2 class="td-color">
                        <a href="#" class="icon"><i class="ti-close"></i></a>
                      </h2>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>$63.00</h2>
                </td>
                <td>
                  <div class="qty-box">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quantity"
                        class="form-control input-number"
                        value="1"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#" class="icon"><i class="ti-close"></i></a>
                </td>
                <td>
                  <h2 class="td-color">$4539.00</h2>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <a href="#"
                    ><img src="/public/images/pro3/35.jpg" alt=""
                  /></a>
                </td>
                <td>
                  <a href="#">cotton shirt</a>
                  <div class="mobile-cart-content row">
                    <div class="col">
                      <div class="qty-box">
                        <div class="input-group">
                          <input
                            type="number"
                            name="quantity"
                            class="form-control input-number"
                            value="1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <h2 class="td-color">$63.00</h2>
                    </div>
                    <div class="col">
                      <h2 class="td-color">
                        <a href="#" class="icon"><i class="ti-close"></i></a>
                      </h2>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>$63.00</h2>
                </td>
                <td>
                  <div class="qty-box">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quantity"
                        class="form-control input-number"
                        value="1"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#" class="icon"><i class="ti-close"></i></a>
                </td>
                <td>
                  <h2 class="td-color">$4539.00</h2>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <a href="#"
                    ><img src="/public/images/pro3/33.jpg" alt=""
                  /></a>
                </td>
                <td>
                  <a href="#">cotton shirt</a>
                  <div class="mobile-cart-content row">
                    <div class="col">
                      <div class="qty-box">
                        <div class="input-group">
                          <input
                            type="number"
                            name="quantity"
                            class="form-control input-number"
                            value="1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <h2 class="td-color">$63.00</h2>
                    </div>
                    <div class="col">
                      <h2 class="td-color">
                        <a href="#" class="icon"><i class="ti-close"></i></a>
                      </h2>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>$63.00</h2>
                </td>
                <td>
                  <div class="qty-box">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quantity"
                        class="form-control input-number"
                        value="1"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="#" class="icon"><i class="ti-close"></i></a>
                </td>
                <td>
                  <h2 class="td-color">$4539.00</h2>
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
                    <h2>$6935.00</h2>
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

<script setup></script>

<style></style>
