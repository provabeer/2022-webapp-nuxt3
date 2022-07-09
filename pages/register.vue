<script setup>
import { useAuthStore } from "@/stores/auth"

const store = useAuthStore()

useHead({
  title: 'Register',
})
</script>

<template>
  <div>
    <h1>Register</h1>

    <form-signup v-if="!store.loggedin" />
    <div v-else>Already logged as {{ store.userData.email }}</div>
  </div>
</template>
