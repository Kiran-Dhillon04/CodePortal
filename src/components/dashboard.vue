<template>
  <main>
    <div v-if="isModal">
      <form @submit.prevent="onSubmit">
        <label for="name">Username</label>
        <input
          type="text"
          id="name"
          placeholder="enter your name..."
          v-model="formData.userName"
        />

        <label for="age">Age</label>
        <input
          type="text"
          id="age"
          placeholder="enter your age..."
          v-model="formData.age"
        />

        <label for="profession">Profession</label>
        <input
          type="text"
          id="profession"
          placeholder="your profession..."
          v-model="formData.profession"
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          v-model="formData.email"
        />
        <button type="submit">Submit</button>
      </form>

      <!-- Progress Bar -->
      <section
        v-if="isModal"
        class="progress-layout"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="formStore.progress"
      >
        <p>{{ formStore.progress }}% Completed</p>

        <div class="progress-bar">
          <div
            class="bar-filled"
            :style="{ width: formStore.progress + '%' }"
          ></div>
        </div>
      </section>
    </div>

    <!-- Pop-Up -->
    <section v-if="showPopup" class="popup">
      <h2>{{ message }}</h2>
      <p>
        Thank You, {{ formData.userName }}.Your submission has been received.
      </p>
      <button @click="resetForm">Fill Agin</button>
    </section>
  </main>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useFormStore } from "../stores/formStore";

const formStore = useFormStore();
const showPopup = ref(false);
const message = ref("Form Submitted Successfully!");
const isModal = ref(true);

const formData = reactive({
  userName: "",
  age: "",
  profession: "",
  email: "",
});

formStore.formData = formData;

// const totalFields = ref(4);

// const filledField = computed(() => {
//   return Object.values(formData).filter((value) => value.trim() !== "").length;
// });

// const progress = computed(() => {
//   return Math.round((filledField.value / totalFields.value) * 100);
// });

const resetForm = () => {
  (formData.userName = ""),
    (formData.age = ""),
    (formData.profession = ""),
    (formData.email = ""),
    (isModal.value = true);
  showPopup.value = false;
};

const onSubmit = () => {
  isModal.value = false;
  showPopup.value = true;
};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: auto;
}
form {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 20px;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.progress-layout {
  margin-top: 5px;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 14px;
  margin-bottom: 6px;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}

.bar-filled {
  height: 100%;
  background-color: #007bff;
  width: 0;
  transition: width 0.3s ease;
}

.h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.popup {
  background: #f0f8ff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.popup h2 {
  margin-bottom: 15px;
  color: #007bff;
}

.popup button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}
</style>
