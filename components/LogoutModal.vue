<template>
  <div class="modal logout-modal fade" id="logout" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Đăng xuất</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">Bạn muốn đăng xuất ?</div>
        <div class="modal-footer">
          <a href="#" class="btn btn-dark btn-custom" data-bs-dismiss="modal"
            >no</a
          >
          <a href="index.html" class="btn btn-solid btn-custom">yes</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
