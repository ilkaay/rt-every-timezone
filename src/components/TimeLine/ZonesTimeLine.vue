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
      <div>your local time</div>
      <div class="mt-2">time</div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dragging: false,
      spaceFromLeftForLine: undefined
    };
  },
  methods: {
    doDrag(mouseEvent) {
      if (this.dragging) {
        const halfOfLocal = this.$refs.zoneTimeLine.clientWidth / 2;
        this.spaceFromLeftForLine = mouseEvent.pageX - halfOfLocal;
        this.$store.dispatch("updateDragPosition", mouseEvent.pageX);
      }
    }
  },
  mounted() {
    this.spaceFromLeftForLine =
      this.$store.getters.dragPosition -
      this.$refs.zoneTimeLine.clientWidth / 2;
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
  z-index: 2;
}
.overlay:hover {
  cursor: pointer;
}
* {
  background-color: #24273f;
}
</style>
