<template>
  <section class="dashboard-section section-b-space user-dashboard-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="dashboard-sidebar">
            <div class="profile-top">
              <div class="profile-image">
                <img src="/public/images/avtar.jpg" alt="" class="img-fluid" />
              </div>
              <div class="profile-detail">
                <h5>Mark Jecno</h5>
                <h6>mark.jecno@mail.com</h6>
              </div>
            </div>
            <div class="faq-tab">
              <ul class="nav nav-tabs" id="top-tab" role="tablist">
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#info"
                    class="nav-link active"
                    >Thông tin tài khoản</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#address"
                    class="nav-link"
                    >Địa chỉ</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#orders"
                    class="nav-link"
                    >Đơn hàng</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#wishlist"
                    class="nav-link"
                    >Yêu thích</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#payment"
                    class="nav-link"
                    >Quản lý thẻ</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    class="nav-link"
                    >Hồ sơ</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    data-bs-toggle="tab"
                    data-bs-target="#security"
                    class="nav-link"
                    >Bảo mật</a
                  >
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Đăng xuất</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="faq-content tab-content" id="top-tabContent">
            <div class="tab-pane fade show active" id="info">
              <div class="counter-section">
                <div class="welcome-msg">
                  <h4>Xin chào, MARK JECNO !</h4>
                  <p>
                    Từ Bảng điều khiển tài khoản , bạn có khả năng xem ảnh chụp
                    nhanh hoạt động tài khoản gần đây của bạn và cập nhật thông
                    tin tài khoản. Chọn một liên kết bên dưới để xem hoặc chỉnh
                    sửa thông tin
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="counter-box">
                      <img
                        src="/public/images/icon/dashboard/sale.png"
                        class="img-fluid"
                      />
                      <div>
                        <h3>25</h3>
                        <h5>Tổng đơn hàng</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="counter-box">
                      <img
                        src="/public/images/icon/dashboard/homework.png"
                        class="img-fluid"
                      />
                      <div>
                        <h3>5</h3>
                        <h5>Đơn hàng tạm giữ</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="counter-box">
                      <img
                        src="/public/images/icon/dashboard/order.png"
                        class="img-fluid"
                      />
                      <div>
                        <h3>50</h3>
                        <h5>Yêu thích</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box-account box-info">
                  <div class="box-head">
                    <h4>Thông tin tài khoản</h4>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="box">
                        <div class="box-title">
                          <h3>Thông tin liên hệ</h3>
                          <a href="#">Sửa</a>
                        </div>
                        <div class="box-content">
                          <h6>Mark Jecno</h6>
                          <h6>mark-jecno@gmail.com</h6>
                          <h6><a href="#">Change Password</a></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="box">
                        <div class="box-title">
                          <h3>Bản tin</h3>
                          <a href="#">Edit</a>
                        </div>
                        <div class="box-content">
                          <p>Bạn hiện chưa đăng ký nhận bản tin nào.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="box mt-3">
                    <div class="box-title">
                      <h3>Địa chỉ</h3>
                      <a href="#">Quản lý địa chỉ</a>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <h6>Địa chỉ thanh toán mặc định</h6>
                        <address>
                          Bạn chưa đặt địa chỉ thanh toán mặc định.<br /><a
                            href="#"
                            >Sửa</a
                          >
                        </address>
                      </div>
                      <div class="col-sm-6">
                        <h6>Địa chỉ giao hàng mặc định</h6>
                        <address>
                          Bạn chưa đặt địa chỉ giao hàng mặc định.<br /><a
                            href="#"
                            >Sửa</a
                          >
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="address">
              <div class="row">
                <div class="col-12">
                  <div class="card mt-0">
                    <div class="card-body">
                      <div class="top-sec">
                        <h3>Địa chỉ</h3>
                        <a href="#" class="btn btn-sm btn-solid">+ thêm mới</a>
                      </div>
                      <div class="address-book-section">
                        <div class="row g-4">
                          <div class="select-box active col-xl-4 col-md-6">
                            <div class="address-box">
                              <div class="top">
                                <h6>mark jecno <span>Nhà riêng</span></h6>
                              </div>
                              <div class="middle">
                                <div class="address">
                                  <p>549 Sulphur Springs Road</p>
                                  <p>Downers Grove, IL</p>
                                  <p>60515</p>
                                </div>
                                <div class="number">
                                  <p>
                                    Di động: <span>+91 123 - 456 - 7890</span>
                                  </p>
                                </div>
                              </div>
                              <div class="bottom">
                                <a
                                  href="javascript:void(0)"
                                  data-bs-target="#edit-address"
                                  data-bs-toggle="modal"
                                  class="bottom_btn"
                                  >Sửa</a
                                >
                                <a href="#" class="bottom_btn">xóa</a>
                              </div>
                            </div>
                          </div>
                          <div class="select-box col-xl-4 col-md-6">
                            <div class="address-box">
                              <div class="top">
                                <h6>mark jecno <span>Văn phòng</span></h6>
                              </div>
                              <div class="middle">
                                <div class="address">
                                  <p>549 Sulphur Springs Road</p>
                                  <p>Downers Grove, IL</p>
                                  <p>60515</p>
                                </div>
                                <div class="number">
                                  <p>
                                    Điện thoại:
                                    <span>+91 123 - 456 - 7890</span>
                                  </p>
                                </div>
                              </div>
                              <div class="bottom">
                                <a
                                  href="javascript:void(0)"
                                  data-bs-target="#edit-address"
                                  data-bs-toggle="modal"
                                  class="bottom_btn"
                                  >sửa</a
                                >
                                <a href="#" class="bottom_btn">xóa</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="orders">
              <div class="row">
                <div class="col-12">
                  <div class="card dashboard-table mt-0">
                    <div class="card-body table-responsive-sm">
                      <div class="top-sec">
                        <h3>Đơn hàng</h3>
                      </div>
                      <div class="table-responsive-xl">
                        <table class="table cart-table order-table">
                          <thead>
                            <tr class="table-head">
                              <th scope="col">Hình ảnh</th>
                              <th scope="col">Mã đơn hàng</th>
                              <th scope="col">Thông tin sản phẩm</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Giá</th>
                              <th scope="col">Xem</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/1.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span class="mt-0">#125021</span>
                              </td>
                              <td>
                                <span class="fs-6">Purple polo tshirt</span>
                              </td>
                              <td>
                                <span
                                  class="badge rounded-pill bg-success custom-badge"
                                  >Đã giao hàng</span
                                >
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a href="javascript:void(0)">
                                  <i class="fa fa-eye text-theme"></i>
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/2.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span class="mt-0">#125367</span>
                              </td>
                              <td>
                                <span class="fs-6">Sleevless white top</span>
                              </td>
                              <td>
                                <span
                                  class="badge rounded-pill bg-danger custom-badge"
                                  >Chưa giải quyết</span
                                >
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a href="javascript:void(0)">
                                  <i class="fa fa-eye text-theme"></i>
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/27.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <p>#125948</p>
                              </td>
                              <td>
                                <p class="fs-6">multi color polo tshirt</p>
                              </td>
                              <td>
                                <span
                                  class="badge rounded-pill bg-success custom-badge"
                                  >Shipped</span
                                >
                              </td>
                              <td>
                                <p class="theme-color fs-6">$49.54</p>
                              </td>
                              <td>
                                <a href="javascript:void(0)">
                                  <i class="fa fa-eye text-theme"></i>
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/28.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <p>#127569</p>
                              </td>
                              <td>
                                <p class="fs-6">Candy red solid tshirt</p>
                              </td>
                              <td>
                                <span
                                  class="badge rounded-pill bg-success custom-badge"
                                  >Shipped</span
                                >
                              </td>
                              <td>
                                <p class="theme-color fs-6">$49.54</p>
                              </td>
                              <td>
                                <a href="javascript:void(0)">
                                  <i class="fa fa-eye text-theme"></i>
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/33.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <p>#125753</p>
                              </td>
                              <td>
                                <p class="fs-6">multicolored polo tshirt</p>
                              </td>
                              <td>
                                <span
                                  class="badge rounded-pill bg-secondary custom-badge"
                                  >Canceled</span
                                >
                              </td>
                              <td>
                                <p class="theme-color fs-6">$49.54</p>
                              </td>
                              <td>
                                <a href="javascript:void(0)">
                                  <i class="fa fa-eye text-theme"></i>
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/34.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span>#125021</span>
                              </td>
                              <td>
                                <span class="fs-6">Men's Sweatshirt</span>
                              </td>
                              <td>
                                <span
                                  class="badge rounded-pill bg-secondary custom-badge"
                                  >Canceled</span
                                >
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a href="javascript:void(0)">
                                  <i class="fa fa-eye text-theme"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="wishlist">
              <div class="row">
                <div class="col-12">
                  <div class="card dashboard-table mt-0">
                    <div class="card-body table-responsive-sm">
                      <div class="top-sec">
                        <h3>Yêu thích</h3>
                      </div>
                      <div class="table-responsive-xl">
                        <table class="table cart-table wishlist-table">
                          <thead>
                            <tr class="table-head">
                              <th scope="col">Hình ảnh</th>
                              <th scope="col">Mã đơn hàng</th>
                              <th scope="col">Chi tiết sản phẩm</th>
                              <th scope="col">Giá</th>
                              <th scope="col">Hành động</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/1.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span class="mt-0">#125021</span>
                              </td>
                              <td>
                                <span>Purple polo tshirt</span>
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-xs btn-solid"
                                >
                                  Thêm vào giỏ
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/2.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span class="mt-0">#125367</span>
                              </td>
                              <td>
                                <span>Sleevless white top</span>
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-xs btn-solid"
                                >
                                  Move to Cart
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/27.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span>#125948</span>
                              </td>
                              <td>
                                <span>multi color polo tshirt</span>
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-xs btn-solid"
                                >
                                  Move to Cart
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/28.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span>#127569</span>
                              </td>
                              <td>
                                <span>Candy red solid tshirt</span>
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-xs btn-solid"
                                >
                                  Move to Cart
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/33.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span>#125753</span>
                              </td>
                              <td>
                                <span>multicolored polo tshirt</span>
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-xs btn-solid"
                                >
                                  Move to Cart
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <a href="javascript:void(0)">
                                  <img
                                    src="/public/images/pro3/34.jpg"
                                    class="blur-up lazyloaded"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <span>#125021</span>
                              </td>
                              <td>
                                <span>Men's Sweatshirt</span>
                              </td>
                              <td>
                                <span class="theme-color fs-6">$49.54</span>
                              </td>
                              <td>
                                <a
                                  href="javascript:void(0)"
                                  class="btn btn-xs btn-solid"
                                >
                                  Move to Cart
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="payment">
              <div class="row">
                <div class="col-12">
                  <div class="card mt-0">
                    <div class="card-body">
                      <div class="top-sec">
                        <h3>Thẻ thanh toán</h3>
                        <a href="#" class="btn btn-sm btn-solid">+ Thêm mới</a>
                      </div>
                      <div class="address-book-section">
                        <div class="row g-4">
                          <div class="select-box active col-xl-4 col-md-6">
                            <div class="address-box">
                              <div class="bank-logo">
                                <img
                                  src="/public/images/bank-logo.png"
                                  class="bank-logo"
                                />
                                <img
                                  src="/public/images/visa.png"
                                  class="network-logo"
                                />
                              </div>
                              <div class="card-number">
                                <h6>Số thẻ tín dụng</h6>
                                <h5>6262 6126 2112 1515</h5>
                              </div>
                              <div class="name-validity">
                                <div class="left">
                                  <h6>Họ và tên ghi trên thẻ</h6>
                                  <h5>Mark Jecno</h5>
                                </div>
                                <div class="right">
                                  <h6>hạn sử dụng</h6>
                                  <h5>XX/XX</h5>
                                </div>
                              </div>
                              <div class="bottom">
                                <a
                                  href="javascript:void(0)"
                                  data-bs-target="#edit-address"
                                  data-bs-toggle="modal"
                                  class="bottom_btn"
                                  >sửa</a
                                >
                                <a href="#" class="bottom_btn">xóa</a>
                              </div>
                            </div>
                          </div>
                          <div class="select-box col-xl-4 col-md-6">
                            <div class="address-box">
                              <div class="bank-logo">
                                <img
                                  src="/public/images/bank-logo1.png"
                                  class="bank-logo"
                                />
                                <img
                                  src="/public/images/visa.png"
                                  class="network-logo"
                                />
                              </div>
                              <div class="card-number">
                                <h6>Số thẻ</h6>
                                <h5>6262 6126 2112 1515</h5>
                              </div>
                              <div class="name-validity">
                                <div class="left">
                                  <h6>Họ và tên ghi trên thẻ</h6>
                                  <h5>Mark Jecno</h5>
                                </div>
                                <div class="right">
                                  <h6>Hạn sử dụng</h6>
                                  <h5>XX/XX</h5>
                                </div>
                              </div>
                              <div class="bottom">
                                <a
                                  href="javascript:void(0)"
                                  data-bs-target="#edit-address"
                                  data-bs-toggle="modal"
                                  class="bottom_btn"
                                  >sửa</a
                                >
                                <a href="#" class="bottom_btn">xóa</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile">
              <div class="row">
                <div class="col-12">
                  <div class="card mt-0">
                    <div class="card-body">
                      <div class="dashboard-box">
                        <div class="dashboard-title">
                          <h4>Thông tin</h4>
                          <a class="edit-link" href="#">sửa</a>
                        </div>
                        <div class="dashboard-detail">
                          <ul>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Họ và tên</h6>
                                </div>
                                <div class="right">
                                  <h6>Fashion Store</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Địa chỉ email</h6>
                                </div>
                                <div class="right">
                                  <h6>mark.jecno@gmail.com</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Quốc gia</h6>
                                </div>
                                <div class="right">
                                  <h6>Downers Grove, IL</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Year Established</h6>
                                </div>
                                <div class="right">
                                  <h6>2018</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Total Employees</h6>
                                </div>
                                <div class="right">
                                  <h6>101 - 200 People</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>category</h6>
                                </div>
                                <div class="right">
                                  <h6>clothing</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>street address</h6>
                                </div>
                                <div class="right">
                                  <h6>549 Sulphur Springs Road</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>city/state</h6>
                                </div>
                                <div class="right">
                                  <h6>Downers Grove, IL</h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>zip</h6>
                                </div>
                                <div class="right">
                                  <h6>60515</h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="dashboard-title mt-lg-5 mt-3">
                          <h4>Thông tin đăng nhập</h4>
                          <a class="edit-link" href="#">sửa</a>
                        </div>
                        <div class="dashboard-detail">
                          <ul>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Địa chỉ email</h6>
                                </div>
                                <div class="right">
                                  <h6>
                                    mark.jecno@gmail.com
                                    <a class="edit-link" href="#">sửa</a>
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Số điện thoại.</h6>
                                </div>
                                <div class="right">
                                  <h6>
                                    +01 4485 5454<a class="edit-link" href="#"
                                      >Sửa</a
                                    >
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="details">
                                <div class="left">
                                  <h6>Mật khẩu</h6>
                                </div>
                                <div class="right">
                                  <h6>
                                    *******
                                    <a class="edit-link" href="#">Sửa</a>
                                  </h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="security">
              <div class="row">
                <div class="col-12">
                  <div class="card mt-0">
                    <div class="card-body">
                      <div class="dashboard-box">
                        <div class="dashboard-title">
                          <h4>cài đặt</h4>
                        </div>
                        <div class="dashboard-detail">
                          <div class="account-setting">
                            <h5>Thông báo</h5>
                            <div class="row">
                              <div class="col">
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    value="option1"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios1"
                                  >
                                    Đồng ý nhận thông báo
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios2"
                                    value="option2"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios2"
                                  >
                                    Bật thông báo
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios3"
                                    value="option3"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios3"
                                  >
                                    Nhận thông báo về hoạt động của tôi
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios4"
                                    value="option4"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios4"
                                  >
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="account-setting">
                            <h5>Xóa tài khoản</h5>
                            <div class="row">
                              <div class="col">
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios7"
                                    value="option7"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios7"
                                  >
                                    Đã lâu không sử dụng
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios8"
                                    value="option8"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios8"
                                  >
                                    Muốn chuyển sang tài khoản khác
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="radio_animated form-check-input"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios9"
                                    value="option9"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="exampleRadios9"
                                  >
                                    Lý do khác
                                  </label>
                                </div>
                                <button
                                  type="button"
                                  class="btn btn-solid btn-xs"
                                >
                                  Xóa tài khoản
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
