<template>
  <section class="tab-product pt-0 m-0">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <ul class="nav nav-tabs nav-material" id="top-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="top-home-tab"
                data-bs-toggle="tab"
                href="#top-home"
                role="tab"
                aria-selected="true"
                ><i class="icofont icofont-ui-home"></i>Details</a
              >
              <div class="material-border"></div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-top-tab"
                data-bs-toggle="tab"
                href="#top-profile"
                role="tab"
                aria-selected="false"
                ><i class="icofont icofont-man-in-glasses"></i>Specification</a
              >
              <div class="material-border"></div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-top-tab"
                data-bs-toggle="tab"
                href="#top-contact"
                role="tab"
                aria-selected="false"
                ><i class="icofont icofont-contacts"></i>Video</a
              >
              <div class="material-border"></div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="review-top-tab"
                data-bs-toggle="tab"
                href="#top-review"
                role="tab"
                aria-selected="false"
                ><i class="icofont icofont-contacts"></i>Viết nhận xét</a
              >
              <div class="material-border"></div>
            </li>
          </ul>
          <div class="tab-content nav-material" id="top-tabContent">
            <div
              class="tab-pane fade show active"
              id="top-home"
              role="tabpanel"
              aria-labelledby="top-home-tab"
            >
              <div class="product-tab-discription">
                <div class="part">
                  <p>
                    The Model is wearing a white blouse from our stylist's
                    collection, see the image for a mock-up of what the actual
                    blouse would look like.it has text written on it in a black
                    cursive language which looks great on a white color.
                  </p>
                </div>
                <div class="part">
                  <h5 class="inner-title">fabric:</h5>
                  <p>
                    Art silk is manufactured by synthetic fibres like rayon.
                    It's light in weight and is soft on the skin for comfort in
                    summers.Art silk is manufactured by synthetic fibres like
                    rayon. It's light in weight and is soft on the skin for
                    comfort in summers.
                  </p>
                </div>
                <div class="part">
                  <h5 class="inner-title">size & fit:</h5>
                  <p>The model (height 5'8") is wearing a size S</p>
                </div>
                <div class="part">
                  <h5 class="inner-title">Material & Care:</h5>
                  <p>Top fabric: pure cotton</p>
                  <p>Bottom fabric: pure cotton</p>
                  <p>Hand-wash</p>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="top-profile"
              role="tabpanel"
              aria-labelledby="profile-top-tab"
            >
              <p>
                The Model is wearing a white blouse from our stylist's
                collection, see the image for a mock-up of what the actual
                blouse would look like.it has text written on it in a black
                cursive language which looks great on a white color.
              </p>
              <div class="single-product-tables">
                <table>
                  <tbody>
                    <tr>
                      <td>Sleeve Length</td>
                      <td>Sleevless</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td>Round Neck</td>
                    </tr>
                    <tr>
                      <td>Occasion</td>
                      <td>Sports</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>Fabric</td>
                      <td>Polyester</td>
                    </tr>
                    <tr>
                      <td>Fit</td>
                      <td>Regular Fit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="top-contact"
              role="tabpanel"
              aria-labelledby="contact-top-tab"
            >
              <div class="">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BUWzX78Ye_8"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="top-review"
              role="tabpanel"
              aria-labelledby="review-top-tab"
            >
              <form class="theme-form">
                <div class="form-row row">
                  <div class="col-md-12">
                    <div class="media">
                      <label>Đánh giá</label>
                      <div class="media-body ms-3">
                        <div class="rating three-star">
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Họ và tên</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter Your name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="review">Tiêu đề</label>
                    <input
                      type="text"
                      class="form-control"
                      id="review"
                      placeholder="Enter your Review Subjects"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="review">Tiêu đề</label>
                    <textarea
                      class="form-control"
                      placeholder="Wrire Your Testimonial Here"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-solid" type="submit">
                      Gửi nhận xét
                    </button>
                  </div>
                </div>
              </form>
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
