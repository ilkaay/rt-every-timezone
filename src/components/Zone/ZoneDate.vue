<template>
  <span style="font-size: 1.2rem;">
    {{ formattedDate }}
  </span>
</template>

<script>
import moment from "moment";
export default {
  props: ["date"],
  computed: {
    formattedDate() {
      return moment(this.date).format("ll");
    }
  }
};
</script>
