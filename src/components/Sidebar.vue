<template>
  <aside class="sidebar">
    <button @click="isOpen = !isOpen">Menu</button>
    <ul v-if="isOpen">
      <li
        v-for="(item, index) in menu"
        :key="index"
        :class="{ active: activeMenu === index }"
        @click="activeMenu = index"
      >
        {{ item }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const menu = ["Dashboard", "Profile", "Settings"];
const isOpen = ref(true);
const activeMenu = ref(0);


</script>

<style scoped>
.sidebar {
  width: 200px;
  height:91vh ;
  background: lightgray;
  padding: 10px;
}
button {
  margin-bottom: 10px;
}

li {
  cursor: pointer;
  padding: 6px;
}

li.active {
  background: #333;
  color: white;
}
</style>
