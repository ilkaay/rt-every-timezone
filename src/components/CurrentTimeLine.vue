<template>
  <div
    class="badge bg-transparent mt-2"
    :style="{ left: currentPosition + 'px' }"
    style="position: relative;"
  >
    <div class="p-2 rounded-3 d-inline-block">
      <div>current local time</div>
      <div class="mt-2">{{ time }}</div>
    </div>
    <div class="w-100">
      <div class="line" ref="line"></div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      time: moment().format("HH:mm")
    };
  },
  computed: {
    currentPosition() {
      return this.$store.getters.currentPosition;
    },
    currentTime() {
      return moment().format("HH:mm");
    }
  },
  watch: {
    currentTime(val) {
      this.time = val;
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
  z-index: 1;
}
* {
  background-color: #7594e4;
}
</style>
