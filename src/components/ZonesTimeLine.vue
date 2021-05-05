<template>
  <div
    class="badge zoneTimesLine bg-transparent overlay"
    @mousedown="dragging = true"
    @mousemove="doDrag"
    @mouseup="dragging = false"
  >
    <div
      :style="{ left: lineLocation + 'px' }"
      class="mt-2 p-2 rounded-3 d-inline-block"
      style="position: absolute;"
    >
      <div>
        <div ref="local">your local time</div>
        <div class="mt-2">time</div>
      </div>
      <div ref="line" class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dragging: false,
      lineLocation: window.innerWidth / 2 - 63
    };
  },
  methods: {
    doDrag(event) {
      if (this.dragging) {
        this.lineLocation =
          event.pageX -
          this.$refs.local.clientWidth / 2 -
          this.$refs.line.clientWidth * 2;
        console.log(this.$refs.local.clientWidth);
        this.$store.dispatch("updateDragPosition", event.pageX);
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
  height: 162rem;
}
.overlay {
  position: absolute;
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
  background-color: #24273f;
}
</style>
