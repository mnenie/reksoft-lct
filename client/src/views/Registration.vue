<script setup lang="ts">
import AuthProvider from '@/components/auth/AuthProvider.vue';
import SignUpForm from '@/components/auth/SignUpForm.vue';
</script>

<template>
  <AuthProvider>
    <SignUpForm />
  </AuthProvider>
</template>
