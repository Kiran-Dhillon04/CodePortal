<template>
  <div class="notfound">
    <div class="banner">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn’t exist.</p>
      <router-link to="/" class="home-link">Go to Home</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.notfound {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #f5f5f5;
  font-family: Arial, sans-serif;
  margin: auto;
}

.banner {
  text-align: center;
  background-color: #ffe5e5;
  padding: 40px;
  border-radius: 10px;
  border: 2px solid #ff4d4d;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.banner h1 {
  font-size: 80px;
  margin: 0;
  color: #ff4d4d;
}

.banner h2 {
  font-size: 28px;
  margin: 10px 0;
}

.banner p {
  font-size: 16px;
  margin-bottom: 20px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: 0.2s;
}

.home-link:hover {
  background-color: #e60000;
}
</style>
