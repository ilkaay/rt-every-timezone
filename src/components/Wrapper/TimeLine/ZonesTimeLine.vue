<template>
  <div
    ref="zoneTimeLineWrapper"
    :style="{ left: spaceFromLeftForLine + 'px' }"
    class="overlay badge mt-2"
    @mousedown="dragging = true"
    @mousemove="doDrag"
    @mouseup="dragging = false"
  >
    <div class="d-inline-block rounded-3 p-2">
      <div>Your local time</div>
      <div class="mt-2">{{ localTime }}</div>
    </div>
    <div class="line"></div>
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
        this.spaceFromLeftForLine = mouseEvent.pageX - this.windowWidth;
        this.$store.dispatch("updateDragPosition", this.spaceFromLeftForLine);
      }
    }
  },
  computed: {
    width() {
      return this.$store.getters.windowWidth;
    },
    dragPosition() {
      return this.$store.getters.dragPosition;
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
      const updatedTimeStamp =
        moment(startingDate)
          .parseZone()
          .unix() +
        quarter * 60 * 15;
      const updatedTime = moment.unix(updatedTimeStamp);
      this.localTime = updatedTime.format("HH:mm");
    }
  }
};
</script>
<style scoped>
.overlay {
  background-color: transparent;
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  z-index: 3;
}
.overlay:hover {
  cursor: pointer;
}
.line {
  width: 0.2rem;
  position: absolute;
  left: 50%;
  height: 100%;
}
* {
  background-color: #0466c8;
}
</style>
