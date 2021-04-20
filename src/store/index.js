import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    zoneInfos: [
      {
        flag: "/src/flag/us.svg",
        city: "Baker Island, US Minor Outlying Islands",
        UTC: "-12"
      },
      {
        flag: "/src/flag/newZealand.svg",
        city: "Niue, New Zealand",
        UTC: "-11"
      },
      {
        flag: "/src/flag/france.svg",
        city: "French Polynesia, France",
        UTC: "-10"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Alaska(US)",
        UTC: "-9"
      },
      {
        flag: "/src/flag/canada.svg",
        city: "British Columbia, Canada",
        UTC: "-8"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Pacific Time(US)",
        UTC: "-7"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Mountain Time(US)",
        UTC: "-6"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Central Time(US)",
        UTC: "-5"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Eastern Time(US)",
        UTC: "-4"
      },
      {
        flag: "/src/flag/brazil.svg",
        city: "Brazil Rio de Janerio, Brazil",
        UTC: "-3"
      },
      {
        flag: "/src/flag/utc.svg",
        city: "UTC",
        UTC: ""
      },
      {
        flag: "/src/flag/london.svg",
        city: "London, United Kingdom",
        UTC: "+1"
      },
      {
        flag: "/src/flag/berlin.svg",
        city: "Berlin, Germany",
        UTC: "+2"
      },
      {
        flag: "/src/flag/moscow.svg",
        city: "Moscow, Russian Federation",
        UTC: "+3"
      },
      {
        flag: "/src/flag/dubai.svg",
        city: "Dubai, United Arab Emirates",
        UTC: "+4"
      },
      {
        flag: "/src/flag/mumbai.svg",
        city: "Mumbai, India",
        UTC: "+5:30"
      },
      {
        flag: "/src/flag/bangladesh.svg",
        city: " , Bangladesh",
        UTC: "+6"
      },
      {
        flag: "/src/flag/mumbai.svg",
        city: " , Thailand",
        UTC: "+7"
      },
      {
        flag: "/src/flag/singapore.svg",
        city: "Singapore, Singapore",
        UTC: "+8"
      },
      {
        flag: "/src/flag/china.svg",
        city: "Beijing, China",
        UTC: "+8"
      },
      {
        flag: "/src/flag/china.svg",
        city: "China Time, China",
        UTC: "+8"
      },
      {
        flag: "/src/flag/tokyo.svg",
        city: "Tokyo, Japan",
        UTC: "+9"
      },
      {
        flag: "/src/flag/australia.svg",
        city: "Sydney, Australia",
        UTC: "+10"
      },
      {
        flag: "/src/flag/australia.svg",
        city: "Norfolk Island, Australia",
        UTC: "+11"
      },
      {
        flag: "/src/flag/newZealand.svg",
        city: "Auckland, New Zealand",
        UTC: "+12"
      }
    ]
  },
  getters: {
    zoneInfos: state => {
      return state.zoneInfos;
    }
  }
});
