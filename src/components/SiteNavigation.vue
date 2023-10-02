<template>
  <header class="sticky top-0 bg-w-primary shadow-lg">
    <nav
      class="container flex flex-col md:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">My Weather App</p>
        </div>
      </RouterLink>
      <div class="flex gap-3 flex-1 justify-end">
        <i
          @click="toggleModal"
          class="fa-solid fa-circle-info text-xl hover:text-w-secondary duration-150 cursor-pointer"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-w-secondary duration-150 cursor-pointer"
        ></i>
        <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
          <div class="text-black prose">
            <h1>Hi!</h1>
            <p>
              This is a weather app used to practice vuejs, tailwind and api.
            </p>
          </div>
        </BaseModal>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
