<template>
  <section class="register-page section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Đăng nhập</h3>
          <div class="theme-card">
            <form class="theme-form">
              <div class="form-row row">
                <div class="col-md-3"></div>
                <div class="col-md-6 login-form">
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
                  <div>
                    <input
                      type="checkbox"
                      value="lsRememberMe"
                      id="rememberMe"
                    />
                    <label for="rememberMe">Tự động đăng nhập</label>
                    <span class="noAccount">
                      <NuxtLink to="/forgot-password"
                        >Quên mật khẩu ?.</NuxtLink
                      >
                    </span>
                  </div>
                  <div class="loginButton">
                    <button type="submit" class="btn btn-solid w-auto">
                      Đăng nhập
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

<script setup>
onMounted(() => {
  const rmCheck = document.getElementById("rememberMe");
  const emailInput = document.getElementById("email");

  if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
  } else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
  }

  function lsRememberMe() {
    if (rmCheck.checked && emailInput.value !== "") {
      localStorage.username = emailInput.value;
      localStorage.checkbox = rmCheck.value;
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }
  }
});
</script>

<style>
.loginButton {
  width: 25%;
  margin: auto;
}
.login-form {
  margin-left: 5px;
}
input[type="checkbox"] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  display: inline-block;
  width: auto;
  padding: 30px;
}

label {
  color: #666;
  font-size: 0.875rem;
  padding-left: 10px;
}
.noAccount {
  float: right;
  padding-right: 10px;
}
</style>
