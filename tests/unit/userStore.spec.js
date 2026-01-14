import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useUserStore } from "../../src/stores/userStore";

describe("useUserStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initial state should be correct", () => {
    const store = useUserStore();

    expect(store.users).toEqual([]);
    expect(store.loading).toBe(false);
    expect(store.error).toBe(null);
  });

  it("sets loading to true when fetchUsers is called", async () => {
    const store = useUserStore();

    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve({ users: [] }),
      });

    const promise = store.fetchUsers();

    expect(store.loading).toBe(true);

  });

  it("sets error when fetch fails", async () => {
    const store = useUserStore();

    global.fetch = async () => {
      throw new Error("API error");
    };

    await store.fetchUsers();

    expect(store.error).toBe("API error");
    expect(store.loading).toBe(false);
  });
});
