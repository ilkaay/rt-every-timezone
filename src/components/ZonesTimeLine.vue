<template>
  <div
    class="badge mt-5 zoneTimesLine bg-transparent overlay"
    v-drag:x
    @mousedown="dragging = true"
    @mousemove="doDrag"
    @mouseup="dragging = false"
  >
    <div class="p-2 rounded-3 d-inline-block">
      <div>your local time</div>
      <div class="mt-2">time</div>
    </div>
    <div class="w-100">
      <div class="line" ref="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dragging: false,
      x: ""
    };
  },
  methods: {
    doDrag(event) {
      if (this.dragging) {
        this.x = event.pageX;
        const lineLocation = this.$refs.line.getClientRects()[0];
        this.$store.dispatch(
          "updateDragPosition",
          (lineLocation.left + lineLocation.right) / 2
        );
      }
    }
  }
};
</script>
<style scoped>
.line {
  width: 0.2rem;
  position: absolute;
  left: 50%;
  height: 175rem;
}
.overlay {
  position: absolute;
  top: 4%;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: -webkit-zoom-grabbing;
  z-index: 2;
}
.zoneTimesLine:hover {
  cursor: pointer;
}
* {
  background-color: #1c2c54;
  user-select: none;
}
</style>
