import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import Users from "../../src/components/users.vue";
import { useUserStore } from "../../src/stores/userStore";

describe("Users.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders page title", () => {
    const wrapper = mount(Users);

    expect(wrapper.text()).toContain("Users");
  });

  it("shows loader when loading is true", () => {
    const store = useUserStore();
    store.loading = true;

    const wrapper = mount(Users);

    expect(wrapper.text()).toContain("Loading...");
  });

  it("shows error message when error exists", () => {
    const store = useUserStore();

    store.error = "Something went wrong";

    const wrapper = mount(Users);

    expect(wrapper.text()).toContain("Something went wrong");
  });
});
