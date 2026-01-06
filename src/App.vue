<template>
  <Header :appName="projectName" @logout="handleLogout"></Header>
  <div class="siblings" style="display: flex; gap: 20px;">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/header.vue";
import Sidebar from "./components/sidebar.vue";

const projectName = ref("CodePortal");
const handleLogout = () => {
  return alert("Logout Button is Clicked");
};
</script>

<style scoped></style>
