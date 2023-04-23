<template>
  <section class="tracking-page section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h3>Trạng thái cho số đơn hàng: 54151548</h3>
          <div class="row border-part">
            <div class="col-xl-2 col-md-3 col-sm-4">
              <div class="product-detail">
                <img
                  src="../assets/images/fashion/pro/1.jpg"
                  class="img-fluid blur-up lazyload"
                  alt=""
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-sm-8">
              <div class="tracking-detail">
                <ul>
                  <li>
                    <div class="left">
                      <span>Tên đơn hàng</span>
                    </div>
                    <div class="right">
                      <span>Slim Fit Dress</span>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <span>Mã khách hàng</span>
                    </div>
                    <div class="right">
                      <span>54151548</span>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <span>Ngày mua hàng</span>
                    </div>
                    <div class="right">
                      <span>20 Nov 2020</span>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <span>Ngày giao hàng</span>
                    </div>
                    <div class="right">
                      <span>20 Nov 2020</span>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <span>Địa chỉ giao hàng</span>
                    </div>
                    <div class="right">
                      <span
                        >2253 Short Street <br />Austin, TX<br />Texas,
                        78701</span
                      >
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <span>Đơn vị vận chuyển</span>
                    </div>
                    <div class="right">
                      <span>FedEx</span>
                    </div>
                  </li>
                  <li>
                    <div class="left">
                      <span>Mã vận đơn</span>
                    </div>
                    <div class="right">
                      <span>656974541515484</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-5 col-lg-4">
              <div class="order-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55107.59629446948!2d-97.77629221286301!3d30.316123884942762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca7d7a2a6d0d%3A0x209a4c2782a39461!2sCentral%20Market!5e0!3m2!1sen!2sin!4v1607754725548!5m2!1sen!2sin"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="arrow-steps clearfix">
              <div class="step done"><span> Đặt hàng thành công</span></div>
              <div class="step current"><span>Chuẩn bị giao hàng</span></div>
              <div class="step"><span> Đang giao hàng</span></div>
              <div class="step"><span>Giao hàng thành công</span></div>
            </div>
          </div>
          <div class="order-table table-responsive-sm">
            <table class="table mb-0 table-striped table-borderless">
              <thead class="">
                <tr>
                  <th scope="col">Ngày</th>
                  <th scope="col">Giờ</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Vị trí</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20 Nov 2020</td>
                  <td>12.00 AM</td>
                  <td>shipped</td>
                  <td>california</td>
                </tr>
                <tr>
                  <td>20 Nov 2020</td>
                  <td>12.00 AM</td>
                  <td>shipping info received</td>
                  <td>california</td>
                </tr>
                <tr>
                  <td>20 Nov 2020</td>
                  <td>12.00 AM</td>
                  <td>origin scan</td>
                  <td>california</td>
                </tr>
                <tr>
                  <td>20 Nov 2020</td>
                  <td>12.00 AM</td>
                  <td>shipping info received</td>
                  <td>california</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="backToProfile">
        <NuxtLink
          to="/user-dashboard"
          class="btn btn-solid hover-solid btn-animation"
        >
          Về trang tài khoản
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.backToProfile {
  width: 30%;
  padding-top: 30px;
  margin: auto;
}
</style>
