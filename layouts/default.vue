<script setup>

console.log("default.vue")

import useAuth from '@/composables/auth'
import { useAuthStore } from '@/stores/auth'

const { onClickToSignout } = useAuth()
const store = useAuthStore()

</script>

<template>
  <div class="w-90% mx-auto">
    <ul class="flex justify-between list-none bg-yellow-300 p-4">
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
      <li v-if="store.loggedin">
        <button @click="onClickToSignout">Signout</button>
      </li>
    </ul>
    <slot />
    <pre v-if="store.loggedin" class="bg-warm-gray-200 bottom-0 absolute left-0 w-full overflow-y-hidden">User: {{ store.userData }}</pre>
  </div>
</template>
