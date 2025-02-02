<template>
  <q-layout view="hHh LpR fFf">
    <!-- Header with Navbar -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Doctor Info</q-toolbar-title>
        <!-- Navbar buttons -->
        <q-btn flat label="Home" to="/" class="q-mr-sm" />
        <q-btn flat label="About" to="/about" class="q-mr-sm" />
        <q-btn flat label="Contact" to="/contact" class="q-mr-sm" />
        <q-btn flat label="Signup" to="/signup" class="q-mr-sm" />
        <q-btn flat label="Login" to="/login" class="q-mr-sm" />
      </q-toolbar>
    </q-header>

    <!-- Main Content Area -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// Any necessary logic
</script>

<style scoped>
/* Optional custom styles */
</style>
