<script setup>
definePageMeta({
  middleware: 'avoid-loggedoff',
})

useHead({
  title: 'Protected',
})
</script>

<template>
  <div>
    <h1>Protected</h1>
  </div>
</template>
