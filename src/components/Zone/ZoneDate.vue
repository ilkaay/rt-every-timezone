<template>
  <span style="font-size: 1.2rem;" :v-model="date"
    >{{ date.day }} {{ months[date.month] }} {{ date.year }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      date: {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
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
