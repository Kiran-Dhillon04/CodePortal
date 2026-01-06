<template>
  <div :class="['settings', { dark: isDark }]">
    <h1>Settings</h1>

    <div class="setting-item">
      <div class="mode">
        <span class="options">Dark Mode</span>
        <button @click="toggleTheme">
          {{ isDark ? "ON" : "OFF" }}
        </button>
      </div>

      <div class="noitification">
        <router-link :to="{name:'Notifications'}" class="link">
          <span class="options">Notifications</span></router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showNotification = ref(false);
const isDark = ref(false);

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    isDark.value = true;
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};
</script>

<style scoped>
.settings {
  min-width: 40%;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #333;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.settings.dark {
  background-color: #333;
  color: #f5f5f5;
  min-width: 40%;
}
.mode {
  display: flex;
  justify-content: space-between;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

button {
  display: flex;
  justify-content: center;
  height: 25px;
  width: 50px;
  text-align: center;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3d3939;
  color: white;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}

.settings.dark button {
  background-color: #1a73e8;
}

.link {
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.noitification {
  margin-top: 10px;
}

.options {
  font-weight: 600;
  text-decoration: none;
  color: #007bff;
}

.options:hover {
  background-color: #f0e7e7;
}
</style>
