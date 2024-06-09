<script setup lang="ts">
import AuthProvider from '@/components/auth/AuthProvider.vue';
import TagsForm from '@/components/auth/TagsForm.vue';
</script>

<template>
  <AuthProvider>
    <TagsForm />
  </AuthProvider>
</template>
