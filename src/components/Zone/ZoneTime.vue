<template>
  <span class="text-dark d-block" :v-model="zoneTime"
    >hour: {{ computedCount }} - minutes: {{ zoneTime }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      zoneTime: 0
    };
  },
  props: ["quarterCount"],

  computed: {
    computedCount() {
      this.zoneTime = this.quarterCount * 15;
      const count = Math.floor(this.zoneTime / 60);
      if (this.zoneTime >= 60) {
        this.zoneTime = this.zoneTime - count * 60;
      }
      return count;
    }
  }
};
</script>
