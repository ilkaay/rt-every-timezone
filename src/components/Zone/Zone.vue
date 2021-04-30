<template>
  <div>
    <div
      v-for="zoneInfo in this.$store.getters.zoneInfos"
      :key="zoneInfo.key"
      class="row p-1 pt-5 mt-3 justify-content-center"
    >
      <zone-info
        :zoneInfoFlag="zoneInfo.flag"
        :zoneInfoCity="zoneInfo.city"
        :zoneInfoGMT="zoneInfo.GMT"
      ></zone-info>
      <zone-days :zoneInfoTimeZone="zoneInfo.timeZone"> </zone-days>
    </div>
  </div>
</template>

<script>
import ZoneInfo from "./ZoneInfo";
import ZoneDays from "./ZoneDays";
export default {
  components: {
    ZoneDays,
    ZoneInfo
  }
};
</script>
