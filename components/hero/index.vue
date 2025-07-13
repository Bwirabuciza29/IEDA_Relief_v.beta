<template>
  <div class="relative w-full h-[80vh] flex items-center justify-left text-left">
    <!-- Image de fond -->
    <div
      class="absolute inset-0 bg-cover bg-center shadow-7xl"
      :style="`background-image: url('${background}'); background-attachment: fixed;`"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 mj-container space-y-2 text-white px-6 items-start">
      <div class="bg-custom-green/20 p-2 text-lg font-semibold border-b-2 inline-block">
        {{ subtitle }}
      </div>
      <div class="text-4xl font-bold sm:text-6xl">
        <span class="text-custom-green font-sri">{{ titleHighlight }}</span> {{ title }}
      </div>
      <p class="mt-4 text-gray-300">
        {{ description }}
      </p>

      <div class="mt-6 flex flex-wrap gap-4">
        <button
          :class="`px-6 py-3 ${buttonColor} text-white text-sm`"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  background: {
    type: String,
    default: '/img/burkina.jpg'
  },
  titleHighlight: {
    type: String,
    default: 'ieda Relief'
  },
  title: {
    type: String,
    default: 'Burkina Faso'
  },
  subtitle: {
    type: String,
    default: 'Mission'
  },
  description: {
    type: String,
    default: 'Helping communities to become Self-sufficient'
  },
  buttonText: {
    type: String,
    default: 'Donate now'
  },
  buttonColor: {
    type: String,
    default: 'bg-custom-green hover:bg-custom-green/20'
  }
})
</script>
