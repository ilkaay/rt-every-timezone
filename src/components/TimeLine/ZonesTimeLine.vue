<template>
  <div
    class="badge overlay"
    @mousedown="dragging = true"
    @mousemove="doDrag"
    @mouseup="dragging = false"
  >
    <div
      :style="{ left: spaceFromLeftForLine + 'px' }"
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
      spaceFromLeftForLine: undefined
    };
  },
  methods: {
    doDrag(mouseEvent) {
      if (this.dragging) {
        const halfOfLocal =
          this.$refs.local.clientWidth / 2 + this.$refs.line.clientWidth * 2;
        this.spaceFromLeftForLine = mouseEvent.pageX - halfOfLocal;
        this.$store.dispatch("updateDragPosition", mouseEvent.pageX);
      }
    }
  },
  mounted() {
    this.spaceFromLeftForLine =
      this.$store.getters.dragPosition - this.$refs.local.clientWidth / 2;
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
  background-color: transparent;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: -webkit-zoom-grabbing;
  z-index: 2;
}
.overlay:hover {
  cursor: pointer;
}
* {
  background-color: #24273f;
}
</style>
