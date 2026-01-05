<template>
  <main>
    <div v-if="isModel">
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
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";

const isModel = ref(true);
const formData = reactive({
  userName: "",
  age: "",
  profession: "",
  email: "",
});

const onSubmit = () => {
  isModel.value = false;
};
</script>
<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  margin-top: -600px;
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
</style>

<style scoped></style>
