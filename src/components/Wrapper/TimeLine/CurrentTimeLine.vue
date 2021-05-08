<template>
  <div
    :style="{ left: position + 'px' }"
    class="currentTimeWrapper badge  mt-2"
    ref="currentTimeWrapper"
  >
    <div class="time d-inline-block rounded-3 p-2">
      <div>current local time</div>
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
      position: undefined,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    this.setPosition();
  },
  methods: {
    setPosition() {
      const timeStampOfStartingDate = moment(this.$store.getters.startingDate)
        .parseZone()
        .unix();
      const timeStampOfNow = moment().unix();
      const differenceTimeStamp = timeStampOfNow - timeStampOfStartingDate;
      const differenceTimeStampInQuarter = differenceTimeStamp / 60 / 15;
      const eachQuarterWidth = this.windowWidth / 384;
      const eachDayWidth = this.windowWidth / 4;
      const wrapperWidth = this.$refs.currentTimeWrapper.clientWidth / 2;
      this.position =
        differenceTimeStampInQuarter * eachQuarterWidth +
        eachDayWidth -
        wrapperWidth;
      this.$store.dispatch("updateCurrentPosition", this.position);
    }
  },
  computed: {
    currentTime() {
      return moment();
    },
    width() {
      return this.$store.getters.windowWidth;
    }
  },
  watch: {
    currentTime(time) {
      this.time = time.format("HH:mm");
      this.setPosition();
    },
    width(width) {
      this.position = this.position * (width / this.windowWidth);
      this.windowWidth = width;
      this.$store.dispatch(
        "updateCurrentPosition",
        this.position + this.$refs.currentTimeWrapper.clientWidth / 2
      );
    }
  }
};
</script>
<style scoped>
.currentTimeWrapper {
  position: absolute;
  height: 100%;
  z-index: 2;
  width: 100%;
}
.line {
  width: 0.2rem;
  position: absolute;
  left: 50%;
  height: 100%;
  z-index: 1;
  background-color: #023e8a;
}
.time {
  background-color: #023e8a;
}
</style>
