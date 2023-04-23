<template>
  <section class="register-page section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Đăng ký tài khoản</h3>
          <div class="theme-card">
            <form class="theme-form">
              <div class="form-row row">
                <div class="col-md-3"></div>
                <div class="col-md-6 register-form">
                  <div>
                    <label for="email">Họ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fname"
                      placeholder="Nhập Họ"
                      required=""
                    />
                  </div>
                  <div>
                    <label for="review">Tên</label>
                    <input
                      type="password"
                      class="form-control"
                      id="lname"
                      placeholder="Nhập Tên"
                      required=""
                    />
                  </div>
                  <div>
                    <label for="email">email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div>
                    <label for="review">Mật khẩu</label>
                    <input
                      type="password"
                      class="form-control"
                      id="review"
                      placeholder="Nhập mật khẩu"
                      required=""
                    />
                  </div>
                  <div class="registerButton">
                    <button type="submit" class="btn btn-solid w-auto">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.registerButton {
  width: 25%;
  margin: auto;
}
.register-form {
  margin-left: 5px;
}
</style>
