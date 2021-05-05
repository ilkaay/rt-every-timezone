<template>
  <div
    :style="{ left: slideLeft + 'px' }"
    style="position:relative; display: flex; justify-content: space-evenly;"
  >
    <div
      v-for="index in 6"
      ref="day"
      :key="index"
      class="rounded-pill text-center dafault"
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
    this.$store.dispatch("updateDragPosition", this.dragPosition + 0.01);
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
          this.$refs.day[index].classList.remove("dafault");
          this.$refs.day[index].classList.add("active");
        } else {
          this.$refs.day[index].classList.remove("active");
          this.$refs.day[index].classList.add("dafault");
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
.active {
  background: linear-gradient(
    to right,
    #5485b1 0%,
    #5485b1 24.99%,
    #3cafc5 25%,
    #3cafc5 32.99%,
    #55c8e4 33%,
    #55c8e4 74.99%,
    #3cafc5 75%,
    #3cafc5 90.99%,
    #5485b1 91%,
    #5485b1 100%
  );
}
.dafault {
  background: linear-gradient(
    to right,
    #4b4c4d 0%,
    #4b4c4d 24.99%,
    #575b5c 25%,
    #575b5c 32.99%,
    #6b7071 33%,
    #6b7071 74.99%,
    #575b5c 75%,
    #575b5c 90.99%,
    #4b4c4d 91%,
    #4b4c4d 100%
  );
}
</style>
