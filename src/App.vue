<template>
  <Header></Header>
  <div class="siblings" style="display: flex; gap: 20px;">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import Sidebar from "./components/sidebar.vue";

</script>

<style scoped></style>
