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
useHead({
  title: 'Home Page',
  meta: [
    { name: 'description', content: 'Home page description' },
    { name: 'keywords', content: 'Home page keywords' },
    { name: 'robots', content: 'index, follow' },
    {name:"og:title",content:"Home Page"},
    {name:"og:description",content:"Home page description"},
    {name:"og:image",content:"/post.png"},
    {name:"og:url",content:"https://example.com"},
    {name:"og:site_name",content:"Home Page"},
    {name:"og:locale",content:"en_US"},
    {name:"og:type",content:"website"},
  ],
  
})


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