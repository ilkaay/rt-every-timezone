<template>
  <div>
    <div class="progress-bar d-inline-block">
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
      leftPos: window.innerWidth / 2 + 10
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
      this.index = Math.floor((percent * 384) % 96);
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
