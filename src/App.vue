<template>
  <div class="wrapper">
    <Navbar />
    <router-view />
  </div>
</template>

<!-- Composition  -->
<script setup>
import { ref, reactive } from "vue";
import Navbar from "./components/Navbar.vue";

const title = ref("Composition");

const change = () => {
  if (title.value == "Composition") {
    title.value = "Vite";
  } else {
    title.value = "Composition";
  }
};
</script>

<!-- ref() - String Number NaN Null True False (.value = SHART) -->
<!-- reactive() - Object Array (.value = QOYLMIDI) -->

<!-- Options -->
<!-- <script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      title: "Options",
    };
  },
};
</script> -->
