<script setup lang="ts">
import AuthProvider from '@/components/auth/AuthProvider.vue';
import RoleForm from '@/components/auth/RoleForm.vue';
</script>

<template>
  <AuthProvider>
    <RoleForm />
  </AuthProvider>
</template>
