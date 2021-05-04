<template>
  <div
    :style="{ left: slideLeft + 'px' }"
    style="position:relative; display: flex; justify-content: space-evenly;"
  >
    <div
      v-for="index in 6"
      :key="index"
      class="bg-primary rounded-pill text-center"
      :style="{ width: 25 + 'vw' }"
      style=" flex-shrink: 0; "
    >
      <zone-date
        class="text-white m-1 w-100"
        :date="generateNextDayDate(index - 3)"
      ></zone-date>
    </div>
  </div>
</template>

<script>
import ZoneDate from "./ZoneDate";
import moment from "moment";
export default {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  components: {
    ZoneDate
  },
  props: ["now", "zoneInfoTimeZone"],
  methods: {
    generateNextDayDate(count) {
      return moment().add(count, "days")._d;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    slideLeft() {
      const timestampOfNow = moment.unix(this.now.tz(this.zoneInfoTimeZone));
      const offsetOfUtcInHours =
        moment.tz.zone(this.zoneInfoTimeZone).utcOffset(timestampOfNow) / 60;

      return offsetOfUtcInHours * (this.windowWidth / 96);
    },
    computedWindowWidth() {
      console.log(window.innerWidth);
      return window.innerWidth;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style scoped>
.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
