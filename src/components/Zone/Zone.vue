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
      <zone-times :zoneInfoTimeZone="zoneInfo.timeZone"></zone-times>
      <zone-days> </zone-days>
    </div>
  </div>
</template>

<script>
import ZoneInfo from "./ZoneInfo";
import ZoneDays from "./ZoneDays";
import ZoneTimes from "./ZoneTimes";
export default {
  components: {
    ZoneDays,
    ZoneInfo,
    ZoneTimes
  }
};
</script>
