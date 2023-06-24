<template>
  <main class="main">
    <h1 class="title">About</h1>
    <div class="users">
      <ul class="users__list">
        <li v-for="admin in admins">{{ admin.name }} | {{ admin.role }}</li>
      </ul>
      <ul class="users__list">
        <li v-for="user in users">{{ user.name }} | {{ user.role }}</li>
      </ul>
      <ul class="users__list">
        <li v-for="mederator in mederator">{{ mederator.name }} | {{ mederator.role }}</li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useCounter } from "../stores/counter";

const counterStore = useCounter();
const admins = computed(() => counterStore.getAdmins);
const users = computed(() => counterStore.getUsers);
const mederator = computed(() => counterStore.getMederator);
</script>

<style>
.users {
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 50px;
}

.users__list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
}

.users__list li {
  font-size: 30px;
  font-weight: 500;
  color: #bbb;
  text-transform: capitalize;
}
</style>
