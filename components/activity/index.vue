<template>
  <div
    class="relative bg-custom-blue/40  p-6  border-l-4"
    :class="borderColor"
  >
    <!-- Icône filigrane -->
    <i
      :class="icon"
      class="absolute opacity-10 text-7xl top-4 left-4 pointer-events-none text-gray-800 dark:text-white"
    ></i>

    <!-- Contenu -->
    <div class="relative z-10 pl-2">
      <h4 class="text-lg font-sri md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {{ title }}
      </h4>
      <p class="text-sm md:text-base text-gray-800 dark:text-gray-200">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  borderColor: {
    type: String,
    default: 'border-l-blue-500',
  },
})
</script>
