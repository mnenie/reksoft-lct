<script setup lang="ts">
import AuthProvider from '@/components/auth/AuthProvider.vue';
import SignInForm from '@/components/auth/SignInForm.vue';
</script>

<template>
  <AuthProvider>
    <SignInForm />
  </AuthProvider>
</template>
