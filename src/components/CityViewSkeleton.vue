<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
</script>

<template>
  <div class="container my-2 text-white">
    <div class="text-center">
      <AnimatedPlaceholder class="mx-auto text-5xl mt-10 py-2 max-w-[100px]" />
      <AnimatedPlaceholder class="mx-auto mt-5 max-w-[60px]" />

      <AnimatedPlaceholder class="m-auto text-8xl mt-5 max-w-[60px]" />

      <div class="border-b border-slate-200 my-8"></div>

      <div class="max-w-screen-md m-auto flex overflow-x-auto gap-4">
        <div
          class="text-center flex flex-col gap-3"
          v-for="i in [1, 2, 3, 4, 5, 6, 7]"
          :key="i"
        >
          <div class="text-2xl">
            <AnimatedPlaceholder class="mx-auto min-w-[90px]" />
          </div>
          <div class="text-xl font-bold">
            <AnimatedPlaceholder class="mx-auto max-w-[70px]" />
          </div>
          <div class="text-xl font-bold">
            <AnimatedPlaceholder class="mx-auto max-w-[70px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
