<template>
  <div class="mj-container px-6 -mt-24 sm:-mt-20 md:-mt-28 relative z-20">
    <div
      class="relative border-t-4 border-white flex flex-col md:flex-row overflow-hidden"
      :class="bgColor"
    >
      <!-- Image décorative vectorielle -->
      <img
        v-if="vectorImage"
        :src="vectorImage"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto hidden sm:block z-20"
      />

      <!-- Colonne Texte -->
      <div
        class="w-full md:w-1/2 p-4 md:p-6 text-white flex flex-col justify-center relative z-20 space-y-4"
      >
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {{ title }}
        </h1>

        <p class="text-lg italic">"{{ subtitle }}"</p>

        <!-- Description principale -->
        <div class="bg-white/10 p-4 backdrop-blur-sm">
          <p class="text-sm leading-relaxed">
            {{ description }}
          </p>
        </div>

        <!-- Coordonnées -->
        <div class="grid grid-cols-1 gap-4 bg-white/10 p-4 text-sm space-y-0">
          <!-- Email -->
          <div v-if="email" class="flex items-start gap-3">
            <div class="bg-white/20 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                />
              </svg>
            </div>
            <a :href="`mailto:${email}`" class="text-white underline-animate">{{
              email
            }}</a>
          </div>

          <!-- Téléphone -->
          <div v-if="phone" class="flex items-start gap-3">
            <div class="bg-white/20 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </div>
            <a :href="`tel:${phone}`" class="text-white underline-animate">{{ phone }}</a>
          </div>

          <!-- Adresse -->
          <div v-if="address" class="flex items-start gap-3">
            <div class="bg-white/20 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <p class="text-white">{{ address }}</p>
          </div>
        </div>
      </div>

      <!-- Colonne Image -->
      <div v-if="rightImage" class="hidden md:block md:w-1/2 relative">
        <div
          class="absolute inset-0 bg-gradient-to-r from-custom-green to-transparent z-10"
        ></div>
        <img :src="rightImage" alt="Image" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "Burkina Faso" },
  subtitle: { type: String, default: "Land of Honest Men" },
  description: {
    type: String,
    default:
      "Since the Mali crisis in 2012, WFP signed a tripartite accord with UNHCR and IEDA Relief to ensure monthly food distribution...",
  },
  email: { type: String, default: "burkinafasooffice@iedarelief.org" },
  phone: { type: String, default: "+22625374622" },
  address: { type: String, default: "05 BP 6402 Ouaga 05, ... Ouagadougou" },
  rightImage: { type: String, default: "/flags/burks.jpg" },
  vectorImage: { type: String, default: "/img/Vectoria.png" },
  bgColor: { type: String, default: "bg-custom-green" },
});
</script>
