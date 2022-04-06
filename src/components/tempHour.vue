<template>
  <div class="hour">
    <br>
    
      
    <div class="row text-center" id="row-hour"  v-for="weathers in weathers" :key="weathers.index">

    <div class="col-2" id="hour-day">
      <p class="d-block">{{moment(weathers.hourly[1].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[1].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[1].temp+ "°C"}}</p>
    </div>

    <div class="col-2" id="hour-day">
      <p class="d-block">{{moment(weathers.hourly[4].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[4].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[4].temp+ "°C"}}</p>
    </div>

    <div class="col-2" id="hour-day">
      <p class="d-block">{{moment(weathers.hourly[7].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[7].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[7].temp+ "°C"}}</p>
    </div>

    <div class="col-2" id="hour-day">
      <p class="d-block">{{moment(weathers.hourly[10].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[10].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[10].temp+ "°C"}}</p>
    </div>

    <div class="col-2" id="hour-day">
      <p class="d-block">{{moment(weathers.hourly[13].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[13].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[13].temp+ "°C"}}</p>
    </div>

    <div class="col-2" id="hour-day">
       <p class="d-block">{{moment(weathers.hourly[16].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[16].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[16].temp+ "°C"}}</p>
    </div>

    <div class="col-2" id="hour-day">
      <p class="d-block">{{moment(weathers.hourly[19].dt *1000).format('HH a')}}</p>
      <img :src= "iconBaseUrl+(weathers.hourly[19].weather[0].icon)+iconFormat" class="" alt="" />
      <p class="d-block md-2">{{weathers.hourly[19].temp+ "°C"}}</p>
    </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { iconBaseUrl ,iconFormat} from '@/Api/baseImg'
export default {
  name: "tempHour",
   data () {
    return {
      iconBaseUrl,
      iconFormat
    }
  },
  computed: {
    ...mapState(["Weather"]),
         weathers() {
      return this.$store.state.Weather; // gets weather state from Vuex store
    },
  },
};
</script>
