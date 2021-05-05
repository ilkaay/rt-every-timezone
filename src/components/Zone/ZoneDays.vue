<template>
  <div
    :style="{ left: slideLeft + 'px' }"
    style="position:relative; display: flex; justify-content: space-evenly;"
  >
    <div
      v-for="index in 6"
      ref="day"
      :key="index"
      class="rounded-pill text-center"
      :class="{ 'bg-primary': selected, 'bg-danger': !selected }"
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
      windowWidth: window.innerWidth,
      selected: false
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
      return window.innerWidth;
    },
    dragPosition() {
      return this.$store.getters.dragPosition;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  watch: {
    dragPosition(val) {
      for (let index = 0; index < this.$refs.day.length; index++) {
        if (
          val < this.$refs.day[index].getClientRects()[0].right &&
          val > this.$refs.day[index].getClientRects()[0].left
        ) {
          this.$refs.day[index].classList.remove("bg-danger");
          this.$refs.day[index].classList.add("bg-primary");
        } else {
          this.$refs.day[index].classList.remove("bg-primary");
          this.$refs.day[index].classList.add("bg-danger");
        }
      }
    }
  }
};
</script>

<style scoped>
.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
