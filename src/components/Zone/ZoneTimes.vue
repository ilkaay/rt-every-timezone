<template>
  <div>
    <div
      v-for="index in 96"
      :key="index"
      class="progress-bar col d-inline-block zoneTime"
      style="width: 1.0416%;"
      role="progressbar"
    >
      {{ computedCount(index - 1) }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment-timezone";
export default {
  props: ["zoneInfoTimeZone"],
  methods: {
    computedCount(index) {
      const now = moment(this.$store.getters.startingDate).utc(
        this.zoneInfoTimeZone
      );
      return moment
        .unix(now.unix() + index * 60 * 15)
        .tz(this.zoneInfoTimeZone)
        .format("HH:mm");
    }
  }
};
</script>

<style scoped>
.zoneTime {
  font-size: 1.5rem;
  color: transparent;
}
.zoneTime:hover {
  color: black;
}
</style>
