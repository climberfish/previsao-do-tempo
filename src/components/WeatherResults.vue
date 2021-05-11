<template>
  <div class="weather-results">
    <div class="city-name">{{ result.city.name }}</div>
    <div class="current-weather">
      <div class="title">
        {{ result.list[0].temp.day }}°C
        {{ result.list[0].weather[0].main }}
      </div>
      <div class="temperature">
        <div class="min-max">
          <span class="arrow">↓</span>{{result.list[0].temp.min}}
          <span class="arrow">↑</span>{{result.list[0].temp.max}}
        </div>
        <div class="apparent">
          Sensação: {{ result.list[0].feels_like.day }}°C
        </div>
      </div>
      <div class="air-data">
        <span>Vento <strong>{{result.list[0].speed}}km/h</strong></span>
        <span>Humidade <strong>{{result.list[0].humidity}}%</strong></span>
      </div>
    </div>
    <hr>
    <div class="future-weather">
      <div v-for="day in result.list.slice(1)" :key="day.dt"
        class="weekday"
      >
        <div class="name">
          {{new Date(day.dt * 1000)
            .toLocaleString("default", { weekday: "short" })}}
        </div>
        <div class="min-max">
          {{Math.floor(day.temp.min)}}° {{Math.ceil(day.temp.max)}}°
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['result'],
});
</script>

<style>
.weather-results {
  width: calc(400px - 2.25rem);
  padding: 0.75rem 2rem;
  background-color: lightgoldenrodyellow;
  color: #363636;
}
.weather-results > .city-name {
  font-size: 0.75rem;
  font-weight: bold;
}
.current-weather > .title {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}
.current-weather > .temperature {
  display: flex;
  margin-bottom: 1rem;
}
.current-weather > .air-data > span:last-child {
  margin-left: 1.2rem;
}
.temperature > .min-max {
  font-weight: bold;
  margin-right: 2rem;
}
.temperature > .min-max > .arrow {
  color: blue;
}
hr {
  color: darkblue;
  margin: 0.5rem -0.75rem;
}
.weather-results > .future-weather {
  display: flex;
  justify-content: space-between;
}
.weekday > .name {
  font-weight: bold;
  text-transform: capitalize;
}
.weekday > .min-max {
  font-weight: bold;
  color: blue;
  font-size: 0.75rem;
}
</style>
