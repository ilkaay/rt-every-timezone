import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    zoneInfos: [
      {
        flag: "/src/flag/us.svg",
        city: "Baker Island, US Minor Outlying Islands",
        detail: "UTC-12"
      },
      {
        flag: "/src/flag/newZealand.svg",
        city: "Niue, New Zealand",
        detail: "UTC-11"
      },
      {
        flag: "/src/flag/france.svg",
        city: "French Polynesia, France",
        detail: "UTC-10"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Alaska(US)",
        detail: "UTC-9"
      },
      {
        flag: "/src/flag/canada.svg",
        city: "British Columbia, Canada",
        detail: "UTC-8"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Pacific Time(US)",
        detail: "UTC-7"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Mountain Time(US)",
        detail: "UTC-6"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Central Time(US)",
        detail: "UTC-5"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Eastern Time(US)",
        detail: "UTC-4"
      },
      {
        flag: "/src/flag/brazil.svg",
        city: "Brazil Rio de Janerio, Brazil",
        detail: "UTC-3"
      },
      {
        flag: "/src/flag/utc.svg",
        city: "UTC",
        detail: ""
      },
      {
        flag: "/src/flag/london.svg",
        city: "London, United Kingdom",
        detail: "UTC+1"
      },
      {
        flag: "/src/flag/berlin.svg",
        city: "Berlin, Germany",
        detail: "UTC+2"
      },
      {
        flag: "/src/flag/moscow.svg",
        city: "Moscow, Russian Federation",
        detail: "UTC+3"
      },
      {
        flag: "/src/flag/dubai.svg",
        city: "Dubai, United Arab Emirates",
        detail: "UTC+4"
      },
      {
        flag: "/src/flag/mumbai.svg",
        city: "Mumbai, India",
        detail: "UTC+5:30"
      },
      {
        flag: "/src/flag/bangladesh.svg",
        city: " , Bangladesh",
        detail: "UTC+6"
      },
      {
        flag: "/src/flag/mumbai.svg",
        city: " , Thailand",
        detail: "UTC+7"
      },
      {
        flag: "/src/flag/singapore.svg",
        city: "Singapore, Singapore",
        detail: "UTC+8"
      },
      {
        flag: "/src/flag/china.svg",
        city: "Beijing, China",
        detail: "UTC+8"
      },
      {
        flag: "/src/flag/china.svg",
        city: "China Time, China",
        detail: "UTC+8"
      },
      {
        flag: "/src/flag/tokyo.svg",
        city: "Tokyo, Japan",
        detail: "UTC+9"
      },
      {
        flag: "/src/flag/australia.svg",
        city: "Sydney, Australia",
        detail: "UTC+10"
      },
      {
        flag: "/src/flag/australia.svg",
        city: "Norfolk Island, Australia",
        detail: "UTC+11"
      },
      {
        flag: "/src/flag/newZealand.svg",
        city: "Auckland, New Zealand",
        detail: "UTC+12"
      }
    ]
  },
  getters: {
    zoneInfos: state => {
      return state.zoneInfos;
    }
  }
});
