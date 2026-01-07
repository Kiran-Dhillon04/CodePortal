<template>
  <aside class="sidebar">
    <button @click="isOpen = !isOpen">Menu</button>
    <ul v-if="isOpen">
      <li v-for="item in menu" :key="item.id">
        <router-link :to="item.link" class="link" active-class="active">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const menu = ref([
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Dashboard", link: "/dashboard" },
  {
    id: 3,
    name: "Profile",
    link: {
      name: "Profile",
      params: { id: 101 },
      query: { tab: "about", edit: true },
    },
  },
  { id: 4, name: "Settings", link: "/settings" },
  { id: 5, name: "RegisteredUser", link:"/registeredUser"},
]);
const isOpen = ref(true);
</script>

<style scoped>
.sidebar {
  width: auto;
  height:100vh;
  background: lightgray;
  padding: 10px;
}
button {
  margin-bottom: 10px;
}

li {
  margin-bottom: 6px;
}

.link {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
}

.link:hover {
  background: #ddd;
}

:deep(.active) {
  background: #333;
  color: white;
  text-decoration: none;
}
</style>
