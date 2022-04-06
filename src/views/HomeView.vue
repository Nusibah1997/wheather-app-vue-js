<template>
  <div class="home">
    <div>
      <HeaderC></HeaderC>
     
    <div class="container my-5" style="max-width: 400px; min-width: 360px">
      <h1 class="title text-center">Search Weather </h1>
       <form class="search-location" v-on:submit.prevent="setW()">
        <input
          type="text"
          class="form-control text-muted form-rounded p-4 shadow-sm"
          placeholder="What City?"
          v-model="city"
          autocomplete="off"
        />
      </form>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex' 
import HeaderC from "../components/HeaderC.vue";
export default {
  name: 'HomeView',
     components:{
  HeaderC
},
  data() {
    return {
      
    }
  },

    computed: {
       ...mapState(['CityName']),
     
      
city: {
  get(){
return this.$store.state.CityName;
  },
set(currentCity){
 this.$store.commit('setCity',currentCity)
}
  
}
    },
     methods: {
      ...mapActions(['setWeather','setLatLon']),


 setW(){
        this.setWeather();
        this.$router.push('/about'); 

      },


    

  },

}
</script>

<style>

</style>
