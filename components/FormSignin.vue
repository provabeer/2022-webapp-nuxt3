<script setup>

import useAuth from '@/composables/auth'

const { form, onClickToSignin } = useAuth()

</script>

<template>
  <form @submit.prevent="onClickToSignin">
    <label for="email">
      <input type="text" v-model="form.email" />
    </label>

    <label for="password">
      <input type="password" v-model="form.password" />
    </label>

    <button type="submit">Login</button>
  </form>
</template>
