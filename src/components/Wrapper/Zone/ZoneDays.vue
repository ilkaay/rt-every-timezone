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
  ) !important;
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
