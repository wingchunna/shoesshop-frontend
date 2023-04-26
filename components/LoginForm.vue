<template>
  <section class="register-page section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Đăng nhập</h3>
          <div class="theme-card">
            <form class="theme-form" @submit.prevent="handleLogin()">
              <div class="form-row row">
                <div class="col-md-3"></div>
                <div class="col-md-6 login-form">
                  <div>
                    <label for="email">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                      name="email"
                      v-model="email"
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
                      name="password"
                      v-model="password"
                    />
                  </div>
                  <div>
                    <!-- <input
                      type="checkbox"
                      value="lsRememberMe"
                      id="rememberMe"
                      @click="handleRemember()"
                    />
                    <label for="rememberMe">Tự động đăng nhập</label> -->
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
import { defineComponent } from "vue";
import { createToast } from "mosha-vue-toastify";

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

const toastOption = {
  showCloseButton: true,
  toastBackgroundColor: "#ff4c3b",
};
onMounted(() => {
  // const rmCheck = document.getElementById("rememberMe");
  // const emailInput = document.getElementById("email");
  // // console.log(localStorage.getItem("checked"));
  // if (localStorage.getItem("checked") === "true") {
  //   rmCheck.setAttribute("checked", "checked");
  //   emailInput.value = localStorage.username;
  // } else {
  //   rmCheck.removeAttribute("checked");
  //   emailInput.value = "";
  // }
  // function lsRememberMe() {
  //   if (rmCheck.checked && emailInput.value !== "") {
  //     localStorage.username = emailInput.value;
  //     localStorage.checkbox = rmCheck.value;
  //   } else {
  //     localStorage.username = "";
  //     localStorage.checkbox = "";
  //   }
  // }
});
// function handleRemember() {
//   const rmCheck = document.getElementById("rememberMe");
//   const emailInput = document.getElementById("email");

//   localStorage.setItem("checked", rmCheck.checked);
//   console.log(localStorage.getItem("checked"));
//   localStorage.setItem("username", emailInput.value);
// }
import { userStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const store = userStore();
const { setStateLogin } = store;
const { userLogin } = storeToRefs(store);
let email = ref("");
let password = ref("");
async function handleLogin() {
  // login user

  let data = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  await useFetch(apiBase + "/users/login", {
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
        createToast(
          "Tài khoản không đúng hoặc đang bị tạm khóa. Vui lòng kiểm tra lại hoặc liên hệ admin !",
          toastOption
        );
      }
      if (response.status === 500) {
        createToast("Đăng nhập không thành công !", toastOption);
      }
      if (response.status === 201) {
        createToast("Bạn đã đăng nhập thành công !", toastOption);

        navigateTo({
          path: "/products",
        });
        setStateLogin(response._data.user, response._data.token);
      }
    },
  });
}
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
