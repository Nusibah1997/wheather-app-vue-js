<template>
  <div class="temphl">
    <div
      class="col-md-6"
      id="border-left1"
      v-for="weathers in weathers"
      :key="weathers.index"
    >
      <div class="row">
        <div class="col-md-4-HL">
          <div class="md-1"><p class="p-color">High</p>{{Math.round(weathers.daily[0].temp.max)+ "°C"}} </div>
          <div class="md-1"><p class="p-color">Low</p>{{Math.round(weathers.daily[0].temp.min)+"°C"}} </div>
        </div>

        
          <div class="col-md-4-HL">
            <div class="md-1"><p class="p-color">Wind</p>{{weathers.current.wind_speed +  "mph"}}</div>
            <div class="md-1"><p class="p-color">Rain</p>{{weathers.current.clouds +  "%"}}</div>
          </div>
          <div class="col-md-4-HL">
            <div class="md-1"><p class="p-color">Sunrise</p>{{moment(weathers.current.sunrise *1000).format('HH:mm a')}}</div>
            <div class="md-1"><p class="p-color">Sunset</p>{{moment(weathers.current.sunset *1000).format('HH:mm a')}}</div>
          </div>
        </div>
      </div>
    </div>
  
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "tempHL",
  computed: {
    ...mapState(["Weather"]),
         weathers() {
      return this.$store.state.Weather; // gets weather state from Vuex store
    },
  },
};
</script>
