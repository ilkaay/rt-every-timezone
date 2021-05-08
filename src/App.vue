<template>
  <div>
    <navbar></navbar>
    <wrapper></wrapper>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import AppFooter from "./components/Footer/Footer";

export default {
  components: {
    Navbar,
    Wrapper,
    AppFooter
  }
};
</script>
