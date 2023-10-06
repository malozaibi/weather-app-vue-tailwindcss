<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div
    class="my-3 flex py-6 px-3 bg-w-secondary rounded-md shadow-md cursor-pointer"
  >
    <div class="flex flex-col flex-1">
      <h2 class="text-3xl">{{ city.city }}</h2>
      <h3>{{ city.country }}</h3>
    </div>
    <div class="flex flex-col justify-center">
      <p class="text-3xl">
        {{ city.weather.current_weather.temperature }}&deg;
      </p>
    </div>
  </div>
</template>
