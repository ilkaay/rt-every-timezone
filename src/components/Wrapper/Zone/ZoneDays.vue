<template>
  <div class="days mt-2" :style="{ left: slideLeft + 'px' }">
    <div
      ref="day"
      class="day dafault rounded-pill"
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
  props: ["startingDate", "timeZone"],
  components: { ZoneDate },
  mounted() {
    this.$store.dispatch("updateDragPosition", this.dragPosition + 0.01);
  },
  methods: {
    generateDayDate(index) {
      return moment().add(index, "days")._d;
    }
  },
  computed: {
    slideLeft() {
      const timestampOfStartingDate = moment.unix(this.startingDate);
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
        dragPosition < day.getClientRects()[0].right &&
        dragPosition >= day.getClientRects()[0].left
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
.dafault {
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
