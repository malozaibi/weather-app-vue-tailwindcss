<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
</script>

<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <p class="text-center text-white text-lg py-5">Loading ...</p>
      </template>
    </Suspense>
  </div>
</template>
