<template>
  <div class="notifications">
    <div 
      v-for="(note, index) in notifications" 
      :key="index" 
      class="notification-item"
    >
      {{ note }}
    </div>
  </div>
</template>

<script setup>
const notifications = [
  "Don’t forget your meeting at 3:00 PM today.",
  "You’re only 1 workout away from your weekly goal!",
  "Your order #12345 has been shipped"
];
</script>

<style scoped>
.notifications {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.notification-item {
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #f5f5f5;
  border-left: 4px solid #1a73e8;
  font-size: 14px;
  color: #333;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.notification-item:hover {
  background-color: #e0e7ff;
}
</style>
