<template>

 <div class="sticky">
        <div class="contaner">
             <div class="about">
   
                <cityName/>
                <currentTemp />
                <tempHL />
                <tempHour/>
                <tempDay/>
        </div>
  </div>
  </div>
</template>
<script>
import cityName from "../components/cityName.vue";
import currentTemp from "../components/currentTemp.vue";
import tempHL from "../components/tempHL.vue";
import tempHour from "../components/tempHour.vue";
import tempDay from "../components/tempDay.vue";
// import { mapState, mapActions } from "vuex";
export default {
  name: 'AboutView',

components: {
    currentTemp,
   cityName,
   tempHL,
   tempHour,
   tempDay
  },
   mounted() {
      

    },


    }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');
div.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    padding: 5px;
    background-image: linear-gradient(rgb(6, 42, 202), rgb(12, 110, 202), rgb(56, 159, 255));
}

[class*="col-"] {
    float: left;
    padding: 15px;
}
.row{
    flex-flow: nowrap;
}

.row>* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    flex-shrink:inherit;
}

body {
    overflow: hidden;
    /* height: 100vh; */
    font-family: 'Poppins', sans-serif;
    overflow-y: scroll;
    color:#fff
}

.container {
    padding: 20px 70px;
    color: #fff;
}

.p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: larger !important;
    font-weight: 300;
}

#border-left1 {
    border-left: 2px solid rgb(196, 192, 192);
    height: 50%;
    padding: 50px;
}

.p-color {
    color: rgb(196, 189, 189);
}

#row-hour {
    color: white;
    width: 100%;
    /* overflow-x: scroll;
     align-items: none !important; */
    flex-wrap: nowrap;
}

#hour-day {
    display: flex;
    justify-content: center;
    margin: 5px;
    border-radius: 10px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.2);
    flex-direction: column;
}

#hour-day p {
    text-align: center;
}

.align-items-center {
    align-items: center !important;
    BACKGROUND: #0000004a;
    margin: 10px;
    justify-content: center;
    display: flex;
    padding: 10px;
    text-align: center;
    color: aliceblue
}
.col-md-4-HL{
    flex-shrink:initial;
}

@media only screen and (max-width:730px) {
    .row {
        justify-content: start;
        align-items: none;
        flex-direction: row;
        flex-flow: nowrap;
    }
    .row .text-center {
        justify-content: start;
        align-items: none;
        overflow-x: scroll;
        flex-direction: row;
    }
    #row-hour {
         overflow-x: scroll;
     align-items: none !important; 
    }
    #border-left1 {
        border-left: 1px solid rgb(31, 67, 175);
        /* display: none; */
    }
    .col-lg-2-de{
        display: none;
    }
    /* .col-md-4-HL{
        padding-right: 25%;
    } */
    [class*="col-"]{
         float:none;
    }
}

@media only screen and (max-width: 1400px) {
    .future-forecast {
        justify-content: start;
        align-items: none;
        overflow-x: scroll;
    }
}
</style>
