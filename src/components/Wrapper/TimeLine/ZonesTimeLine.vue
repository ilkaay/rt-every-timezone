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
      <div class="mt-2">time</div>
    </div>
    <div ref="line" class="line"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dragging: false,
      spaceFromLeftForLine: window.innerWidth / 2,
      windowWidth: window.innerWidth
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
