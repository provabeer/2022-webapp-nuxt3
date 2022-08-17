<script setup>
import useAuth from '@/composables/auth'
import { useAuthStore } from '@/stores/auth'

const { onClickToSignout } = useAuth()
const store = useAuthStore()
</script>

<template>
  <div class="w-90% mx-auto">
    <ul class="flex justify-between list-none bg-yellow-300 p-8">
      <li>
        <NuxtLink :to="{ name: 'index' }">Index</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'protected' }">Protected</NuxtLink>
      </li>

      <template v-if="!store.loggedin">
        <li>
          <NuxtLink :to="{ name: 'login' }">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'register' }">Register</NuxtLink>
        </li>
      </template>

      <template v-else>
        <li>
          <button @click="onClickToSignout">Signout</button>
        </li>
      </template>
    </ul>

    <slot></slot>
  </div>
</template>
