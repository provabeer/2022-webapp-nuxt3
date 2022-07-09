<script setup>
import { useAuthStore } from "@/stores/auth"

const store = useAuthStore()

useHead({
  title: 'Login',
})
</script>

<template>
  <div>
    <h1>Login</h1>

    <form-signin v-if="!store.loggedin" />
    <div v-else>Already logged as {{ store.userData.email }}</div>
  </div>
</template>
