<template>
  <div>
    <div
      v-for="zoneInfo in this.$store.getters.zoneInfos"
      :key="zoneInfo.key"
      class="row p-1 mt-2 justify-content-center"
    >
      <zone-info
        :zoneInfoFlag="zoneInfo.flag"
        :zoneInfoCity="zoneInfo.city"
        :zoneInfoGMT="zoneInfo.GMT"
      ></zone-info>
      <zone-time
        :zoneInfoTimeZone="zoneInfo.timeZone"
        :now="timeZoneNow(zoneInfo.timeZone)"
      ></zone-time>
      <zone-days
        :now="timeZoneNow(zoneInfo.timeZone)"
        :zoneInfoTimeZone="zoneInfo.timeZone"
      >
      </zone-days>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ZoneInfo from "./ZoneInfo";
import ZoneDays from "./ZoneDays";
import ZoneTime from "./ZoneTime";
export default {
  components: {
    ZoneDays,
    ZoneInfo,
    ZoneTime
  },
  methods: {
    timeZoneNow(zoneInfoTimeZone) {
      return moment(this.$store.getters.startingDate).utc(zoneInfoTimeZone);
    }
  }
};
</script>
