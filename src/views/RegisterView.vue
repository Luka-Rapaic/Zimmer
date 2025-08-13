<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter();

function onContinue() {
  router.push('/confirm-email');
}
</script>

<template>
  <form>
    <label for="email">Email</label>
    <input id="email" type="text" name="email" required />

    <label for="password">Password</label>
    <input id="password" type="text" name="password" required />

    <label for="password_confirmation">Confirm Password</label>
    <input id="password_confirmation" type="text" name="password_confirmation" required />

    <button @click="onContinue">Submit</button>
  </form>
</template>

<style scoped>
form {
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
