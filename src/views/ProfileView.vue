<script setup lang="ts">
import RadioSetting from '@/components/RadioSetting.vue'
import BasicInformationComponent from '@/components/BasicInformationComponent.vue'
import NumberSetting from '@/components/NumberSetting.vue'

const basicInfo = [
  {
    title: "Name",
    value: "Luka",
    options: null
  },
  {
    title: "Surname",
    value: "Rapaic",
    options: null
  },
  {
    title: "Gender",
    value: "Male",
    options: ["Male", "Female", "Other"]
  },
  {
    title: "Date of birth",
    value: "14.07.2003.",
    options: null
  },
  {
    title: "Occupation",
    value: "Software Engineering",
    options: null
  }
]

const questions = [
  {
    question: "Do you want a pet?",
    answers: ["No", "Yes", "I already have a pet"],
    selected: "No"
  },
  {
    question: "How often do you smoke?",
    answers: ["Smoker", "Smoker when drinking", "Non-smoker"],
    selected: "Smoker"
  },
  {
    question: "Do you throw house parties?",
    answers: ["Yes, all the time", "Sometimes", "Rarely", "Never"],
    selected: "Yes, all the time"
  },
  {
    question: "Do you have a partner?",
    answers: ["Yes", "Yes, more than one", "No"],
    selected: "Yes"
  },
  {
    question: "Do you play an instrument?",
    answers: ["No", "Guitar", "Piano", "Drums", "Violin", "Other"],
    selected: "No"
  }
];

const unitType = {
  question: "What type of place would you prefer to live in?",
  answers: ["Apartment", "House", "Other"],
  selected: "Apartment"
}

const budget = {
  question: "How high is your budget?",
  step: 100,
  value: 500
}

</script>

<template>
  <div class="container">
    <div class="container">
      <img src="/src/assets/images/student.png">
      <button>Upload picture</button>
    </div>
<!--    <div>-->
<!--      <img alt="my_profile_photo">-->
<!--      <button>Change profile photo</button>-->
<!--    </div>-->
    <div>
      <table>
        <BasicInformationComponent
          v-for="section in basicInfo"
          :title="section.title"
          :value="section.value"
          :options="section.options"
        ></BasicInformationComponent>
      </table>
      <h1>Lifestyle</h1>
      <RadioSetting v-for="question in questions" :key="question.question"
                          :question="question.question"
                          :answers="question.answers"
                          :selected="question.selected"
                          @update:selected="question.selected = $event"
      />
      <h1>Housing preferences</h1>
      <NumberSetting
        :question="budget.question"
        :step="budget.step"
        :value="budget.value"
        @update:value="budget.value = $event"
      />
      <RadioSetting
        :question="unitType.question"
        :answers="unitType.answers"
        :selected="unitType.selected"
        @update:selected="unitType.selected = $event"
      />
    </div>
    <button>Save</button>
    <button>Delete profile</button>
  </div>
</template>

<style scoped>
.container {
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

th {
  padding-right: 10px;
  text-align: left;
}

h1 {
  margin: 20px 0 10px;
  padding: 0;
}
</style>
