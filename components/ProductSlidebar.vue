<template>
  <div class="collection-content col">
    <div class="page-main-content">
      <div class="row">
        <div class="col-sm-12">
          <div class="collection-product-wrapper">
            <div class="product-top-filter">
              <div class="row">
                <div class="col-xl-12">
                  <div class="filter-main-btn">
                    <span class="filter-btn btn btn-theme"
                      ><i class="fa fa-filter" aria-hidden="true"></i>
                      Filter</span
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="product-filter-content">
                    <div class="search-count">
                      <h5>Hiển thị kết quả</h5>
                    </div>
                    <div class="collection-view">
                      <ul>
                        <li>
                          <i class="fa fa-th grid-layout-view"></i>
                        </li>
                        <li>
                          <i class="fa fa-list-ul list-layout-view"></i>
                        </li>
                      </ul>
                    </div>
                    <div class="collection-grid-view">
                      <ul>
                        <li>
                          <img
                            src="../assets/images/icon/2.png"
                            alt=""
                            class="product-2-layout-view"
                          />
                        </li>
                        <li>
                          <img
                            src="../assets/images/icon/3.png"
                            alt=""
                            class="product-3-layout-view"
                          />
                        </li>
                        <li>
                          <img
                            src="../assets/images/icon/4.png"
                            alt=""
                            class="product-4-layout-view"
                          />
                        </li>
                        <li>
                          <img
                            src="../assets/images/icon/6.png"
                            alt=""
                            class="product-6-layout-view"
                          />
                        </li>
                      </ul>
                    </div>
                    <div class="product-page-per-view">
                      <select>
                        <option value="High to low">
                          24 Sản phẩm mỗi trang
                        </option>
                        <option value="Low to High">
                          50 Sản phẩm mỗi trang
                        </option>
                        <option value="Low to High">
                          100 Sản phẩm mỗi trang
                        </option>
                      </select>
                    </div>
                    <div class="product-page-filter">
                      <select>
                        <option value="High to low">Sắp xếp</option>
                        <option value="Low to High">Giá thấp đến cao</option>
                        <option value="Low to High">Giá cao đến thấp</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-xl-4"
                v-for="(product, index) in productList"
                :key="index"
              >
                <product-item :product="product"></product-item>
              </div>
            </div>
          </div>
          <the-pagination></the-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItem from "./ProductItem.vue";
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

// get products
const { data } = await useFetch(apiBase + "/products", {
  method: "GET",

  initialCache: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Access a private variable (only available on the server)
  },
  onResponse({ request, response, options }) {
    // Process the response data
    if (response.status === 403) {
      createToast("Không tìm thấy nhãn hàng !", toastOption);
    }
    if (response.status === 500) {
      createToast("Đã có lỗi xảy ra!", toastOption);
    }
    // console.log(response._data.brands);
  },
});

const productList = data.value.products;
</script>

<style>
.product-wrapper-grid {
}
.product-list-item {
  display: block;
}
.product-top-filter {
  margin-bottom: 30px;
}
</style>
