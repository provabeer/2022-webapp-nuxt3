<script setup>

import useAuth from '@/composables/auth'

const { form, onClickToSignup } = useAuth()

</script>

<template>
  <form @submit.prevent="onClickToSignup">
    <label for="email">
      <input type="text" v-model="form.email" />
    </label>

    <label for="password">
      <input type="password" v-model="form.password" />
    </label>

    <button type="submit">Register</button>
  </form>
</template>
