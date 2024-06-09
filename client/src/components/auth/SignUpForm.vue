<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LOGIN_ROUTE } from '@/utils/consts';
import { useAuthStore } from '@/stores/auth';

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: `Поле 'почта' является обязательным для заполнения` })
      .nonempty(`Поле 'почта' является обязательным для заполнения`)
      .email('Адрес электронной почты должен быть действительным'),
    password: z
      .string({ required_error: `Поле 'пароль' является обязательным для заполнения`})
      .nonempty(`Поле 'пароль' является обязательным для заполнения`)
      .min(8, 'Пароль должен содержать не менее 8 символов')
  })
);

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: formSchema
});

const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');

const authStore = useAuthStore();

const onRegistration = handleSubmit(async (values) => {
  authStore.registration({ ...values });
});
</script>

<template>
  <form @submit.prevent="onRegistration">
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
        <Button type="submit"> Зарегистрироваться </Button>
        <p class="text-center text-sm text-[#72717a] dark:text-zinc-300">
          Уже есть аккаунт?
          <span
            class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-300/80"
            @click="$router.push(LOGIN_ROUTE)"
          >
            Войти
          </span>
        </p>
      </div>
    </div>
  </form>
</template>
