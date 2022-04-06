<template>
<div class="tempday">
  <h5 class="headDay">Next 5 Days</h5>
  <div class="card-body px-5"  v-for="weathers in weathers" :key="weathers.index">
<div class="row-md align-items-center" >
  
              <div class="col-lg-2">
                <p class=" mb-1" ><P>{{moment(weathers.daily[1].dt * 1000).format('ddd')}}</P>{{moment(weathers.daily[1].dt * 1000).format("MM/ DD")}}</p>
              </div>

              <div class="col-lg-2 ">
                <img  :src= "iconBaseUrl+(weathers.daily[1].weather[0].icon)+iconFormat" class="w-100" alt="" />
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">Low</p>{{weathers.daily[1].temp.min+ "°C"}}</P>
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">High</p>{{weathers.daily[1].temp.max+ "°C"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><p class="p-color">Wind</p>{{weathers.daily[1].wind_speed+  "mph"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><P class="p-color">Rain</P>{{weathers.daily[1].clouds+  "%"}}</P>
              </div>

            </div>



<div class="row-md align-items-center" >
            <div class="col-lg-2">
                <p class=" mb-1" ><P>{{moment(weathers.daily[2].dt * 1000).format('ddd')}}</P>{{moment(weathers.daily[2].dt * 1000).format("MM/ DD")}}</p>
              </div>

              <div class="col-lg-2 ">
                <img  :src= "iconBaseUrl+(weathers.daily[2].weather[0].icon)+iconFormat" class="w-100" alt="" />
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">Low</p>{{weathers.daily[2].temp.min+ "°C"}}</P>
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">High</p>{{weathers.daily[2].temp.max+ "°C"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><p class="p-color">Wind</p>{{weathers.daily[2].wind_speed+  "mph"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><P class="p-color">Rain</P>{{weathers.daily[2].clouds+  "%"}}</P>
              </div>

</div>



<div class="row-md align-items-center" >
           <div class="col-lg-2">
                <p class=" mb-1" ><P>{{moment(weathers.daily[3].dt * 1000).format('ddd')}}</P>{{moment(weathers.daily[3].dt * 1000).format("MM/ DD")}}</p>
              </div>

              <div class="col-lg-2 ">
                <img  :src= "iconBaseUrl+(weathers.daily[3].weather[0].icon)+iconFormat" class="w-100" alt="" />
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">Low</p>{{weathers.daily[3].temp.min+ "°C"}}</P>
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">High</p>{{weathers.daily[3].temp.max+ "°C"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><p class="p-color">Wind</p>{{weathers.daily[3].wind_speed+  "mph"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><P class="p-color">Rain</P>{{weathers.daily[3].clouds+  "%"}}</P>
              </div>
</div>


          
<div class="row-md align-items-center" >
          <div class="col-lg-2">
                <p class=" mb-1" ><P>{{moment(weathers.daily[4].dt * 1000).format('ddd')}}</P>{{moment(weathers.daily[4].dt * 1000).format("MM/ DD")}}</p>
              </div>

              <div class="col-lg-2 ">
                <img  :src= "iconBaseUrl+(weathers.daily[4].weather[0].icon)+iconFormat" class="w-100" alt="" />
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">Low</p>{{weathers.daily[4].temp.min+ "°C"}}</P>
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">High</p>{{weathers.daily[4].temp.max+ "°C"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><p class="p-color">Wind</p>{{weathers.daily[4].wind_speed+  "mph"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><P class="p-color">Rain</P>{{weathers.daily[4].clouds+  "%"}}</P>
              </div>

            </div>


<div class="row-md align-items-center" >
            <div class="col-lg-2">
                <p class=" mb-1" ><P>{{moment(weathers.daily[5].dt * 1000).format('ddd')}}</P>{{moment(weathers.daily[5].dt * 1000).format("MM/ DD")}}</p>
              </div>

              <div class="col-lg-2 ">
                <img  :src= "iconBaseUrl+(weathers.daily[5].weather[0].icon)+iconFormat" class="w-100" alt="" />
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">Low</p>{{weathers.daily[5].temp.min+ "°C"}}</P>
              </div>

              <div class="col-lg-2 ">
                <P ><p class="p-color">High</p>{{weathers.daily[5].temp.max+ "°C"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><p class="p-color">Wind</p>{{weathers.daily[5].wind_speed+  "mph"}}</P>
              </div>

              <div class="col-lg-2-de ">
                <P><P class="p-color">Rain</P>{{weathers.daily[5].clouds+  "%"}}</P>
              </div>

  </div>
  </div>



</div>
</template>
<script>
import { mapState } from 'vuex'
import { iconBaseUrl ,iconFormat} from '@/Api/baseImg'
export default {
    name:"tempDay",
     data () {
    return {
      iconBaseUrl,
      iconFormat
    }
  },
     computed: {
        ...mapState( ["Weather"]),
             weathers() {
      return this.$store.state.Weather; // gets weather state from Vuex store
    },
},
}
</script>