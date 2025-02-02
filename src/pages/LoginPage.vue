<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
        <p>Welcome back! Please login to access your account.</p>
      </q-card-section>

      <q-form @submit="submitForm">
        <q-input filled v-model="form.email" label="Email" class="q-mb-md" required type="email" />
        <q-input filled v-model="form.password" label="Password" class="q-mb-md" required type="password" />

        <q-btn label="Login" type="submit" color="primary" class="full-width" />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  email: '',
  password: ''
});

const submitForm = () => {
  console.log('Form submitted', form.value);
};
</script>

<style scoped>
</style>
