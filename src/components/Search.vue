<template>
  <form class="search" @submit.prevent="search">
    <input
      name="cityName"
      class="input"
      type="text"
      placeholder="Insira aqui o nome da cidade"
    />
    <input type="submit" class="icon" value="&#128269;"/>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    search(e: any) {
      this.$emit('search', e.target.cityName.value);
    },
  },
});
</script>

<style>
.search > .input {
  width: 400px;
  padding: 0.75rem;
  border: solid 1px lightgray;
}
.search > .icon {
  cursor: pointer;
  padding: 0.75rem;
  margin-left: -2.75rem;
  border: none;
  background-color: transparent;
}
</style>
