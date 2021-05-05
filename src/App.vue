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
    <div style="user-select: none;">
      <zones-time-line></zones-time-line>
      <current-time-line></current-time-line>
      <zone class="mt-5"></zone>
    </div>
    <footer class="navbar p-3 mt-5">
      <span class="text-white"><strong>İlkay Yüksel</strong></span>
    </footer>
  </div>
</template>

<script>
import Zone from "../src/components/Zone/Zone";
import ZonesTimeLine from "../src/components/ZonesTimeLine";
import CurrentTimeLine from "../src/components/CurrentTimeLine";
export default {
  components: {
    Zone,
    ZonesTimeLine,
    CurrentTimeLine
  }
};
</script>

<style scoped>
.navbar {
  background-color: #24273f;
}
</style>
