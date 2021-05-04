<template>
  <span style="font-size: 1.2rem;" :v-model="parsedDate">
    {{ parsedDate.day }} {{ months[parsedDate.month] }} {{ parsedDate.year }}
  </span>
</template>

<script>
// todo use moment in here
export default {
  props: ["date"],
  data() {
    return {
      parsedDate: {
        day: this.date.getDate(),
        month: this.date.getMonth(),
        year: this.date.getFullYear()
      },
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  }
};
</script>
