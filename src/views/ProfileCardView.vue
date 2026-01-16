<script setup lang="ts">

</script>

<template>
<div class="card">
  <img src="/src/assets/images/student.png">
  <h1>Lana</h1>
  <table>
    <tr>
      <th>Gender</th>
      <td>Female</td>
    </tr>
    <tr>
      <th>Date of birth</th>
      <td>14.07.2003</td>
    </tr>
    <tr>
      <th>Occupation</th>
      <td>Software Engineer</td>
    </tr>
  </table>
  <h2>Lifestyle</h2>
  <ul>
    <li>Has a pet</li>
    <li>Smoker</li>
    <li>Parties all the time</li>
    <li>Has a partner</li>
    <li>Plays guitar</li>
  </ul>
  <h2>Housing preferences</h2>
  <ul>
    <li>500$</li>
    <li>Apartment</li>
  </ul>
</div>
</template>

<style scoped>
.card {
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

table {
  text-align: left;
}

h1 {
  margin: 20px 0 10px;
  padding: 0;
}

h2 {
  margin: 15px 0 10px;
  padding: 0;
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
  border: 2px solid black;
  border-radius: 1.1rem;
  font-size: 1rem;
  color: black;
  padding: 5px;
}
</style>
