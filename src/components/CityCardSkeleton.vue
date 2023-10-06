<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<template>
  <div class="my-3 flex py-6 px-3 bg-w-secondary rounded-md shadow-md">
    <div class="flex flex-col flex-1 gap-2">
      <AnimatedPlaceholder class="max-w-[50%]" />
      <AnimatedPlaceholder class="max-w-[40%]" />
    </div>
    <div class="flex flex-col justify-center">
      <AnimatedPlaceholder class="min-w-[50px] w-full" />
    </div>
  </div>
</template>
