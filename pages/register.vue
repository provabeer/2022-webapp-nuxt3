<script setup>
definePageMeta({
  middleware: 'avoid-loggedin',
})

useHead({
  title: 'Register',
})
</script>

<template>
  <div>
    <h1>Register</h1>
    <form-signup />
  </div>
</template>
