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
  props: ["zoneInfoTimeZone", "now"],
  computed: {
    computedCount() {
      return moment
        .unix(this.now.unix() + this.index * 60 * 15)
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
      const eachPercent = 1 / 384;
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
