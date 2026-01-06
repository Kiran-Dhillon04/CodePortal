<template>
  <header class="main-container">
    <section class="sub-container">
      <h1>{{ appName }}</h1>
      <button type="button" class="logout" @click="onLogout()">Logout</button>
    </section>
  </header>
</template>

<script setup>
const props = defineProps({
  appName: String,
});

const emit = defineEmits(["logout"]);

const onLogout = () => {
  emit("logout");
};
</script>

<style scoped>
.main-container {
  background-color: rgb(112, 11, 11);
  color: rgb(244, 236, 226);
}
.sub-container {
  max-width: auto;
  margin: auto 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logout{
  font-size: 1.5rem;
  color: rgb(244, 236, 226);
  font-weight: 400;
  outline: none;
  background-color: rgb(112, 11, 11);
}
</style>
