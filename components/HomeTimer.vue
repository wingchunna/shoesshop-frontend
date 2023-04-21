<template>
  <section class="game-banner">
    <div class="container">
      <div class="row banner-timer">
        <div class="col-md-6">
          <div class="banner-text">
            <h2>Save <span>30% off</span> Nike Sneakers</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="timer-box">
            <vue-countdown
              :time="30 * 24 * 60 * 60 * 1000"
              v-slot="{ days, hours, minutes, seconds }"
            >
              <div class="datetime">
                {{ days }}
                <div>Ngày</div>
              </div>
              <span class="pointer">:</span>
              <div class="datetime">
                {{ hours }}
                <div>Giờ</div>
              </div>
              <span class="pointer">:</span>
              <div class="datetime">
                {{ minutes }}
                <div>Phút</div>
              </div>
              <span class="pointer">:</span>
              <div class="datetime">
                {{ seconds }}
                <div>Giây</div>
              </div>
              <br />
            </vue-countdown>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";
</script>

<style>
.timer-box {
  margin-top: 20px;
  height: 70%;
  width: 80%;
  color: #ef532c;
  align-content: center;
  background-color: rgba(21, 20, 20, 0.644);
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;

  vertical-align: top;
}
.datetime {
  display: inline-block;
  margin: 10px;
}
</style>
