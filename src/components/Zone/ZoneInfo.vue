<template>
  <span
    ><img
      :src="zoneInfoFlag"
      style="width: 2rem; height: 2rem; padding: 3px;"
      class="rounded-circle"
    />{{ zoneInfoCity }}
    <small class="text-muted">UTC {{ zoneInfoUTC }}</small>
  </span>
</template>

<script>
export default {
  props: ["zoneInfoFlag", "zoneInfoCity", "zoneInfoUTC"]
};
</script>

<style scoped></style>
