<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="mj-container">
      <!-- Titre -->
      <div class="border-l-4 pl-4 mb-6" :class="`border-${accentColor}`">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
          {{ title }}
        </h2>
      </div>

      <!-- Image + Card -->
      <div class="relative flex flex-col md:flex-row">
        <!-- Image -->
        <div class="w-full md:w-[70%]">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            class="w-full h-auto object-cover border-b-4"
            :class="`border-${accentColor}`"
          />
        </div>

        <!-- Vide pour espace card -->
        <div class="hidden md:block md:w-[30%]"></div>

        <!-- Card décalée -->
        <div
          class="relative md:absolute md:-right-16 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-[-15%] md:w-[50%] z-10 mt-6 md:mt-0"
        >
          <div :class="`bg-custom-blue/80 text-white p-6 sm:p-8`">
            <p class="text-sm uppercase mb-2">{{ badge }}</p>
            <h3 class="text-xl sm:text-2xl font-bold mb-4 leading-snug">
              {{ cardTitle }}
            </h3>
            <p class="text-base mb-6">
              {{ cardText }}
            </p>
         <NuxtLink
              :to="localPagePath('donation')"
              class="group relative inline-block w-full sm:w-auto overflow-hidden  bg-custom-green px-6 py-4 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base"
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
  title: { type: String, default: 'Volunteer with Us' },
  imageSrc: { type: String, default: '/img/d.jpg' },
  imageAlt: { type: String, default: 'Teacher in Nigeria' },
  badge: { type: String, default: 'IEDA Relief' },
  cardTitle: {
    type: String,
    default: 'Helping communities to become Self-sufficient...'
  },
  cardText: {
    type: String,
    default:
      'Helping others and making a difference in the world is what will help to make the world a better place by improving people\'s lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world.'
  },
  buttonText: { type: String, default: 'Donate now' },
  accentColor: { type: String, default: 'custom-green' },
  cardBgColor: { type: String, default: 'custom-blue' }
})
</script>
