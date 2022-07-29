<script setup>
definePageMeta({
  middleware: 'avoid-loggedin',
})

useHead({
  title: 'Login',
})

console.log('pagina login')
</script>

<template>
  <div>
    <h1>Login</h1>
    <form-signin />
  </div>
</template>
