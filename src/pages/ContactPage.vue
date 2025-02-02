<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">Contact Us</div>
        <p>If you have any questions, feel free to reach out to us!</p>
      </q-card-section>

      <q-form @submit="submitForm">
        <q-input filled v-model="form.name" label="Your Name" class="q-mb-md" required />
        <q-input filled v-model="form.email" label="Your Email" class="q-mb-md" required type="email" />
        <q-input filled v-model="form.message" label="Your Message" class="q-mb-md" required type="textarea" />

        <q-btn label="Submit" type="submit" color="primary" class="full-width" />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted', form.value);
};
</script>

<style scoped>
</style>
