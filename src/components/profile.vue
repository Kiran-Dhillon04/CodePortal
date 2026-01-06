<template>
  <section class="profile">
    <h2 class="title">Profile</h2>
    <div class="content">
      <p><strong>UserId: </strong>{{ userId }}</p>
      <p><strong>Active Tab: </strong>{{ activeTab }}</p>
      <p><strong>Edit Mode: </strong>{{ edit }}</p>
    </div>
    <button type="button" @click="goToPostsTab">Go To Posts Tab</button>
    <button type="button" @click="goBack">< Go Back</button>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const userId = computed(() => route.params.id);
const activeTab = computed(() => route.query.tab);
const edit = computed(() => route.query.edit);

const router = useRouter();
const goToPostsTab = () => {
  router.push({
    path: route.path,
    query: {
      tab: "Posts",
      edit: false,
    },
  });
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: antiquewhite;
  border: 2px solid brown;
  border-radius: 8px;
  padding: 1rem;
  gap: 8px;
}
button {
  padding: 5px;
  background-color: brown;
  border-radius: 4px;
  color: antiquewhite;
}
</style>
