<template>
  <span
    ><img
      :src="zoneInfoFlag"
      style="width: 2rem; height: 2rem; padding: 3px;"
      class="rounded-circle"
    />{{ zoneInfoCity }}
    <small class="text-muted">UTC {{ zoneInfoGMT }}</small>
  </span>
</template>

<script>
export default {
  props: ["zoneInfoFlag", "zoneInfoCity", "zoneInfoGMT"]
};
</script>

<style scoped></style>
