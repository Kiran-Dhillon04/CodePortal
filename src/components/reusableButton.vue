<template>
  <button
    :class="['btn', variant]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "primary" },
  disabled: { type: Boolean, default: false },
});

defineEmits(["click"]);
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
}
.btn.primary {
  background-color: #3498db;
  color: white;
}
.btn.secondary {
  background-color: #f5f5f5;
  color: #333;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
