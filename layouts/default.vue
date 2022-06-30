<script setup>
import useAuth from '@/composables/auth'
import { useAuthStore } from '@/stores/auth'

const { onClickToSignout } = useAuth()
const store = useAuthStore()
</script>

<template>
  <div>
    <NuxtLink :to="{ name: 'index' }">index</NuxtLink>
    <br>
    <br>
    <button @click="onClickToSignout">Signout</button>
    <br />
    <br />
    <slot />

    <hr>
    <pre v-if="store.user">User: {{ store.userData }}</pre>
  </div>
</template>
