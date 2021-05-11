<template>
  <div class="highlights">
    <h2>Capitais</h2>
    <table class="capitais">
      <tr>
        <th>Min</th>
        <th>Max</th>
        <th></th>
        <th>Min</th>
        <th>Max</th>
        <th></th>
      </tr>
      <tr>
        <td>30°</td>
        <td>50°</td>
        <td>Rio de Janeiro</td>
        <td>30°</td>
        <td>50°</td>
        <td>Rio de Janeiro</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style>
.capitais {
  width: 380px;
}
.capitais th {
  text-align: left;
  font-size: 0.75rem;
  color: #3a3a3a;
}
.capitais td {
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #202020;
}
.highlights > h2 {
  color: #fff;
  margin-bottom: 1rem;
}
</style>
