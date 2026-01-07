<template>
  <section class="overlay" v-if="showModal" @click="oncancel">
    <div class="modal" @click.stop>
      <div class="title-x">
        <h2 class="title">Registration Form</h2>
        <span class="title" @click="oncancel">X</span>
      </div>

      <!-- Global Error -->
      <div v-if="globalError" class="global-error-banner">
        {{ globalError }}
      </div>

      <form @submit.prevent="onSubmitForm">
        <!--  Name + Email -->
        <div class="row">
          <div class="field">
            <label for="name">Full Name</label>
            <Field
              id="name"
              type="text"
              placeholder="Full Name"
              name="fullName"
              aria-required="true"
              :aria-invalid="errors.fullName ? 'true' : 'false'"
              aria-describedby="error-fullName"
            />
            <ErrorMessage name="fullName" class="error" id="error-fullName" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <Field
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              aria-required="true"
              :aria-invalid="errors.email ? 'true' : 'false'"
              aria-describedby="error-email"
            />
            <ErrorMessage name="email" class="error" id="error-email" />
          </div>
        </div>

        <!--  Password + DOB -->
        <div class="row">
          <div class="field">
            <label for="password">Password</label>
            <Field
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              aria-required="true"
              :aria-invalid="errors.password ? 'true' : 'false'"
              aria-describedby="error-password"
            />
            <ErrorMessage name="password" class="error" id="error-password" />
          </div>
          <div class="field">
            <label for="dob">Date of Birth</label>
            <Field
              id="dob"
              type="date"
              name="dob"
              aria-required="true"
              :aria-invalid="errors.dob ? 'true' : 'false'"
              aria-describedby="error-dob"
            />
            <ErrorMessage name="dob" class="error" id="error-dob" />
          </div>
        </div>

        <!-- Gender + Interests -->
        <div class="row">
          <div class="field">
            <fieldset
              class="inline"
              aria-required="true"
              :aria-invalid="errors.gender ? 'true' : 'false'"
              aria-describedby="error-gender"
            >
              <legend>Gender</legend>
              <label
                ><Field type="radio" name="gender" value="male" /> Male</label
              >
              <label
                ><Field type="radio" name="gender" value="female" />
                Female</label
              >
            </fieldset>
            <ErrorMessage name="gender" class="error" id="error-gender" />
          </div>

          <div class="field">
            <fieldset
              class="inline"
              aria-required="true"
              :aria-invalid="errors.interests ? 'true' : 'false'"
              aria-describedby="error-interests"
            >
              <legend>Interests</legend>
              <label
                ><Field type="checkbox" value="coding" name="interests" />
                Coding</label
              >
              <label
                ><Field type="checkbox" value="trading" name="interests" />
                Trading</label
              >
              <label
                ><Field type="checkbox" value="reading" name="interests" />
                Reading</label
              >
              <label
                ><Field type="checkbox" value="dancing" name="interests" />
                Dancing</label
              >
            </fieldset>
            <ErrorMessage name="interests" class="error" id="error-interests" />
          </div>
        </div>

        <!-- Qualification + Profession -->
        <div class="row">
          <div class="field">
            <fieldset
              aria-required="true"
              :aria-invalid="errors.qualification ? 'true' : 'false'"
              aria-describedby="error-qualification"
            >
              <legend>Qualification</legend>
              <Field id="qualification" name="qualification" as="select">
                <option value="">Select Qualification</option>
                <option value="highSchool" name="qualification">
                  High School
                </option>
                <option value="graduate" name="qualification">Graduate</option>
                <option value="postGradute" name="qualification">
                  Post Graduate
                </option>
              </Field>
            </fieldset>
            <ErrorMessage
              name="qualification"
              class="error"
              id="error-qualification"
            />
          </div>

          <div class="field">
            <label for="profession">Profession</label>
            <Field
              id="profession"
              type="text"
              placeholder="Profession"
              name="profession"
              aria-required="true"
              :aria-invalid="errors.profession ? 'true' : 'false'"
              aria-describedby="error-profession"
            />
            <ErrorMessage
              name="profession"
              class="error"
              id="error-profession"
            />
          </div>
        </div>

        <!-- Country + Contact Number -->
        <div class="row">
          <div class="field">
            <fieldset
              aria-required="true"
              :aria-invalid="errors.country ? 'true' : 'false'"
              aria-describedby="error-country"
            >
              <legend>Country</legend>
              <Field id="country" name="country" as="select">
                <option value="">Select Country</option>
                <option value="india" name="country">India</option>
                <option value="england" name="country">England</option>
                <option value="canada" name="country">Canada</option>
                <option value="america" name="country">America</option>
              </Field>
            </fieldset>
            <ErrorMessage name="country" class="error" id="error-country" />
          </div>
          <div class="field">
            <label for="phone">Contact Number</label>
            <Field
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              aria-required="true"
              :aria-invalid="errors.phone ? 'true' : 'false'"
              aria-describedby="error-phone"
            />
            <ErrorMessage name="phone" class="error" id="error-phone" />
          </div>
        </div>

        <!-- Address (Full Width) -->
        <div class="row full-width">
          <div class="field full-width">
            <label class="group-label">Address</label>

            <div class="address-grid">
              <div class="field">
                <label>Street</label>
                <Field name="address.street" />
                <ErrorMessage name="address.street" class="error" />
              </div>

              <div class="field">
                <label>City</label>
                <Field name="address.city" />
                <ErrorMessage name="address.city" class="error" />
              </div>

              <div class="field">
                <label>State</label>
                <Field name="address.state" />
                <ErrorMessage name="address.state" class="error" />
              </div>

              <div class="field">
                <label>Zip</label>
                <Field name="address.zip" />
                <ErrorMessage name="address.zip" class="error" />
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="btns">
          <button type="button" @click="onReset">Reset</button>
          <button type="submit" :disabled="isSubmitting">Register</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { Field, ErrorMessage, useForm } from "vee-validate";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import * as Yup from "yup";

const { handleSubmit, resetForm, meta, errors, values } = useForm({
  validationSchema: Yup.object({
    fullName: Yup.string().required("Full Name is Required."),
    email: Yup.string().email("Invalid email").required("Email is Required."),
    password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d).+$/,
        "Password must contain at least one letter and one number"
      )
      .required("Password is Required."),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Please select your gender"),
    interests: Yup.array()
      .of(Yup.string())
      .min(1, "Select at least one interest.")
      .max(2, "You can select up to 2 interests")
      .required("Please select at least one interest"),
    qualification: Yup.string().required("Qualification is required"),
    profession: Yup.string()
      .required("Profession is required")
      .min(2, "Profession must be at least 2 characters"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .transform((value) => (value ? value.replace(/\D/g, "") : ""))
      .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
    address: Yup.object({
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zip: Yup.string().required("Zip code is required"),
    }),
  }),
  initialValues: {
    fullName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    interests: [],
    qualification: "",
    profession: "",
    country: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  },
});

const globalError = ref("");
const isSubmitting = ref(false);
const showModal = ref(false);
onMounted(() => {
  showModal.value = true;
});

const router = useRouter();
const oncancel = () => {
  if (unsavedChanges.value) {
    const leave = confirm(
      "You have unsaved changes. Are you sure you want to leave?"
    );
    if (!leave) {
      return;
    }
  }
  showModal.value = false;
  router.push({
    name: "RegisteredUser",
  });
};

const onReset = () => resetForm();

const onSubmitForm = handleSubmit(
  (values) => {
    console.log(values);
    globalError.value = "";
  },
  (errors) => {
    console.log("Errors:", errors);
    isSubmitting.value = "true";
    globalError.value = "Please fill all required fields correctly!";
  }
);

const unsavedChanges = ref(false);
watch(
  values,
  (newValues) => {
    unsavedChanges.value = Object.values(newValues).some((val) => {
      if (Array.isArray(val)) return val.length > 0;
      return val !== "" && val != null;
    });
  },
  { deep: true }
);
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-y: auto;
  z-index: 1000;
}

.modal {
  background: #fff;
  width: 750px;
  max-width: 95%;
  padding: 25px 30px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin-top: 2em;
}
.title-x {
  display: flex;
  justify-content: space-between;
}
.title {
  margin-bottom: 20px;
  font-size: 1.6rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.field {
  flex: 1 1 48%;
  display: flex;
  flex-direction: column;
}

.field.full-width {
  flex: 1 1 100%;
}

label,
legend {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
}
fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-inline-size: unset;
}

input,
select,
textarea {
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.inline {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 3px;
}
.btns {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 8px;
}
.btns button {
  padding: 12px 20px;
  background-color: #2563eb;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  min-width: 100px;
}

.btns button:hover {
  background-color: #1e40af;
}

button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
  color: #f1f5f9;
}

.error {
  color: #dc2626;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}

.group-label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

.address-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.global-error-banner {
  background-color: #fde2e2;
  color: #b91c1c;
  border-left: 5px solid #f87171;
  padding: 12px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 15px;
  animation: fadeIn 0.3s ease-in-out;
}

/* Optional: smooth fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .field {
    flex: 1 1 100%;
  }
}

@media (max-width: 480px) {
  .modal {
    padding: 20px 15px;
  }

  .btn button {
    font-size: 14px;
  }
}
</style>
