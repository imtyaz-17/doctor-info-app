<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">Sign Up</div>
        <p>Create an account to access the Doctor Info services.</p>
      </q-card-section>

      <q-form @submit="submitForm">
        <q-input filled v-model="form.username" label="Username" class="q-mb-md" required />
        <q-input filled v-model="form.email" label="Email" class="q-mb-md" required type="email" />
        <q-input filled v-model="form.password" label="Password" class="q-mb-md" required type="password" />
        <q-input filled v-model="form.confirmPassword" label="Confirm Password" class="q-mb-md" required type="password" />

        <q-btn label="Sign Up" type="submit" color="primary" class="full-width" />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const submitForm = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  console.log('Form submitted', form.value);
  // You can add signup logic here (e.g., send data to an API)
};
</script>

<style scoped>
/* Custom styles can go here */
</style>
