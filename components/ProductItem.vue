<template>
  <div class="col-xl-3 col-6 col-grid-box">
    <div class="product-box">
      <div class="img-wrapper">
        <div class="front">
          <a href="#"
            ><img
              src="../assets/images/pro3/27.jpg"
              class="img-fluid blur-up lazyload bg-img"
              alt=""
          /></a>
        </div>
        <div class="back">
          <a href="#"
            ><img
              src="../assets/images/pro3/28.jpg"
              class="img-fluid blur-up lazyload bg-img"
              alt=""
          /></a>
        </div>
        <div class="cart-info cart-wrap">
          <button
            data-bs-toggle="modal"
            data-bs-target="#addtocart"
            title="Add to cart"
          >
            <i class="ti-shopping-cart"></i>
          </button>
          <a href="javascript:void(0)" title="Add to Wishlist"
            ><i class="ti-heart" aria-hidden="true"></i
          ></a>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#quick-view"
            title="Quick View"
            ><i class="ti-search" aria-hidden="true"></i
          ></a>
          <a href="compare.html" title="Compare"
            ><i class="ti-reload" aria-hidden="true"></i
          ></a>
        </div>
      </div>
      <div class="product-detail">
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <a href="product-page(no-sidebar).html">
          <h6>Purple polo tshirt</h6>
        </a>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <h4>$40.00</h4>
        <ul class="color-variant">
          <li class="bg-light0"></li>
          <li class="bg-light1"></li>
          <li class="bg-light2"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
