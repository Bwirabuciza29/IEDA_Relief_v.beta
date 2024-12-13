<template>
  <div class="mj-container">
    <!-- Operational Footprint Section -->
    <section>
      <h2
        class="text-3xl font-bold text-gray-800 text-center border-b pb-2 mb-8"
      >
        Operational
        <span class="text-green-500 font-sri"> Footprint</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">Current</h3>
          <ul class="space-y-2">
            <li
              v-for="country in current"
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
          <h3 class="text-xl font-semibold mb-2">Previous</h3>
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
          <h3 class="text-xl font-semibold mb-2">Pending Registration</h3>
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
        Sectors &
        <span class="text-green-500 font-sri"> Services</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 class="text-xl font-semibold mb-2">Community</h3>
          <ul class="space-y-2">
            <li
              v-for="service in communityServices"
              :key="service"
              class="flex items-center space-x-2"
            >
              <span class="text-blue-500"><i class="fas fa-users"></i></span>
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Health & Environment</h3>
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
          <h3 class="text-xl font-semibold mb-2">Education & Finance</h3>
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
        Clients &
        <span class="text-green-500 font-sri">Donors</span>
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
const current = [
  { name: "Burkina Faso", code: "bf" },
  { name: "Cameroon", code: "cm" },
  { name: "CAR", code: "cf" },
  { name: "DRC", code: "cd" },
  { name: "Mali", code: "ml" },
];

const previous = [
  { name: "Haiti", code: "ht" },
  { name: "Niger", code: "ne" },
  { name: "Belgium", code: "be" },
  { name: "U.S.", code: "us" },
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
  "Community Networking and Engagement",
  "Third Party Monitoring / Social Protection",
  "Research",
  "Women & Youth Leadership",
];

const healthServices = [
  "Health & Nutrition",
  "Water, Hygiene, and Sanitation",
  "Climate Change",
  "Environmental Awareness",
];

const educationServices = [
  "Education & Protection Monitoring / SGBV",
  "Financial Inclusion and Entrepreneurship",
];

const clientsAndDonors = [
  "UN Agencies",
  "US States Department",
  "Government of Philippines",
  "Religious Groups and Individual Donors",
];

const getFlag = (code) => `https://flagcdn.com/w40/${code}.png`;
</script>
