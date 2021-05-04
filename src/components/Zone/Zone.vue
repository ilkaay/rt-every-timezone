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
      <zone-time :zoneInfoTimeZone="zoneInfo.timeZone"></zone-time>
      <zone-days> </zone-days>
    </div>
  </div>
</template>

<script>
// todo if drag position < 50%, show info in the right, else show it in the left. (v-if with two zone-info)
import ZoneInfo from "./ZoneInfo";
import ZoneDays from "./ZoneDays";
import ZoneTime from "./ZoneTime";
export default {
  components: {
    ZoneDays,
    ZoneInfo,
    ZoneTime
  }
};
</script>
