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
  data() {
    return {
      quarter: 192
    };
  },
  computed: {
    zoneTime() {
      const updatedUnix = this.startingDate.unix() + this.quarter * 60 * 15;
      const updatedTime = moment.unix(updatedUnix).tz(this.timeZone);
      return updatedTime.format("HH:mm");
    },
    dragPosition() {
      return this.$store.getters.dragPosition;
    }
  },
  watch: {
    dragPosition(dragPosition) {
      this.quarter = Math.floor(
        ((dragPosition / window.innerWidth) * 384) % 96
      );
    }
  }
};
</script>
