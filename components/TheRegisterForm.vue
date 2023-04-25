<template>
  <section class="register-page section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Đăng ký tài khoản</h3>
          <div class="theme-card">
            <form class="theme-form" @submit.prevent="handleRegister()">
              <div class="form-row row">
                <div class="col-md-3"></div>
                <div class="col-md-6 register-form">
                  <div>
                    <label for="fname">Họ</label>
                    <input
                      v-model="firstName"
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="Nhập Họ"
                      required=""
                      name="firstName"
                    />
                  </div>
                  <div>
                    <label for="lname">Tên</label>
                    <input
                      v-model="lastName"
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Nhập Tên"
                      required=""
                      name="lastName"
                    />
                  </div>
                  <div>
                    <label for="email">email</label>
                    <input
                      v-model="email"
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                      name="email"
                    />
                  </div>
                  <div>
                    <label for="password">Mật khẩu</label>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Nhập mật khẩu"
                      required=""
                      name="password"
                    />
                  </div>
                  <div>
                    <label for="retype-password">Nhập lại mật khẩu</label>
                    <input
                      v-model="retypePassword"
                      type="password"
                      class="form-control"
                      id="retype-password"
                      placeholder="Nhập lại mật khẩu"
                      required=""
                      name="retype-password"
                    />
                  </div>

                  <div class="registerButton">
                    <button class="btn btn-solid w-auto">Đăng ký</button>
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
import { defineComponent } from "vue";
import { createToast } from "mosha-vue-toastify";

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;
let firstName = ref("");
let lastName = ref("");
let email = ref("");
let password = ref("");
let retypePassword = ref("");
const toastOption = {
  showCloseButton: true,
  toastBackgroundColor: "#ff4c3b",
};
async function handleRegister() {
  if (password?.value !== retypePassword?.value) {
    createToast(
      "Mật khẩu không trùng khớp, vui lòng kiểm tra lại !",
      toastOption
    );
  }
  // register user

  let fullname = computed(() => firstName.value + " " + lastName.value);
  let data = JSON.stringify({
    fullname: fullname.value,
    email: email.value,
    password: password.value,
  });
  console.log(data);
  await useFetch("http://localhost:3300/api/v1" + "/users/register", {
    method: "POST",
    body: data,

    initialCache: false,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Access a private variable (only available on the server)
    },
    onResponse({ request, response, options }) {
      // Process the response data
      if (response.status === 403) {
        createToast("Tài khoản đã tồn tại !", toastOption);
      }
      if (response.status === 500) {
        createToast("Thông tin bạn nhập không đúng !", toastOption);
      }
      if (response.status === 201) {
        createToast("Bạn đã đăng ký thành công !", toastOption);
        navigateTo({
          path: "/login",
        });
      }
    },
  });

  // console.log(error.value);
}
</script>

<style>
@import "mosha-vue-toastify/dist/style.css";
.registerButton {
  width: 25%;
  margin: auto;
}
.register-form {
  margin-left: 5px;
}
</style>
