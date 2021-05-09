<template>
  <span :class="{ leftPosition: slideLeft, rightPosition: !slideLeft }">
    <img :src="flag" class="flag rounded-circle" />{{ city }}
    <br class="d-lg-none" />
    <small class="text-muted">UTC {{ GMT }}</small>
  </span>
</template>

<script>
export default {
  props: ["flag", "city", "GMT"],
  data() {
    return {
      slideLeft: true
    };
  },
  computed: {
    dragPosition() {
      return this.$store.getters.dragPosition;
    }
  },
  watch: {
    dragPosition(dragPosition) {
      this.slideLeft =
        dragPosition + window.innerWidth < window.innerWidth / 2 ? false : true;
    }
  }
};
</script>

<style scoped>
.leftPosition {
  position: absolute;
  left: 1%;
  transition: left 1s ease-in-out;
}
.rightPosition {
  position: absolute;
  right: 1%;
  transition: right 1s ease-in-out;
}
.flag {
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
}
</style>
