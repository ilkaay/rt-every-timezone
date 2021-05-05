<template>
  <span :class="{ leftPosition: leftPos, rightPosition: rightPos }"
    ><img
      :src="zoneInfoFlag"
      style="width: 2rem; height: 2rem; padding: 3px; ;"
      class="rounded-circle"
    />{{ zoneInfoCity }}
    <br class="d-lg-none" />
    <small class="text-muted">UTC {{ zoneInfoGMT }}</small>
  </span>
</template>

<script>
export default {
  props: ["zoneInfoFlag", "zoneInfoCity", "zoneInfoGMT"],
  data() {
    return {
      leftPos: false,
      rightPos: true
    };
  },
  computed: {
    dragPosition() {
      return this.$store.getters.dragPosition;
    }
  },
  watch: {
    dragPosition(positionOfLine) {
      if (positionOfLine < window.innerWidth / 3) {
        this.leftPos = true;
        this.rightPos = false;
      } else {
        this.leftPos = false;
        this.rightPos = true;
      }
    }
  }
};
</script>

<style scoped>
.leftPosition {
  text-align: right;
  transition: all 1s ease-in-out;
}
.rightPosition {
  text-align: left;
  transition: all 1s ease-in-out;
}
</style>
