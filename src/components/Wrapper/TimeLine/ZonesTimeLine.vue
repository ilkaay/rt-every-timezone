<template>
  <div
    ref="zoneTimeLine"
    :style="{ left: spaceFromLeftForLine + 'px' }"
    class="badge overlay mt-2"
    @mousedown="dragging = true"
    @mousemove="doDrag"
    @mouseup="dragging = false"
  >
    <div class="d-inline-block rounded-3 p-2">
      <div>Your local time</div>
      <div class="mt-2">{{ localTime }}</div>
    </div>
    <div ref="line" class="line"></div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      dragging: false,
      spaceFromLeftForLine: window.innerWidth / 2,
      windowWidth: window.innerWidth,
      localTime: moment().format("HH:mm")
    };
  },
  methods: {
    doDrag(mouseEvent) {
      if (this.dragging) {
        const halfOfLocal = this.$refs.zoneTimeLine.clientWidth / 2;
        this.spaceFromLeftForLine = mouseEvent.pageX - halfOfLocal;
        this.$store.dispatch(
          "updateDragPosition",
          mouseEvent.pageX - halfOfLocal
        );
      }
    }
  },
  computed: {
    width() {
      return this.$store.getters.windowWidth;
    },
    dragPosition() {
      return this.$store.getters.dragPosition;
    },
    quarter() {
      return this.$store.getters.quarter;
    }
  },
  watch: {
    width(width) {
      this.spaceFromLeftForLine =
        this.spaceFromLeftForLine * (width / this.windowWidth);
      this.windowWidth = width;
      this.$store.dispatch("updateDragPosition", this.spaceFromLeftForLine);
    },
    dragPosition(dragPosition) {
      this.spaceFromLeftForLine = dragPosition;
      const quarter = this.$store.getters.quarter;
      if (!quarter) {
        return;
      }
      const startingDate = this.$store.getters.startingDate;
      const updatedUnix =
        moment(startingDate)
          .parseZone()
          .unix() +
        quarter * 60 * 15;
      const updatedTime = moment.unix(updatedUnix);
      console.log("updated unix: ", updatedUnix);
      console.log("updated time: ", updatedTime);
      this.localTime = updatedTime.format("HH:mm");
    }
  }
};
</script>
<style scoped>
.line {
  width: 0.2rem;
  position: absolute;
  left: 50%;
  height: 100%;
}
.overlay {
  background-color: transparent;
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  z-index: 10;
}
.overlay:hover {
  cursor: pointer;
}
* {
  background-color: #0466c8;
}
</style>
