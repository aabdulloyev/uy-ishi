<template>
  <header class="header">
    <nav class="navbar">
      <router-link class="navbar__logo" to="/">logo</router-link>
      <ul class="navbar__list">
        <li v-for="link in list">
          <router-link class="navbar__link" :to="link.path">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, reactive } from "vue";

const list = reactive([
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
]);
</script>

<style>
.navbar {
  height: 90px;
  background: #bbb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
}

.navbar__logo {
  font-size: 30px;
  color: #333;
  font-weight: 700;
  text-transform: uppercase;
}

.navbar__list {
  display: flex;
  align-items: center;
  column-gap: 30px;
}

.navbar__link {
  font-size: 25px;
  font-weight: 500;
  color: #333;
  text-transform: capitalize;
}

.navbar__link.router-link-exact-active {
  border-bottom: 3px green dotted;
}
</style>
