<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  question: String,
  answers: Array<string>,
  selected: String
})

const emit = defineEmits(['update:selected'])

const selected = ref(props.selected)

function selectAnswer(answer) {
  selected.value = answer
  emit('update:selected', answer)
}
</script>

<template>
<div>
  <p>{{question}}</p>
  <ul>
    <li
      v-for="answer in answers"
      @click="selectAnswer(answer)"
      :class="selected === answer ? 'selected' : ''"
    >{{answer}}</li>
  </ul>
</div>
</template>

<style scoped>
div {
  margin: 12px 0 12px;
}

p {
  font-size: 1.1rem;
  margin: 0 0 5px 7px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
}

li {
  border: 2px solid #a3a3a3;
  border-radius: 1.1rem;
  font-size: 1rem;
  color: #a3a3a3;
  padding: 5px;
  cursor: pointer;
}

li.selected {
  border-color: black;
  color: black;
}

</style>
