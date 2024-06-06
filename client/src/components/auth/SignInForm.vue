<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { REGISTRATION_ROUTE } from '@/utils/consts';
import { useAuthStore } from '@/stores/auth';

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: 'Email is a required field' })
      .nonempty('Email is a required field')
      .email('Email must be a valid'),
    password: z
      .string({ required_error: 'Password is a required field' })
      .nonempty('Password is a required field')
      .min(8, 'Password must be at least 8 characters')
  })
);

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: formSchema
});

const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');

const authStore = useAuthStore();
</script>

<template>
  <form>
    <div class="grid gap-6">
      <div class="grid gap-4">
        <FormField v-slot="{ componentField }" :validate-on-blur="!isFieldDirty" name="email">
          <FormItem v-auto-animate class="grid justify-items-start gap-2">
            <Label for="email"> Почта </Label>
            <FormControl>
              <Input
                v-model="email"
                v-bind="componentField"
                id="email"
                placeholder="user@example.com"
                type="email"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" :validate-on-blur="!isFieldDirty" name="password">
          <FormItem v-auto-animate class="grid justify-items-start gap-2">
            <Label for="password"> Пароль </Label>
            <FormControl>
              <Input
                v-model="password"
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
        <Button type="submit"> Войти</Button>
        <p class="text-center text-sm text-[#72717a] dark:text-zinc-300">
          Ещё нет аккаунта?
          <span
            class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-300/80"
            @click="$router.push(REGISTRATION_ROUTE)"
          >
            Зарегистрируйтесь
          </span>
        </p>
      </div>
    </div>
  </form>
</template>
