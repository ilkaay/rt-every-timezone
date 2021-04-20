<template>
  <div>
    <div
      v-for="zoneInfo in zoneInfos"
      :key="zoneInfo.key"
      class="row row-no-padding p-1 mt-3 justify-content-center"
    >
      <zone-info
        :zoneInfoFlag="zoneInfo.flag"
        :zoneInfoCity="zoneInfo.city"
        :zoneInfoDetail="zoneInfo.detail"
      ></zone-info>
      <div v-for="index in 4" :key="index" class="col">
        <div class="progress rounded-pill h-100">
          <div
            class="progress-bar beforeDawn p-2"
            role="progressbar"
            style="width: 24%"
          ></div>
          <div
            class="progress-bar dawnBeforeNoon p-2"
            role="progressbar"
            style="width: 7%"
          ></div>
          <div
            class="progress-bar noon p-2"
            role="progressbar"
            style="width: 42%"
          >
            <zone-date class="text-white"></zone-date>
          </div>
          <div
            class="progress-bar dawnAfterNoon p-2"
            role="progressbar"
            style="width: 17%"
          ></div>
          <div
            class="progress-bar afterDawn p-2"
            role="progressbar"
            style="width: 10%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZoneDate from "./ZoneDate";
import ZoneInfo from "./ZoneInfo";
import ZoneTime from "./ZoneTime";

export default {
  data() {
    return {
      zoneInfos: [
        {
          flag: "/src/flag/us.svg",
          city: "Pacific Time(US)",
          detail: "PDT UTC-7"
        },
        {
          flag: "/src/flag/us.svg",
          city: "Mountain Time(US)",
          detail: "MDT UTC-6"
        },
        {
          flag: "/src/flag/us.svg",
          city: "Central Time(US)",
          detail: "CDT UTC-5"
        },
        {
          flag: "/src/flag/us.svg",
          city: "Eastern Time(US)",
          detail: "EDT UTC-4"
        },
        {
          flag: "/src/flag/brazil.svg",
          city: "Brazil Rio de Janerio, Brazil",
          detail: "-03 UTC-3"
        },
        {
          flag: "/src/flag/utc.svg",
          city: "UTC",
          detail: ""
        },
        {
          flag: "/src/flag/london.svg",
          city: "London, United Kingdom",
          detail: "BST UTC+1"
        },
        {
          flag: "/src/flag/berlin.svg",
          city: "Berlin, Germany",
          detail: "CEST UTC+2"
        },
        {
          flag: "/src/flag/moscow.svg",
          city: "Moscow, Russian Federation",
          detail: "MSK UTC+3"
        },
        {
          flag: "/src/flag/dubai.svg",
          city: "Dubai, United Arab Emirates",
          detail: "+04 UTC+4"
        },
        {
          flag: "/src/flag/mumbai.svg",
          city: "Mumbai, India",
          detail: "IST UTC+5:30"
        },
        {
          flag: "/src/flag/singapore.svg",
          city: "Singapore, Singapore",
          detail: "+08 UTC+8"
        },
        {
          flag: "/src/flag/china.svg",
          city: "Beijing, China",
          detail: "CST UTC+8"
        },
        {
          flag: "/src/flag/china.svg",
          city: "China Time, China",
          detail: "CST UTC+8"
        },
        {
          flag: "/src/flag/tokyo.svg",
          city: "Tokyo, Japan",
          detail: "JST UTC+9"
        },
        {
          flag: "/src/flag/australia.svg",
          city: "Sydney, Australia",
          detail: "AEST UTC+10"
        },
        {
          flag: "/src/flag/newZealand.svg",
          city: "Auckland, New Zealand",
          detail: "NZST UTC+12"
        }
      ]
    };
  },
  components: {
    ZoneDate,
    ZoneInfo,
    ZoneTime
  },
  computed: {}
};
</script>

<style scoped>
.beforeDawn {
  /* background: linear-gradient(to right, #03045e 50%, #ff9933 100%); */
  background: linear-gradient(to right, #003399 0%, #0000ff 100%);
}

.afterDawn {
  /* background: linear-gradient(to right, #ff9933 0%, #03045e 50%); */
  background: linear-gradient(to right, #0000ff 0%, #003399 80%);
}

.dawnBeforeNoon {
  /* background: linear-gradient(to left, #ffcc66 0%, #ff9933 50%); */
  background: linear-gradient(to right, #3333ff 0%, #0000ff 50%);
}

.dawnAfterNoon {
  /* background: linear-gradient(to left, #ff9933 0%, #ffcc66 50%); */
  background: linear-gradient(to right, #0000ff 0%, #3333ff 50%);
}

.noon {
  /* background-color: #ffcc66; */
  background-color: #3333ff;
}

.row-no-padding {
  margin-left: 0;
  margin-right: 0;
}

.col {
  padding-left: 0;
  padding-right: 0;
}
</style>
