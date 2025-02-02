<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <!-- Page Content -->
      <q-page padding>
        <q-input v-model="search.location" label="Search by location" class="q-mb-md" outlined dense />
        <q-input v-model="search.specialization" label="Search by specialization" class="q-mb-md" outlined dense />

        <q-list bordered separator>
          <q-item v-for="doctor in filteredDoctors" :key="doctor.id" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{ doctor.name }}</q-item-label>
              <q-item-label caption>{{ doctor.specialization }} - {{ doctor.location }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue';

const doctors = ref([
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', location: 'Dhaka' },
  { id: 2, name: 'Dr. Sarah Khan', specialization: 'Dermatologist', location: 'Chittagong' },
]);

const search = ref({ location: '', specialization: '' });

const filteredDoctors = computed(() =>
  doctors.value.filter(doctor =>
    doctor.location.toLowerCase().includes(search.value.location.toLowerCase()) &&
    doctor.specialization.toLowerCase().includes(search.value.specialization.toLowerCase())
  )
);
</script>
