<template>
  <div class="row">
    <div v-for="index in 3" :key="index" class="col">
      <zone-times></zone-times>
      <div class="progress rounded-pill h-100">
        <div
          class="progress-bar beforeDawn p-2"
          role="progressbar"
          style="width: 24%"
        ></div>
        <div
          class="progress-bar dawnBeforeNoon p-2"
          role="progressbar"
          style="width: 7%"
        ></div>
        <div
          class="progress-bar noon p-2"
          role="progressbar"
          style="width: 42%"
        >
          <zone-date
            class="text-white"
            :date="generateNextDayDate(index - 2)"
          ></zone-date>
        </div>
        <div
          class="progress-bar dawnAfterNoon p-2"
          role="progressbar"
          style="width: 17%"
        ></div>
        <div
          class="progress-bar afterDawn p-2"
          role="progressbar"
          style="width: 10%"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import ZoneDate from "./ZoneDate";
import ZoneTimes from "./ZoneTimes";
import moment from "moment";
export default {
  components: {
    ZoneDate,
    ZoneTimes
  },
  methods: {
    generateNextDayDate(count) {
      return moment().add(count, "days")._d;
    }
  }
};
</script>

<style scoped>
.beforeDawn {
  /* background: linear-gradient(to right, #03045e 50%, #ff9933 100%); */
  background: linear-gradient(to right, #003399 0%, #0000ff 100%);
}

.afterDawn {
  /* background: linear-gradient(to right, #ff9933 0%, #03045e 50%); */
  background: linear-gradient(to right, #0000ff 0%, #003399 80%);
}

.dawnBeforeNoon {
  /* background: linear-gradient(to left, #ffcc66 0%, #ff9933 50%); */
  background: linear-gradient(to right, #3333ff 0%, #0000ff 50%);
}

.dawnAfterNoon {
  /* background: linear-gradient(to left, #ff9933 0%, #ffcc66 50%); */
  background: linear-gradient(to right, #0000ff 0%, #3333ff 50%);
}

.noon {
  /* background-color: #ffcc66; */
  background-color: #3333ff;
}

.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
