<script setup lang="ts">

const props = defineProps({
  question: String,
  step: Number,
  modelValue: Number
})

// function increment() {
//   changeValue(value.value + props.step);
// }
//
// function decrement() {
//   changeValue(value.value - props.step);
// }

</script>

<template>
<div class="number-setting">
  <p>{{question}}</p>
  <div class="input-container">
    <button class="input-decrease" @click=""></button>
    <input type="number"/>
    <button class="input-increase" @click=""></button>
  </div>
</div>
</template>

<style scoped>
.number-setting {
  margin: 12px 0 12px;
}

p {
  font-size: 1.1rem;
  margin: 0 0 5px 7px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance: textfield;
}

div.input-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
}

div.input-container:focus-within {
  filter: none;
}

input {
  font-size: 1rem;
  padding: 5px;
  box-sizing: border-box;
  border: 2px solid black;
  outline: none;
}

button {
  width: 2rem;
  background-position: center;
  background-size: contain;
  background-color: white;
  border: 2px solid black;
}

button:hover {
  background-color: #d8d8d8;
}

button:active {
  background-color: #bdbdbd;
}

.input-decrease {
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
  border-right: none;
  background-image: url("/src/assets/icons/left-arrow.png");
}

.input-increase {
  border-top-right-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  border-left: none;
  background-image: url("/src/assets/icons/right-arrow.png");
}


</style>
