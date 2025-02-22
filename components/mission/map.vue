<template>
  <div class="relative">
    <h1 class="text-3xl lg:text-4xl font-bold -mt-16 mb-4 text-center">
      {{ t("map.title_1") }}
      <span class="font-sri text-green-600"> {{ t("map.title_2") }}</span>
    </h1>

    <!-- Carte -->
    <!-- <div id="map" class="w-full h-[600px] border-2 border-gray-300 z-10"></div> -->
    <div class="w-full bg-white flex justify-center items-center p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.7470279340105!2d-95.51056902526464!3d29.669114336257696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e9d9f520ee1b%3A0xfdf629b5e1eba5d2!2s10103%20Fondren%20Rd%20%23435%2C%20Houston%2C%20TX%2077096%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2scd!4v1740246518019!5m2!1sfr!2scd"
        class="w-full h-96 border-2 border-dashed border-custom-green"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>
