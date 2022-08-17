<script setup>
definePageMeta({
  middleware: 'avoid-loggedin',
})

useHead({
  title: 'Login',
})
</script>

<template>
  <div>
    <h1>Login</h1>
    <form-signin />
  </div>
</template>
