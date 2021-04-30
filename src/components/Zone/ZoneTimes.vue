<template>
  <div>
    <div
      v-for="index in 96"
      :key="index"
      class="d-inline-block zoneTime"
      style="width: 1.0416%;"
    >
      <!-- {{ computedCount(index) }}:{{ zoneTime }} -->
      {{ computedCount(index - 1) }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    computedCount(index) {
      const now = this.$store.getters.UTC;
      return moment.unix(now.unix() + index * 60 * 15).format("HH:mm");
    }
  }
};
</script>

<style scoped>
.zoneTime {
  font-size: 1.5rem;
  color: transparent;
}
.zoneTime:hover {
  color: black;
}
</style>
