<template>
  <section class="contact-page section-b-space">
    <div class="container">
      <div class="row section-b-space">
        <div class="col-lg-8 map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6307117741876!2d105.79424317591015!3d21.0074351885094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab95bd37c61f%3A0x6ec553a57ae27350!2sGrand%20Plaza%20Hanoi%20Hotel!5e0!3m2!1svi!2s!4v1681981409176!5m2!1svi!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-4">
          <div class="contact-right">
            <ul>
              <li>
                <div class="contact-icon">
                  <img
                    src="/images/icon/phone.png"
                    alt="Generic placeholder image"
                  />
                  <h6>Hotline</h6>
                </div>
                <div class="media-body">
                  <p>+84 983 999 999</p>
                </div>
              </li>
              <li>
                <div class="contact-icon">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <h6>Địa chỉ</h6>
                </div>
                <div class="media-body">
                  <p>
                    Tầng 1 GrandPlaza, 117 Trần Duy Hưng - Cầu Giấy - Hà Nội
                  </p>
                </div>
              </li>
              <li>
                <div class="contact-icon">
                  <img
                    src="/images/icon/email.png"
                    alt="Generic placeholder image"
                  />
                  <h6>Email</h6>
                </div>
                <div class="media-body">
                  <p>support@shoesshop.com</p>
                </div>
              </li>
              <li>
                <div class="contact-icon">
                  <i class="fa fa-fax" aria-hidden="true"></i>
                  <h6>Hệ thống cửa hàng</h6>
                </div>
                <div class="media-body">
                  <p>CS1: Số 1, phố Chùa Bộc, Đống Đa, TP.Hà Nội</p>
                  <p>
                    CS2: Số 15, phố Kinh Dương Vương, Q. Hải Châu, TP. Đà Nẵng
                  </p>
                  <p>CS3: Số 6, Nguyễn Thị Minh Khai, Q.1, TP. Hồ Chí Minh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <form class="theme-form">
            <div class="form-row row">
              <div class="col-md-6">
                <label for="name">Họ</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Nhập họ và tên đệm của bạn"
                  required=""
                />
              </div>
              <div class="col-md-6">
                <label for="email">Tên</label>
                <input
                  type="text"
                  class="form-control"
                  id="last-name"
                  placeholder="Nhập tên của bạn"
                  required=""
                />
              </div>
              <div class="col-md-6">
                <label for="review">Số điện thoại</label>
                <input
                  type="text"
                  class="form-control"
                  id="review"
                  placeholder="Nhập số điện thoại"
                  required=""
                />
              </div>
              <div class="col-md-6">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div class="col-md-12">
                <label for="review">Để lại lời nhắn</label>
                <textarea
                  class="form-control"
                  placeholder="Viết lời nhắn"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <div class="col-md-12">
                <button class="btn btn-solid" type="submit">Gửi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.media-body p {
  padding-bottom: 10px;
}
</style>
