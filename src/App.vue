<template>
  <div>
    <navbar></navbar>
    <div style="user-select: none;">
      <zones-time-line></zones-time-line>
      <current-time-line></current-time-line>
      <zone class="mt-5"></zone>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import Zone from "../src/components/Zone/Zone";
import ZonesTimeLine from "../src/components/TimeLine/ZonesTimeLine";
import CurrentTimeLine from "../src/components/TimeLine/CurrentTimeLine";
import AppFooter from "./components/Footer/Footer";

export default {
  components: {
    Navbar,
    Zone,
    ZonesTimeLine,
    CurrentTimeLine,
    AppFooter
  }
};
</script>
