<template>
  <div class="nameCity">
    <div class="p-4 border-0" v-for="weathers in weathers" :key="weathers.index">
      <div class="mb-3">
        <p class="h1 mb-1" id="wrapper-name">{{ city }}</p>
        <h5 class="date" id="date">{{moment(weathers.current.dt).format('dddd-DD-MMMM')}}</h5>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { mapState } from "vuex";
export default {
  name: "cityName",

  computed: {
    ...mapState(["Weather"], ["CityName"]),
    weathers() {
      return this.$store.state.Weather; // gets weather state from Vuex store
    },
    city() {
      return this.$store.state.CityName;
    },
  
  },
   methods: {
    moment
  }
 
};

</script>
