<script setup lang="ts">
import AuthForm from '@/components/auth/AuthForm.vue';
import FormTabs from '@/components/auth/FormTabs.vue';
import { Layers2 } from 'lucide-vue-next';
</script>

<template>
  <div class="container relative h-full w-8/12">
    <div class="mx-auto flex h-full w-full flex-col items-center justify-center">
      <div class="flex items-center justify-center absolute top-6 left-8 gap-2">
        <Layers2 class="w-6 h-6" />
        <h1 class="font-medium text-xl">Qupity</h1>
      </div>
      <div class="flex w-[460px] flex-col space-y-2">
        <h2 className="md:text-4xl font-bold">Welcome Back</h2>
        <p class="pb-4 text-sm text-[#72717a] dark:text-zinc-200">
          Enter your info below to sign in your account
        </p>
        <AuthForm />
        <FormTabs />
      </div>
    </div>
  </div>
</template>
