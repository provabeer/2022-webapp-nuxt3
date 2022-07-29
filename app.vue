<script setup>
import { useCookie } from '#app'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const userOnCookie = useCookie('user')
store.setUser(userOnCookie.value)

console.log('app.vue')
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
