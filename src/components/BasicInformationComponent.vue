<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: String,
  value: String,
  options: Array<string>
})
</script>

<template>
<tr>
  <th>{{title}}</th>
  <td>
    <input v-if="options === null" :value="value">
    <select v-else-if="options.length > 0">
      <option v-for="option in options">{{option}}</option>
    </select>
  </td>
</tr>
</template>

<style scoped>
tr {
  text-align: left;
}

input {
  font-size: 1rem;
  border: none;
  padding: 5px;
}

input:focus {
  outline: 1px solid black;
}
</style>
