<script setup lang="ts">
import ToastContainer from './components/Toast/ToastContainer.vue';

/**
 * navbar,
 * footer,
 * 
 */

</script>


<template>
  <div class="min-h-[100dvh] flex flex-col justify-between relative">
    <ToastContainer />
    <TheNav />
    <NuxtPage class="grow py-5 lg:py-14" />
    <TheFooter />
  </div>
</template>
