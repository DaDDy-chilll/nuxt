<!-- <script setup>  
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
</template> -->

<script setup lang="ts">
const counter = useCount();
// const counterStore = useCounterStore();
// const { data:jobs } = await useFetch('/hello',{transform:(_jobs) => _jobs.data});
// const { data:jobs,pending } = await useLazyFetch('/hello');
const { data:count,pending } = await useAsyncData('count',() => $fetch('/hello'));

const refreshCount = () => refreshNuxtData('count');
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>

    <div>
      <!-- <pre>{{ pending ? 'loading...' : jobs }}</pre> -->
      <pre>{{ pending ? 'loading...' : count }}</pre>
    </div>
    <button @click="refreshCount">Refresh</button>
  </div>
</template>