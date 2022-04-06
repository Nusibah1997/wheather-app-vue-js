import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.prototype.moment = moment

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        // comp1
        CityName: "",
        // country: "",
        date: null,

        // // comp2
        // temp1: null,
        description: null,

        // // comp3
        // HighTemp: null,
        // lowTemp: null,
        // wind_speed: null,
        // rain: null,
        sunrise: null,
        sunset: null,

        // // comp4
        // hour1: null,
        // hour2: null,
        // hour3: null,
        // hour4: null,
        // hour5: null,
        // hour6: null,
        // hour7: null,

        // time1: null,
        // time2: null,
        // time3: null,
        // time4: null,
        // time5: null,
        // time6: null,
        // time7: null,

        // HighTemp1: null,
        // HighTemp2: null,
        // HighTemp3: null,
        // HighTemp4: null,
        // HighTemp5: null,


        // lowTemp1: null,
        // lowTemp2: null,
        // lowTemp3: null,
        // lowTemp4: null,
        // lowTemp5: null,


        // wind_speed1: null,
        // wind_speed2: null,
        // wind_speed3: null,
        // wind_speed4: null,
        // wind_speed5: null,


        // rain1: null,
        // rain2: null,
        // rain3: null,
        // rain4: null,
        // rain5: null,














        lat: null,
        lon: null,

        Weather: [],



    },
    getters: {


    },

    mutations: {
        setCity(state, CityName) {
            state.CityName = CityName
        },

        getweather(state, Weather) {
            state.Weather.push(Weather)
            console.log(state.Weather)
        },


        setLat(state, lat) { state.lat = lat },
        setLon(state, lon) { state.lon = lon },


    },

    actions: {

        async setWeather({ dispatch, commit }) {
            // wait for getWeather to finish`
            const c = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + this.state.CityName + `&appid=81e21499a2c31724aea948b1bf36fc5e`);
            const data = await c.json()
            console.log(data)
            commit('setLat', data.coord.lat);
            commit('setLon', data.coord.lon);

            dispatch('setLatLon')
        },


        async setLatLon({ commit }) {
            const x = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=` + this.state.lat + `&lon=` + this.state.lon + `&units=metric&exclude=minutely,alerts&appid=81e21499a2c31724aea948b1bf36fc5e`);
            const data = await x.json()
            commit('getweather', data)
            console.log(this.state.Weather)
            console.log(data)
            commit(this.state.temp1, Math.round(data.current.temp));
            commit(this.state.description, data.current.weather[0].description);
            // this.state.temp1 = Math.round(data.current.temp);




        },



        // call mutations that change the state here
        // updateWeather(context) {
        //     context.commit("UPDATE_WEATHER");
        // },







    },



    modules: {}
})



// UPDATE_WEATHER(state) {

//     state.setLatLon() // call the function from service.js that returns the data from API
//         .then(response => { // if the response was get
//             state.Weather = response.data.data[0]; // set weather obj in state to real weather obj
//             state.dataIsRecived = true; // mark that data was recived
//             console.log(response); // and log it
//         })
// },




// setCityName: async function({ commit }) {
//     console.log(this.CityName);
//     const baseURL = `
//api.openweathermap.org/data/2.5/weather?q=` + this.state.CityName + `&appid=81e21499a2c31724aea948b1bf36fc5e`;
//     //fetch weather

//     const response = await fetch(baseURL);
//     const data = await response.json();
//     commit('getweather', data);
//     console.log(data)
//     console.log(this.state.Weather);








// async setCityName({ commit }) {
//     const response = await axios.get(`${baseURL}weather?q=${this.state.CityName}&appid=${key}`);
//     const data = response.json();
//     commit('getweather', data);
//     console.log(data)
//     console.log(this.state.Weather);
// },


// setCityName({ commit }, CityName) {
//     commit('setCity', CityName)
// }
// getCityName(ctx, city) {
//     ctx.commit('setCityName', city)
// }



// async setCityName({ commit }, CityName) {
//     const x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=81e21499a2c31724aea948b1bf36fc5e`);

//     commit('setCity', x)
//     console.log(x)

// async getCityName = ({ commit }) => {
//     axios.get((`
// https: //api.openweathermap.org/data/2.5/weather?q=${this.CityName}&appid=81e21499a2c31724aea948b1bf36fc5e`));
//     commit('setCityName', response.data)
// },
// GET_CITY({ commit }) {
//     navigator.geolocation.getCurrentPosition(async(position) => {
//         const { coord } = position;

//         const CityName = await axios.get(
//             `https://api.opencagedata.com/geocode/v1/json`, {
//                 params: {
//                     q: `${coord.lon}+${coord.lat}`,
//                     roadinfo: 1,
//                     key: "81e21499a2c31724aea948b1bf36fc5e"
//                 }
//             },
//             console.log(CityName)
//         );

//         commit("setCityNam", CityName.results);
//     });
// },




// getCityName: async function() {
//     console.log(this.CityName);
//     const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.CityName}&appid=81e21499a2c31724aea948b1bf36fc5e&units=metric`;
//     //fetch weather

//     const response = await fetch(baseURL);
//     const data = await response.json();
//     console.log(data);



// getCityName({ commit }) {

//     axios.get(`api.openweathermap.org/data/2.5/weather?q=damascus&appid=81e21499a2c31724aea948b1bf36fc5e`)
//         .then(response => {
//             commit('setCityName', response.data)




//         })



// getCityName: async function(city) {
//     axios.get('https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=81e21499a2c31724aea948b1bf36fc5e')
//         .then((response) => {
//             city.commit('setCityName', { CityName: response.data.data })
//             console.log(city)
//             return true;

//         }, (err) => {
//             console.log(err)
//             return false;
//         })
// },
// getWeather: async function(location) {
//     axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.${this.lcation}&lon=${this.location}&units=metric&exclude=minutely,alerts&appid=81e21499a2c31724aea948b1bf36fc5e')
//         .then((response) => {
//             location.commit('setWeather', { Weather: response.data.data })
//             console.log()
//             return true;

//         }, (err) => {
//             console.log(err)
//             return false;
//         })
// },          return false;
//         })
// },