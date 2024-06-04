<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { vAutoAnimate } from '@formkit/auto-animate/vue';
</script>

<template>
  <form>
    <div class="grid gap-6">
      <div class="grid gap-4">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem v-auto-animate class="grid justify-items-start gap-2">
            <Label for="email"> Email </Label>
            <FormControl>
              <Input v-bind="componentField" id="email" placeholder="user@example.com" type="email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem v-auto-animate class="grid justify-items-start gap-2">
            <Label for="password"> Password </Label>
            <FormControl>
              <Input
                v-bind="componentField"
                id="password"
                placeholder="user_password_example"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <div class="grid gap-2">
        <Button> Sign In with Email </Button>
        <p class="text-sm text-[#72717a] dark:text-zinc-300 text-center">
          Don't have an account?
          <span
            class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-300/80"
          >
            Sign Up Now
          </span>
        </p>
      </div>
    </div>
  </form>
</template>
