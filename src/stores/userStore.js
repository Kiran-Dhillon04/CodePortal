import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;

      try {
        const res = await fetch(
          "https://api.slingacademy.com/v1/sample-data/users"
        );
        const data = await res.json();

        this.users = data.users.map((user) => ({
          id: user.id,
          name: `${user.first_name} ${user.last_name}`,
          gender: user.gender,
          email: user.email,
          profession: user.job,
          phone: user.phone,
        }));
      } catch (err) {
        this.error = err.message || "Something went wrong!";
      } finally {
        this.loading = false;
      }
    },
  },
});
