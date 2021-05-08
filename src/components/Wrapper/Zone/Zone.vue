<template>
  <div class="zone">
    <div
      v-for="zoneInfo in this.$store.getters.zoneInfos"
      :key="zoneInfo.key"
      class="mt-3"
    >
      <zone-info
        :flag="zoneInfo.flag"
        :city="zoneInfo.city"
        :GMT="zoneInfo.GMT"
      ></zone-info>
      <zone-time
        :timeZone="zoneInfo.timeZone"
        :startingDate="timeZoneStartingDate(zoneInfo.timeZone)"
      ></zone-time>
      <zone-days
        :timeZone="zoneInfo.timeZone"
        :startingDate="timeZoneStartingDate(zoneInfo.timeZone)"
      >
      </zone-days>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ZoneInfo from "./ZoneInfo";
import ZoneTime from "./ZoneTime";
import ZoneDays from "./ZoneDays";
export default {
  components: {
    ZoneDays,
    ZoneInfo,
    ZoneTime
  },
  methods: {
    timeZoneStartingDate(timeZone) {
      return moment(this.$store.getters.startingDate).utc(timeZone);
    }
  }
};
</script>

<style scoped>
.zone {
  margin: 5rem 0 1.5rem 0;
}
</style>
