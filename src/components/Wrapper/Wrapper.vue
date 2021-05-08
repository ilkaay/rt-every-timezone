<template>
  <div class="wrapper">
    <zones-time-line></zones-time-line>
    <current-time-line></current-time-line>
    <zone></zone>
  </div>
</template>

<script>
import Zone from "./Zone/Zone";
import ZonesTimeLine from "./TimeLine/ZonesTimeLine";
import CurrentTimeLine from "./TimeLine/CurrentTimeLine";

export default {
  components: {
    Zone,
    ZonesTimeLine,
    CurrentTimeLine
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.$store.dispatch("updateWindowWidth", window.innerWidth);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style scoped>
.wrapper {
  user-select: none;
  overflow: hidden;
  position: relative;
}
</style>
