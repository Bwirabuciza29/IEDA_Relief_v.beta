<template>
  <div class="relative w-full h-[80vh] flex items-center justify-left text-left">
    <!-- Image de fond -->
    <div
      class="absolute inset-0 bg-cover bg-center shadow-7xl"
      :style="`background-image: url('${background}'); background-attachment: fixed;`"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
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
        <NuxtLink
          :to="localPagePath('donation')"
          class="group relative w-full text-center sm:w-auto overflow-hidden bg-custom-green px-6 py-4 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base"
        >
          <span
            class="relative z-10 translate-x-full transform transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:text-green-700"
          >
            Donation
          </span>
          <div
            class="absolute inset-0 h-full w-full translate-x-full transform bg-green-100 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const localPagePath = (route) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  return `${prefix}/${route}`;
};
defineProps({
  background: {
    type: String,
    default: "/img/burkina.jpg",
  },
  titleHighlight: {
    type: String,
    default: "ieda Relief",
  },
  title: {
    type: String,
    default: "Burkina Faso",
  },
  subtitle: {
    type: String,
    default: "Mission",
  },
  description: {
    type: String,
    default: "Helping communities to become Self-sufficient",
  },
  buttonText: {
    type: String,
    default: "Donate now",
  },
  buttonColor: {
    type: String,
    default: "bg-custom-green hover:bg-custom-green/20",
  },
});
</script>
