<template>
  <span style="font-size: 1.2rem;" :v-model="date">{{ date }}</span>
</template>

<script>
export default {
  data() {
    return {
      date: "15 May 1998"
    };
  }
};
</script>
