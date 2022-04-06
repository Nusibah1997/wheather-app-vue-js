<template>
    <div class="current">
       
            <div class="col-md-6"  v-for="weathers in weathers" :key="weathers.index">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <img  :src= "iconBaseUrl+(weathers.hourly[0].weather[0].icon)+iconFormat" class="w-100" alt="" />
                    </div>
                    <div class="col-md-6 text-center ">
                    <p class="display-1 mb-1">{{weathers.current.temp+ "°C"}}</p>
                    <h5 class="mb-1" >{{weathers.current.weather[0].description}}</h5>
                    </div>
                </div>
            </div>
        
    </div>
</template>


<script>
import { mapState } from 'vuex'
import { iconBaseUrl ,iconFormat} from '@/Api/baseImg'
export default {
    name:"currentTemp",
   data () {
    return {
      iconBaseUrl,
      iconFormat
    }
  },
    computed: {
        ...mapState( ["Weather"],["description"]),
         weathers() {
      return this.$store.state.Weather; // gets weather state from Vuex store
    },
     icon(){
      return `${this.baseImg}${this.weather.icon}.png`
    },
    
},
}
</script>

// src= "http://openweathermap.org/img/wn/+weathers.daily[1].weather[0].icon+.png"



