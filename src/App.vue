<template>
  <Header :appName="projectName" @logout="handleLogout()"></Header>
  <div class="siblings">
    <Sidebar></Sidebar>
    <Dashboad></Dashboad>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Dashboad from "./components/Dashboad.vue";

const projectName = ref("CodePortal");
const handleLogout = () => {
  return alert("Logout Button is Clicked");
};
</script>

<style scoped></style>
