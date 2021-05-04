<template>
  <div>
    <div class="progress-bar col d-inline-block bg-transparent">
      <span
        ref="timeSpan"
        class="text-dark"
        style="position:absolute"
        :style="{ left: leftPos + 'px' }"
        >{{ computedCount }}</span
      >
      <br />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment-timezone";
export default {
  data() {
    return {
      index: 0,
      leftPos: 0
    };
  },
  props: ["zoneInfoTimeZone"],
  computed: {
    computedCount() {
      const now = moment(this.$store.getters.startingDate).utc(
        this.zoneInfoTimeZone
      );
      return moment
        .unix(now.unix() + this.index * 60 * 15)
        .tz(this.zoneInfoTimeZone)
        .format("HH:mm");
    },
    dragPosition() {
      return this.$store.getters.dragPosition;
    }
  },
  watch: {
    dragPosition(positionOfLine) {
      this.leftPos = positionOfLine + 10;
      const percent = positionOfLine / window.innerWidth;
      const eachPercent = 1 / 288;
      this.index = Math.floor((percent / eachPercent) % 96);
    }
  }
};
</script>

<style scoped>
.zoneTime {
  font-size: 1.5rem;
  color: black;
}
</style>
