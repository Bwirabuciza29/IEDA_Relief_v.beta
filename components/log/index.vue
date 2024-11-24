<template>
  <div class="h-full w-full flex justify-center items-center">
    <div
      class="grid grid-cols-2 gap-4 px-4 md:flex md:flex-wrap md:justify-center md:gap-8"
    >
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        alt="Logo"
        class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
      />
    </div>
  </div>
</template>

<script setup>
const logos = [
  "/img/uni.png",
  "/img/uhncr.png",
  "/img/oim.png",
  "/img/guide-star.png",
  "/img/central-emergency.png",
  "/img/donor-houston.png",
];
</script>
