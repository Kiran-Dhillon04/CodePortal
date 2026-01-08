<template>
  <main class="container">
    <section class="card">
      <h1 class="title">Vuex Practice Dashboard</h1>
      <p class="subtitle">Learn how global state works in Vue using Vuex</p>

      <!-- Counter Display -->
      <div class="counter-box">
        <p class="label">Current Count</p>
        <h2 class="count">{{ count }}</h2>
        <p class="info">Double Count: {{ doubleCount }}</p>
      </div>

      <!-- Message -->
      <div class="message-box">
        <p class="label">Global Message</p>
        <p class="message">{{ message }}</p>
      </div>

      <!-- Actions -->
      <div class="actions">
        <button class="btn" @click="increment">Increment</button>
        <button class="btn danger" @click="decrement" :disabled="count === 0">
          Decrement
        </button>
        <button class="btn secondary" @click="incrementAsync">
          Increment After 1s
        </button>
        <button class="btn outline" @click="changeMessage">
          Change Message
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.count);
const message = computed(() => store.state.message);
const doubleCount = computed(() => store.getters.doubleCount);

const increment = () => store.commit("increment");
const decrement = () => store.commit("decrement");

const incrementAsync = () => store.dispatch("incrementAsync");

const changeMessage = () => {
  store.commit("setMessage", "Vuex state updated successfully ");
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: system-ui, sans-serif;
  margin: auto;
}

.card {
  width: 420px;
  background: white;
  padding: 28px;
  border-radius: 14px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 20px;
}

.counter-box {
  background: #f1f5f9;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  margin-bottom: 16px;
}

.count {
  font-size: 2.4rem;
  margin: 6px 0;
  color: #2563eb;
}

.info {
  font-size: 14px;
  color: #475569;
}

.message-box {
  background: #ecfeff;
  border-left: 4px solid #06b6d4;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 18px;
}

.message {
  font-weight: 500;
  color: #0f172a;
}

.label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.btn {
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #2563eb;
  color: white;
  font-weight: 500;
}

.btn:hover {
  background: #1d4ed8;
}

.btn.secondary {
  background: #0ea5e9;
}

.btn.secondary:hover {
  background: #0284c7;
}

.btn.danger {
  background: #dc2626;
}

.btn.danger:hover {
  background: #b91c1c;
}

.btn.outline {
  background: transparent;
  border: 1px solid #2563eb;
  color: #2563eb;
}

.btn.outline:hover {
  background: #2563eb;
  color: white;
}

.btn:disabled {
  background: #cbd5f5;
  cursor: not-allowed;
}
</style>
