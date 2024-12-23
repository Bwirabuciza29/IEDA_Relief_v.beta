<template>
  <div class="mj-container bg-white rounded-lg py-4">
    <!-- Operational Footprint Section -->
    <section>
      <h2
        class="text-3xl font-bold text-gray-800 text-center border-b pb-2 mb-8"
      >
        {{ t("logger.title_2") }}
        <span class="text-green-500 font-sri">{{ t("logger.title_1") }}</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ t("logger.sub_1") }}</h3>
          <ul class="space-y-2">
            <li
              v-for="country in current"
              :key="country.name"
              class="flex items-center space-x-2 group"
            >
              <!-- Image du drapeau -->
              <img
                :src="getFlag(country.code)"
                :alt="`${country.name} flag`"
                class="w-6 h-6 rounded"
              />

              <!-- Texte avec animation et NuxtLink -->
              <nuxt-link
                to="/team"
                class="relative text-black group-hover:text-custom-green transition duration-300"
              >
                {{ country.name }}

                <!-- Animation de soulignement -->
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ t("logger.sub_2") }}</h3>
          <ul class="space-y-2">
            <li
              v-for="country in previous"
              :key="country.name"
              class="flex items-center space-x-2"
            >
              <img
                :src="getFlag(country.code)"
                :alt="`${country.name} flag`"
                class="w-6 h-6 rounded"
              />
              <span>{{ country.name }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ t("logger.sub_3") }}</h3>
          <ul class="space-y-2">
            <li
              v-for="country in pendingRegistration"
              :key="country.name"
              class="flex items-center space-x-2"
            >
              <img
                :src="getFlag(country.code)"
                :alt="`${country.name} flag`"
                class="w-6 h-6 rounded"
              />
              <span>{{ country.name }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Horizon</h3>
          <ul class="space-y-2">
            <li
              v-for="country in horizon"
              :key="country.name"
              class="flex items-center space-x-2"
            >
              <img
                :src="getFlag(country.code)"
                :alt="`${country.name} flag`"
                class="w-6 h-6 rounded"
              />
              <span>{{ country.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Sectors & Services Section -->
    <section class="my-8">
      <h2
        class="text-3xl font-bold text-gray-800 text-center border-b pb-2 mb-8"
      >
        {{ t("logger.title_3") }} &
        <span class="text-green-500 font-sri"> {{ t("logger.title_5") }}</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ t("logger.sub_4") }}</h3>
          <ul class="space-y-2">
            <li
              v-for="service in communityServices"
              :key="service"
              class="flex items-center space-x-2 group"
            >
              <span class="text-blue-500"><i class="fas fa-users"></i></span>
              <nuxt-link
                to="/team"
                class="relative text-black group-hover:text-custom-green transition duration-300"
              >
                {{ service }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ t("logger.sub_5") }}</h3>
          <ul class="space-y-2">
            <li
              v-for="service in healthServices"
              :key="service"
              class="flex items-center space-x-2"
            >
              <span class="text-green-500"><i class="fas fa-leaf"></i></span>
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ t("logger.sub_6") }}</h3>
          <ul class="space-y-2">
            <li
              v-for="service in educationServices"
              :key="service"
              class="flex items-center space-x-2"
            >
              <span class="text-yellow-500"
                ><i class="fas fa-graduation-cap"></i
              ></span>
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Clients & Donors Section -->
    <section>
      <h2
        class="text-3xl font-bold text-gray-800 text-center border-b pb-2 mb-8"
      >
        {{ t("logger.title_4") }} &
        <span class="text-green-500 font-sri"> {{ t("logger.title_5") }}</span>
      </h2>
      <ul class="space-y-2">
        <li
          v-for="client in clientsAndDonors"
          :key="client"
          class="flex items-center justify-center text-justify space-x-2"
        >
          <span class="text-purple-500"><i class="fas fa-handshake"></i></span>
          <span>{{ client }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup>
const { t } = useI18n();
const current = [
  { name: "U.S.A", code: "us" },
  { name: "Belgium", code: "be" },
  { name: "Burkina Faso", code: "bf" },
  { name: "Cameroon", code: "cm" },
  { name: "CAR", code: "cf" },
  { name: "DRC", code: "cd" },
  { name: "Mali", code: "ml" },
  { name: "Niger", code: "ne" },
];

const previous = [
  { name: "Haiti", code: "ht" },
  { name: "Philippines", code: "ph" },
  { name: "Nigeria", code: "ng" },
  { name: "Sierra Leone", code: "sl" },
  { name: "Senegal", code: "sn" },
];

const pendingRegistration = [
  { name: "Ivory Coast", code: "ci" },
  { name: "Liberia", code: "lr" },
  { name: "Philippines", code: "ph" },
  { name: "Burundi", code: "bi" },
  { name: "Chad", code: "td" },
  { name: "Mozambique", code: "mz" },
];

const horizon = [
  { name: "Somalia", code: "so" },
  { name: "South Sudan", code: "ss" },
  { name: "Sudan", code: "sd" },
];

const communityServices = [
  t("logger.c1"),
  t("logger.c2"),
  t("logger.c3"),
  t("logger.c4"),
];

const healthServices = [
  t("logger.h1"),
  t("logger.h2"),
  t("logger.h3"),
  t("logger.h4"),
];

const educationServices = [t("logger.e1"), t("logger.e2")];

const clientsAndDonors = [
  t("logger.d1"),
  t("logger.d2"),
  t("logger.d3"),
  t("logger.d4"),
];

const getFlag = (code) => `https://flagcdn.com/w40/${code}.png`;
</script>
