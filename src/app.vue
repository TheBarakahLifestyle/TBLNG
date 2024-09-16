<script setup lang="ts">
/**
 * navbar,
 * footer,
 * 
 */

</script>


<template>
  <div class="h-fit overflow-auto min-h-[100dvh] flex flex-col justify-between relative">
    <TheNav />
    <NuxtPage class=" p-4 grow" />
    <footer>
      <div class="mx-auto max-w-container bg-red-500">
        Footer here
      </div>
    </footer>
  </div>
</template>
