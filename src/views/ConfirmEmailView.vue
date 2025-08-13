<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

function confirm() {
  router.push('/login');
}
</script>

<template>
  <div>
    <label id="confirm-code">Confirm code</label>
    <input id="confirm-code" type="text" name="confirm-code"/>
    <button @click="confirm">Confirm</button>
  </div>
</template>

<style scoped>
div {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  width: 95%;
  max-width: 800px;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
}

label {
  font-size: 1.25rem;
  font-family: Calibri;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: Sora;
}

label:first-child {
  margin-top: 0;
}

input {
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
  font-size: 1.1rem;
  box-sizing: border-box;
  padding: 5px;
  font-family: Sora;
}

button {
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
  font-size: 1.25rem;
  font-family: Calibri;
  margin-top: 10px;
  background-color: white;
  padding: 5px;
  font-family: Sora;
}
</style>
