<template>
  <div>
    <nav class="navbar navbar-expand-lg p-4">
      <img
        src="/src/assets/time-zone.png"
        class="border border-2 rounded-circle"
        style="width: 3rem; height: 3rem;"
      />
      <span class="text-white" style="margin-left: 1rem;"
        ><h3>Every Time Zone</h3></span
      >
    </nav>
    <div class="mt-3 mb-5">
      <div class="badge bg-warning mt-5 mx-auto" v-drag:x>
        <span class="p-3">horizontal</span>
      </div>
      <zone></zone>
    </div>
    <footer class="navbar p-3">
      <span class="text-white"><strong>İlkay Yüksel</strong></span>
    </footer>
  </div>
</template>

<script>
import Zone from "../src/components/Zone/Zone";
export default {
  components: {
    Zone
  }
};
</script>

<style scoped>
.navbar {
  background-color: #1c2c54;
}
</style>
