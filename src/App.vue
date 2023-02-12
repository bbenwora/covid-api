<template>
  <div class="container">
    <div class="row row-bg">
      <div class="col-md-3">
        <div class="d-flex flex-column justify-content-cener py-5">
          <img
            src="https://sv1.picz.in.th/images/2023/02/12/LAfkzq.png"
            class="web-logo mx-auto"
            alt="Image"
          />
        </div>
      </div>
      <div class="col-md-9 d-flex">
        <h3 class="text-center my-auto">รายงาน Covid 19 ย้อนหลังในประเทศไทย</h3>
      </div>
    </div>

    <div class="row g-3 mt-3" v-if="isApiLoading == false">
      <div v-for="(data, i) in covidData" :key="i">
        <div class="card">
          <div class="card-body card-bg">
            <h3>รายงานวันที่ {{ data.publishdate }}</h3>
            <div class="row">
              <div class="col-4">ผู้ติดเชื้อรวม : {{ data.totalCases }}</div>
              <div class="col-4">
                ผู้เสียชีวิตทั้งหมด : {{ data.totalDeaths }}
              </div>
              <div class="col-4">ปิดเคสทั้งหมด : {{ data.totalRecovered }}</div>
              <div class="col-4"></div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-center mt-3" v-else>
      <img
        src="https://sv1.picz.in.th/images/2023/02/12/LAc0DW.gif"
        alt="loading"
      />
      <br />
      กำลังโหลดข้อมูล.......
    </h4>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";

const isApiLoading = ref(true);
const covidData = ref([]);
const apiUrl = ref(
  "https://api.codename-t.com/proxy?url=https://covid19.traffy.in.th/api/state-covid19"
);
axios
  .get(apiUrl.value)
  .then((res) => {
    covidData.value = res.data.contents.results;
    isApiLoading.value = false;
    console.log(covidData.value);
  })
  .catch((err) => console.log(err));
</script>
<style scoped>
.web-logo {
  width: 140px;
  height: 140px;
}

.container {
  max-width: 1000px;
}

.row-bg {
  background: url("https://sv1.picz.in.th/images/2023/02/12/LAZrSZ.png")
    no-repeat;
  background-size: cover;
}

.card-bg {
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://sv1.picz.in.th/images/2023/02/12/LAZRtW.png") no-repeat;
  background-position: right;
}
</style>
