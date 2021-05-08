<template>
  <div
    :style="{ left: position + 'px' }"
    style="position: absolute; height: 100%; z-index: 2;"
    class="badge mt-2"
  >
    <div class="time d-inline-block rounded-3 p-2">
      <div>current local time</div>
      <div class="mt-2">{{ time }}</div>
    </div>
    <div class="line" ref="line"></div>
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
  height: 100%;
  z-index: 1;
  background-color: #7594e4;
}
.time {
  background-color: #7594e4;
}
</style>
