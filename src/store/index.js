import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
import moment from "moment";

export const store = new Vuex.Store({
  state: {
    zoneInfos: [
      {
        flag: "/src/flag/us.svg",
        city: "Baker Island, US Minor Outlying Islands",
        timeZone: "Etc/GMT+12",
        GMT: "-12"
      },
      {
        flag: "/src/flag/newZealand.svg",
        city: "Niue, New Zealand",
        timeZone: "Etc/GMT+11",
        GMT: "-11"
      },
      {
        flag: "/src/flag/france.svg",
        city: "French Polynesia, France",
        timeZone: "Etc/GMT+10",
        GMT: "-10"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Alaska(US)",
        timeZone: "Etc/GMT+9",
        GMT: "-9"
      },
      {
        flag: "/src/flag/canada.svg",
        city: "British Columbia, Canada",
        timeZone: "Etc/GMT+8",
        GMT: "-8"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Pacific Time(US)",
        timeZone: "Etc/GMT+7",
        GMT: "-7"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Mountain Time(US)",
        timeZone: "Etc/GMT+6",
        GMT: "-6"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Central Time(US)",
        timeZone: "Etc/GMT+5",
        GMT: "-5"
      },
      {
        flag: "/src/flag/us.svg",
        city: "Eastern Time(US)",
        timeZone: "Etc/GMT+4",
        GMT: "-4"
      },
      {
        flag: "/src/flag/brazil.svg",
        city: "Brazil Rio de Janerio, Brazil",
        timeZone: "Etc/GMT+3",
        GMT: "-3"
      },
      {
        flag: "/src/flag/utc.svg",
        city: "UTC",
        timeZone: "Etc/GMT",
        GMT: ""
      },
      {
        flag: "/src/flag/london.svg",
        city: "London, United Kingdom",
        timeZone: "Etc/GMT-1",
        GMT: "+1"
      },
      {
        flag: "/src/flag/berlin.svg",
        city: "Berlin, Germany",
        timeZone: "Etc/GMT-2",
        GMT: "+2"
      },
      {
        flag: "/src/flag/moscow.svg",
        city: "Moscow, Russian Federation",
        timeZone: "Etc/GMT-3",
        GMT: "+3"
      },
      {
        flag: "/src/flag/dubai.svg",
        city: "Dubai, United Arab Emirates",
        timeZone: "Etc/GMT-4",
        GMT: "+4"
      },
      {
        flag: "/src/flag/bangladesh.svg",
        city: " , Bangladesh",
        timeZone: "Etc/GMT-6",
        GMT: "+6"
      },
      {
        flag: "/src/flag/mumbai.svg",
        city: " , Thailand",
        timeZone: "Etc/GMT-7",
        GMT: "+7"
      },
      {
        flag: "/src/flag/singapore.svg",
        city: "Singapore, Singapore",
        timeZone: "Etc/GMT-8",
        GMT: "+8"
      },
      {
        flag: "/src/flag/china.svg",
        city: "Beijing, China",
        timeZone: "Etc/GMT-8",
        GMT: "+8"
      },
      {
        flag: "/src/flag/china.svg",
        city: "China Time, China",
        timeZone: "Etc/GMT-8",
        GMT: "+8"
      },
      {
        flag: "/src/flag/tokyo.svg",
        city: "Tokyo, Japan",
        timeZone: "Etc/GMT-9",
        GMT: "+9"
      },
      {
        flag: "/src/flag/australia.svg",
        city: "Sydney, Australia",
        timeZone: "Etc/GMT-10",
        GMT: "+10"
      },
      {
        flag: "/src/flag/australia.svg",
        city: "Norfolk Island, Australia",
        timeZone: "Etc/GMT-11",
        GMT: "+11"
      },
      {
        flag: "/src/flag/newZealand.svg",
        city: "Auckland, New Zealand",
        timeZone: "Etc/GMT-12",
        GMT: "+12"
      }
    ],
    startingDate: moment().format("yyyy/MM/DD"),
    dragPosition: undefined,
    windowWidth: window.innerWidth,
    quarter: undefined
  },
  getters: {
    zoneInfos: state => {
      return state.zoneInfos;
    },
    startingDate: state => {
      return state.startingDate;
    },
    dragPosition: state => {
      return state.dragPosition;
    },
    windowWidth: state => {
      return state.windowWidth;
    },
    quarter: state => {
      return state.quarter;
    }
  },
  actions: {
    updateDragPosition({ commit }, payload) {
      commit("setDragPosition", payload);
    },
    updateWindowWidth({ commit }, payload) {
      commit("setWindowWidth", payload);
    },
    updateQuarter({ commit }, payload) {
      commit("setQuarter", payload);
    }
  },
  mutations: {
    setDragPosition(state, payload) {
      state.dragPosition = payload;
    },
    setWindowWidth(state, payload) {
      state.windowWidth = payload;
    },
    setQuarter(state, payload) {
      state.quarter = payload;
    }
  }
});
