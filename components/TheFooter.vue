<template>
  <footer
    class="bg-img-gym overlay-cls effect-cls footer-effect parallax-footer"
  >
    <div class="dark-layout">
      <div class="container">
        <section class="section-b-space border-b">
          <div class="row footer-theme2">
            <div class="col-lg-3">
              <div class="footer-title footer-mobile-title">
                <h4>Giới thiệu</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo">
                  <img src="/images/icon/logo.png" alt="" />
                </div>
                <p>
                  Shoes Shop Online - Đại lý phân phối cấp 1 tại Việt Nam của
                  các hãng giày nổi tiếng trên thế giới. Chúng tôi cam mang đến
                  cho quý khách hàng những sản phẩm chất lượng cao cấp, phù hợp
                  với thị hiếu và phong cách của từng khách hàng. Sự hài lòng
                  của quý khách là niềm tự hào của chúng tôi !
                </p>
              </div>
            </div>
            <div class="col-lg-6 subscribe-wrapper">
              <div class="subscribe-block">
                <h2>Bản tin khuyến mãi</h2>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput3"
                      placeholder="Enter your email"
                    />
                    <button type="submit" class="btn btn-solid">Đăng ký</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-title">
                <h4>Thông tin liên hệ</h4>
              </div>
              <div class="footer-contant">
                <ul class="contact-details">
                  <li>
                    <div class="shop-name">Shoes Shop Online Store</div>
                  </li>
                  <li>
                    Tầng 1 GrandPlaza, 117 Trần Duy Hưng - Cầu Giấy - Hà Nội
                  </li>
                  <li>Hotline : 0983 999 999</li>
                  <li>
                    Email <NuxtLink to="/about">support@shoesshop.com</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="dark-layout">
      <div class="container">
        <section class="small-section">
          <div class="row footer-theme2">
            <div class="col p-set">
              <div class="footer-link">
                <div class="footer-title">
                  <h4>Tài Khoản</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <NuxtLink to="/categories/men">Dành cho Nam</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/categories/women">Dành cho Nữ</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/categories/new-products"
                        >Sản phẩm Mới</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/categories/feature-products"
                        >Sản phẩm Hot</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/categories/promotional-products"
                        >Sản phẩm Khuyến mại</NuxtLink
                      >
                    </li>
                    <li><NuxtLink to="/accessories">Phụ kiện</NuxtLink></li>
                    <li>
                      <NuxtLink to="/support-tools">Dụng cụ hỗ trợ</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-link-b">
                <div class="footer-title">
                  <h4>Vì sao chúng tôi được chọn</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <NuxtLink to="/shipping-refund"
                        >Vận chuyển & Hoàn trả</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink to="/term-conditional"
                        >Bảo mật thông tin</NuxtLink
                      >
                    </li>
                    <li><NuxtLink to="/gallery">Phòng trưng bày</NuxtLink></li>
                    <li>
                      <NuxtLink to="/branches">Hệ thống cửa hàng</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/contact">Thông tin liên lạc</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="sub-footer darker-subfooter">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="footer-end">
              <p>
                <i class="fa fa-copyright" aria-hidden="true">Copyright</i>
                <i class="fa fa-copyright" aria-hidden="true"></i>2023 - Shoes
                Shop Online
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="payment-card-bottom">
              <ul>
                <li>
                  <NuxtLink to="/about"
                    ><img src="/images/icon/visa.png" alt=""
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about"
                    ><img src="/images/icon/mastercard.png" alt=""
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about"
                    ><img src="/images/icon/paypal.png" alt=""
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about"
                    ><img src="/images/icon/american-express.png" alt=""
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about"
                    ><img src="/images/icon/discover.png" alt=""
                  /></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.parallax-footer {
  /* The image used */
  background-image: url("/images/upload/footer.jpg");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.shop-name {
  color: orangered;
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
