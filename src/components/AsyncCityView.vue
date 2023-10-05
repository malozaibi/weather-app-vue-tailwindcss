<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.lon}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=GMT&current_weather=true`
    );

    // cal current date and time
    // const localOffset = new Date().getTimezoneOffset() * 60000;
    // const utc = weatherData.data.current.dt * 1000 + localOffset;
    // weatherData.data.currentTime =
    //   utc + 1000 * weatherData.data.timezone_offset;
    // // cal hourly weather offset
    // weatherData.data.hourly.forEach((hour) => {
    //   const utc = hour.dt * 1000 + localOffset;
    //   hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    // });

    return weatherData;
  } catch (error) {
    console.log(error + "errooor");
  }
};
const weatherData = (await getWeatherData()).data;
console.log(route.params);
</script>

<template>
  <div class="container my-2 text-white">
    <div v-if="route.query.preview" class="bg-w-secondary p-5">
      click the + icon to add to favorite
    </div>
    <div class="text-center">
      <h1 class="text-5xl mt-10 py-2">{{ route.params.city }}</h1>
      <p class="">
        {{
          new Date(weatherData.current_weather.time).toLocaleDateString(
            "en-us"
          ) +
          " " +
          new Date(weatherData.current_weather.time).toLocaleTimeString("en-us")
        }}
      </p>
      <p class="text-8xl mt-5">
        {{ weatherData.current_weather.temperature }}&deg;
      </p>

      <div class="border-b border-slate-200 my-8"></div>

      <div class="max-w-screen-md m-auto flex overflow-x-auto gap-4">
        <div
          class="text-center flex flex-col gap-3"
          v-for="(daysWeatherTime, i) in weatherData.daily.time"
          :key="daysWeatherTime"
        >
          <div class="text-2xl">
            {{
              new Date(daysWeatherTime).toLocaleDateString("en-us", {
                weekday: "long",
              })
            }}
          </div>
          <div class="text-xl font-bold">
            {{ weatherData.daily.temperature_2m_max[i] }}&deg;
          </div>
          <div class="text-xl font-bold">
            {{ weatherData.daily.temperature_2m_min[i] }}&deg;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
