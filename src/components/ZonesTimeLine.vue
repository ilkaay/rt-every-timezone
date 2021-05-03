<template>
  <div
    class="badge mt-5 mx-auto rounded-pill zoneTimesLine"
    style="position: relative; cursor: -webkit-zoom-grabbing;"
    v-drag:x
    @mousedown="dragging = true"
    @mousemove="doDrag"
    @mouseup="dragging = false"
  >
    <div class="p-3 bg-transparent">your local time</div>
    <div class="line" ref="line"></div>
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
        console.log((lineLocation.left + lineLocation.right) / 2);
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
  height: 3075px;
}
.zoneTimesLine:hover {
  cursor: pointer;
}
* {
  background-color: #1c2c54;
  user-select: none;
}
</style>
