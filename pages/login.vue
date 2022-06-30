<script setup>
import { useAuthStore } from "@/stores/auth"

const store = useAuthStore()

useHead({
  title: 'login',
})
</script>

<template>
  <div>
    <div>login page</div>

    <form-signin v-if="!store.loggedin" />
    <div v-else>already logged as {{ store.userData.email }}</div>
  </div>
</template>
