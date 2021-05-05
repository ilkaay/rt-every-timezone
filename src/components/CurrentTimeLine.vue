<template>
  <div
    class="badge mt-5 bg-transparent overlay"
    :style="{ left: position + 'px' }"
  >
    <div class="p-2 rounded-3 d-inline-block">
      <div>current local time</div>
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
      position: 0
    };
  },
  computed: {
    dragPosition() {
      return this.$store.getters.startingDate;
    }
  },
  watch: {
    dragPosition(val) {
      console.log(val);
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
  z-index: 1;
}
.overlay {
  position: absolute;
  top: 4%;
  left: 0;
}

* {
  background-color: #7594e4;
  user-select: none;
}
</style>
