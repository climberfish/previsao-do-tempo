<template>
  <div class="container">
    <h1>Previsão do Tempo</h1>
    <WeatherResults v-if="result" :result="result" />
    <Search @search="search" />
    <hr width="100%">
    <Highlights />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherResults from './components/WeatherResults.vue';
import Highlights from './components/Highlights.vue';
import Search from './components/Search.vue';
import api from './api';

export default defineComponent({
  name: 'App',
  data(): any {
    return {
      result: null,
    };
  },
  components: { WeatherResults, Highlights, Search },
  methods: {
    async search(text: string) {
      this.result = await api.getCityWeather(text);
    },
  },
});
</script>

<style>
.container {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container > * {
  margin-top: 2rem;
}
.container h1 {
  color: #fff;
}

html {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
  font-family: inherit;
}
#app {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(
    130deg,
    rgba(39,142,255,1) 11.2%,
    rgba(98,113,255,0.78) 100.2%
  );
}
</style>
