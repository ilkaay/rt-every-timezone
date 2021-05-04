<template>
  <div
    style="position:relative; display: flex; flex-direction: row; justify-content: space-evenly; "
  >
    <div
      v-for="index in 6"
      :key="index"
      class="bg-primary rounded-pill text-center"
      :style="{ width: 300 + 'px' }"
      style="position: relative; flex-shrink: 0; flex-grow: 0;"
    >
      <zone-date
        class="text-white m-1 w-100"
        :date="generateNextDayDate(index - 3)"
      ></zone-date>
    </div>
  </div>
</template>

<script>
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
