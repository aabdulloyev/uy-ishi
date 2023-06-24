<template>
  <main class="main">
    <h1 class="title">Home</h1>
    <div class="counter">
      <h2>{{ count }}</h2>
      <div class="counter__btns">
        <button @click="minus">-</button>
        <button @click="plus">+</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useCounter } from "../stores/counter";

const counterStore = useCounter();
const count = computed(() => counterStore.count);
const plus = () => counterStore.plusCount();
const minus = () => counterStore.minusCount();
</script>

<style>
.counter {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.counter h2 {
  font-size: 80px;
  font-weight: 700;
  color: #bbb;
}

.counter__btns {
  display: flex;
  column-gap: 20px;
  align-items: center;
}

.counter__btns button {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #bbb;
  color: #333;
  font-size: 45px;
  font-weight: 500;
}
</style>
