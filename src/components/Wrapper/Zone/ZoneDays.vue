<template>
  <div class="days mt-2" :style="{ left: slideLeft + 'px' }">
    <div
      ref="day"
      class="day default rounded-pill"
      v-for="index in 6"
      :key="index"
    >
      <zone-date
        class="text-white w-100"
        :date="generateDayDate(index - 3)"
      ></zone-date>
    </div>
  </div>
</template>

<script>
import ZoneDate from "./ZoneDate";
import moment from "moment";
export default {
  props: ["timeZone"],
  components: { ZoneDate },
  methods: {
    generateDayDate(index) {
      return moment().add(index, "days")._d;
    }
  },
  computed: {
    slideLeft() {
      const timestampOfStartingDate = moment.unix(
        moment(this.$store.getters.startingDate).utc(this.timeZone)
      );
      const utcOffsetInHours =
        moment.tz.zone(this.timeZone).utcOffset(timestampOfStartingDate) / 60;
      return utcOffsetInHours * (this.$store.getters.windowWidth / 96);
    },
    dragPosition() {
      return this.$store.getters.dragPosition;
    }
  },
  watch: {
    dragPosition(dragPosition) {
      for (const day of this.$refs.day) {
        dragPosition + window.innerWidth <= day.getClientRects()[0].right &&
        dragPosition + window.innerWidth >= day.getClientRects()[0].left
          ? day.classList.add("active")
          : day.classList.remove("active");
      }
    }
  }
};
</script>

<style scoped>
.days {
  position: relative;
  display: flex;
  justify-content: space-evenly;
}
.day {
  flex-shrink: 0;
  width: 25vw;
  text-align: center;
}
.active {
  background: linear-gradient(
    to right,
    #2d46c1 0%,
    #2d46c1 24.99%,
    #0085ff 25%,
    #0085ff 32.99%,
    #199eff 33%,
    #199eff 74.99%,
    #0085ff 75%,
    #0085ff 90.99%,
    #2d46c1 91%,
    #2d46c1 100%
  ) !important;
}
.default {
  background: linear-gradient(
    to right,
    #24273f 0%,
    #24273f 24.99%,
    #30364e 25%,
    #30364e 32.99%,
    #444b63 33%,
    #444b63 74.99%,
    #30364e 75%,
    #30364e 90.99%,
    #24273f 91%,
    #24273f 100%
  );
}
</style>
