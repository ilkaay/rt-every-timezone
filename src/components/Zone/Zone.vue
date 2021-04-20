<template>
  <div>
    <div
      v-for="zoneInfo in this.$store.getters.zoneInfos"
      :key="zoneInfo.key"
      class="row row-no-padding p-1 mt-3 justify-content-center"
    >
      <zone-info
        :zoneInfoFlag="zoneInfo.flag"
        :zoneInfoCity="zoneInfo.city"
        :zoneInfoDetail="zoneInfo.detail"
      ></zone-info>
      <div v-for="index in 4" :key="index" class="col">
        <zone-day :date="generateNextDayDate(index - 1)"></zone-day>
      </div>
    </div>
  </div>
</template>

<script>
import ZoneDay from "./ZoneDay";
import ZoneInfo from "./ZoneInfo";
import ZoneTime from "./ZoneTime";
import moment from "moment";

export default {
  components: {
    ZoneDay,
    ZoneInfo,
    ZoneTime
  },
  methods: {
    generateNextDayDate(count) {
      return moment().add(count, "days")._d;
    }
  }
};
</script>

<style scoped>
.row-no-padding {
  margin-left: 0;
  margin-right: 0;
}

.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
