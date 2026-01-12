<template>
  <div class="page">
    <!-- Header -->
    <header class="page-header">
      <div class="header-left">
        <h1>Users</h1>
        <p>List of registered users</p>
      </div>

      <div class="header-right">
        <input
          type="search"
          v-model="searchQuery"
          placeholder="Search by name, email or profession"
        />
      </div>
    </header>

    <!-- Loader -->
    <div v-if="userStore.loading" class="loader">
      <p>Loading...</p>
    </div>

    <!-- Error -->
    <div v-if="userStore.error" class="error-message">
      {{ userStore.error }}
    </div>

    <!-- Table -->
    <section
      class="table-section"
      v-if="!userStore.loading && !userStore.error"
    >
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Profession</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.profession }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const searchQuery = ref("");

const debouncedQuery = ref("");
let timeout;
watch(searchQuery, (val) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    debouncedQuery.value = val;
  }, 500);
});

onMounted(() => {
  userStore.fetchUsers();
});

const filteredUsers = computed(() => {
  if (!debouncedQuery.value) return userStore.users;
  const q = debouncedQuery.value.toLocaleLowerCase();
  return userStore.users.filter(
    (user) =>
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.profession.toLowerCase().includes(q)
  );
});
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.error-message {
  text-align: center;
  padding: 20px;
  color: red;
  font-weight: bold;
}
.page {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
  font-family: Arial, sans-serif;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  color: #222;
}

.page-header p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
}

.table-section {
  width: 100%;
  overflow-x: auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
}

.user-table th,
.user-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  white-space: nowrap;
}

.user-table thead {
  background-color: #f5f7fa;
}

.user-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}

.user-table tbody tr:hover {
  background-color: #eef3ff;
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .user-table {
    min-width: 600px;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 10px;
  }

  .page-header h1 {
    font-size: 20px;
  }

  .user-table {
    min-width: 500px;
  }
}
</style>
