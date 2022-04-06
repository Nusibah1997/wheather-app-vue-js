<template>
    <div class="rowTemp"  >
         <div class="row" >
             <div class="col-md-6" > <currentTemp/></div>
            <div class="col-md-6" ><tempHL/></div>
         </div>
    </div>
</template>
<script>
import currentTemp from "./currentTemp.vue";
import tempHL from "./tempHL.vue";

export default {
    components: { currentTemp, tempHL },
   

}
</script>