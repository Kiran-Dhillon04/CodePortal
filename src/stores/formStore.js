import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    formData: {},
  }),

  getters: {
    flatValues: (state) => {
      const flatten = (obj) =>
        Object.values(obj).flatMap((val) => {
          if (Array.isArray(val)) return val;
          if (val && typeof val === "object") return flatten(val);
          return [val];
        });
      return flatten(state.formData);
    },
    filledField: (state) => {
      return state.flatValues.filter((v) =>
        Array.isArray(v) ? v.length > 0 : v !== "" && v != null
      ).length;
    },

    totalFields: (state) => {
      const flatten = (obj) =>
        Object.values(obj).flatMap((val) => {
          if (Array.isArray(val)) return val.length > 0 ? val : [null];
          if (val && typeof val === "object") return flatten(val);
          return [val];
        });
      return flatten(state.formData).length || 1;
    },
    progress(state) {
      return Math.round((this.filledField / state.totalFields) * 100);
    },
  },

  actions: {
    syncFormData(payload) {
      this.formData = JSON.parse(JSON.stringify(payload));
    },
  },
});
