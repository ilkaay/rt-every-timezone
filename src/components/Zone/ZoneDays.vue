<template>
  <div class="row">
    <div v-for="index in 3" :key="index" class="col">
      <div class="progress bg-primary rounded-pill h-100">
        <zone-date
          class="text-white text-center m-1 w-100"
          :date="generateNextDayDate(index - 2)"
        ></zone-date>
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
.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
