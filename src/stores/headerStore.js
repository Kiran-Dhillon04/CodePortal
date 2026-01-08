import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
  state: () => ({
    projectName: "CodePortal",
  }),

  actions: {
    handleLogout() {
      alert("Logout Button is Clicked");
    },
  },
});
