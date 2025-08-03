<script setup lang="ts">

</script>

<template>
  <div>
    <img alt="my_profile_photo">
    <button>Change profile photo</button>
    <label for="name">Name</label>
    <input id="name" v-model="name" type="text">
    <label for="age">Age</label>
    <input id="age">
    <label for="faculty">Faculty</label>
    <input id="faculty">
    <label for="phone">Phone</label>
    <input id="phone">
    <button>Save</button>
  </div>
</template>

<style scoped>

</style>
