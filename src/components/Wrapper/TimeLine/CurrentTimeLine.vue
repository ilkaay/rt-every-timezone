<template>
  <div
    :style="{ left: spaceFromLeftForLine + 'px' }"
    class="currentTimeLineWrapper badge mt-2"
    ref="currentTimeLineWrapper"
  >
    <div class="time d-inline-block rounded-3 p-2">
      <div>Current local time</div>
      <div class="mt-2">{{ time }}</div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      time: moment().format("HH:mm"),
      spaceFromLeftForLine: undefined,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    this.setSpaceFromLeftForLine();
  },
  methods: {
    setSpaceFromLeftForLine() {
      const timeStampOfStartingDate = moment(this.$store.getters.startingDate)
        .parseZone()
        .unix();
      const timeStampOfNow = moment().unix();
      const differenceTimeStamp = timeStampOfNow - timeStampOfStartingDate;
      const differenceTimeStampInQuarter = differenceTimeStamp / 60 / 15;
      const eachDayWidth = this.windowWidth / 4;
      const eachQuarterWidth = this.windowWidth / 384;
      this.spaceFromLeftForLine =
        differenceTimeStampInQuarter * eachQuarterWidth +
        eachDayWidth -
        this.windowWidth;
      this.$store.dispatch("updateDragPosition", this.spaceFromLeftForLine);
    }
  },
  computed: {
    width() {
      return this.$store.getters.windowWidth;
    }
  },
  watch: {
    width(width) {
      this.spaceFromLeftForLine =
        this.spaceFromLeftForLine * (width / this.windowWidth);
      this.windowWidth = width;
    }
  }
};
</script>
<style scoped>
.currentTimeLineWrapper {
  background-color: transparent;
  position: absolute;
  height: 100%;
  z-index: 2;
  width: 200%;
}
.line {
  width: 0.2rem;
  position: absolute;
  left: 50%;
  height: 100%;
  z-index: 1;
}
* {
  background-color: #023e8a;
}
</style>
