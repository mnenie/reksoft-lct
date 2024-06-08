<template>
  <component :is="$route.meta.layout">
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="['Login', 'Registration']">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </component>
</template>
