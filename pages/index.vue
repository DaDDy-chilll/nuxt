<script setup>  
definePageMeta({
  middleware: 'custom'
})
const { $sayHello } = useNuxtApp();
$sayHello('World');
</script>

<template>
  <div class="Main">
    <h1>Home Page</h1>
    <IconsBell />
    <img src="/post.png" alt="logo" />
  </div>
</template>