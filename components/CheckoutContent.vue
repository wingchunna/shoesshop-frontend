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
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Tên</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Điện thoại</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-6 col-sm-6 col-xs-12">
                    <div class="field-label">Email</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <div class="field-label">Địa chỉ</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder="Street address"
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <div class="field-label">Tỉnh/Thành phố</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-6 col-xs-12">
                    <div class="field-label">Quận/ Huyện</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-12 col-sm-6 col-xs-12">
                    <div class="field-label">Mã bưu chính</div>
                    <input
                      type="text"
                      name="field-name"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div
                    class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"
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
                    <ul class="qty">
                      <li>Pink Slim Shirt × 1 <span>$25.10</span></li>
                      <li>SLim Fit Jeans × 1 <span>$555.00</span></li>
                    </ul>
                    <ul class="sub-total">
                      <li>
                        Mã giảm giá
                        <span
                          ><input type="text" id="coupon" name="coupon"
                        /></span>
                      </li>
                      <li>
                        Giao hàng
                        <div class="shipping">
                          <div class="shopping-option">
                            <input
                              type="checkbox"
                              name="free-shipping"
                              id="free-shipping"
                            />
                            <label for="free-shipping">Miễn phí Ship</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul class="total">
                      <li>Tổng tiền <span class="count">$620.00</span></li>
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
                      <a href="#" class="btn-solid btn">Thanh toán</a>
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

<script setup></script>

<style>
#coupon {
  margin: 0px 20px;
  width: 50%;
  float: right;
}
</style>
