import { ref, watch, computed } from "vue";

export function useUserSearch(users) {
  const searchQuery = ref("");
  const debouncedQuery = ref("");

  let timeout;
  watch(searchQuery, (val) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      debouncedQuery.value = val;
    }, 500);
  });

  const filteredUsers = computed(() => {
    if (!debouncedQuery.value) return users.value;

    const q = debouncedQuery.value.toLowerCase();
    return users.value.filter(
      (user) =>
        user.name.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q) ||
        user.profession.toLowerCase().includes(q)
    );
  });

  return {
    searchQuery,
    filteredUsers,
  };
}
