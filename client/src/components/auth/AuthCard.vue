<script setup lang="ts">
import AuthForm from './AuthForm.vue';
</script>

<template>
  <div class="container relative h-full w-1/2">
    <div class="mx-auto flex h-full w-1/2 flex-col items-center justify-center">
      <div class="flex w-[460px] flex-col space-y-2 text-center">
        <h2 className="text-gravel md:text-4xl font-bold">Login</h2>
        <p className="text-iridium md:text-sm">You will receive a one time password</p>
        <p class="pb-4 text-sm text-[#72717a] dark:text-zinc-200">
          Enter your info below to sign in your account
        </p>
        <AuthForm />
      </div>
    </div>
  </div>
</template>
