<template>
  <div>
    <span
      style="position: absolute;"
      :style="{ left: dragPosition + 15 + 'px' }"
    >
      {{ zoneTime }}
    </span>
    <br />
  </div>
</template>

<script>
import moment from "moment";
import "moment-timezone";
export default {
  props: ["timeZone", "startingDate"],
  computed: {
    zoneTime() {
      const quarter = this.$store.getters.quarter;
      const updatedUnix = this.startingDate.unix() + quarter * 60 * 15;
      const updatedTime = moment.unix(updatedUnix).tz(this.timeZone);
      return updatedTime.format("HH:mm");
    },
    dragPosition() {
      return this.$store.getters.dragPosition + window.innerWidth;
    }
  },
  watch: {
    dragPosition(dragPosition) {
      const quarter = Math.floor(
        ((dragPosition / window.innerWidth) * 384) % 96
      );
      this.$store.dispatch("updateQuarter", quarter);
    }
  }
};
</script>
