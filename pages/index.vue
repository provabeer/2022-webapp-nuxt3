<script setup>
useHead({
  title: 'Teste',
})
</script>

<template>
  <div>
    <div>página indexxxxxxxxx</div>

    <br />

    <div>
      <NuxtLink :to="{ name: 'protected' }">protected page</NuxtLink>
    </div>

    <div>
      <NuxtLink :to="{ name: 'login' }">login page</NuxtLink>
    </div>

    <div>
      <NuxtLink :to="{ name: 'register' }">register page</NuxtLink>
    </div>
  </div>
</template>
