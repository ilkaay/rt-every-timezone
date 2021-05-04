<template>
  <div class="row">
    <div
      v-for="index in 3"
      :key="index"
      class="col progress bg-primary rounded-pill h-100"
    >
      <zone-date
        class="text-white text-center m-1 w-100"
        :date="generateNextDayDate(index - 2)"
      ></zone-date>
    </div>
  </div>
</template>

<script>
//  todo put additional 2 divs for the day before and day next
// todo 3*div = screen_width but you will have 5 divs
// todo calculate starting time like zone-times
// todo use calculated time for rendering divs
// todo update left position of div with using the time that you have calculated
import ZoneDate from "./ZoneDate";
import moment from "moment";
export default {
  components: {
    ZoneDate
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
