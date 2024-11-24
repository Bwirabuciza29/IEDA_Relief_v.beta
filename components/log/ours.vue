<template>
  <section class="mj-container relative z-10">
    <div class="container mx-auto px-4">
      <div class="text-center my-6">
        <p class="text-custom-green uppercase tracking-widest text-xs">
          {{ t1 }}
        </p>
        <h1 class="text-3xl font-semibold">
          {{ t2 }} <span class="font-sri"> {{ t3 }}</span>
        </h1>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="group flex justify-center items-center bg-white p-4 shadow rounded transform transition-transform duration-300 hover:scale-105"
        >
          <img
            :src="partner.logo"
            :alt="partner.alt"
            class="max-w-20 h-auto filter grayscale transition-all duration-300 group-hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
// Initialiser les variables avant de les utiliser
const t1 = ref(t("logo.t1"));
const t2 = ref(t("logo.t2"));
const t3 = ref(t("logo.t3"));

const partners = [
  { id: 1, logo: "/img/hc.jpeg", alt: "Partner 1" },
  { id: 2, logo: "/img/unicef.png", alt: "Partner 2" },
  { id: 3, logo: "/img/wfp.png", alt: "Partner 3" },
  { id: 4, logo: "/img/oim.png", alt: "Partner 4" },
  { id: 5, logo: "/img/fa.gif", alt: "Partner 5" },
  { id: 6, logo: "/img/tx.jpeg", alt: "Partner 6" },
  { id: 7, logo: "/img/undpi.png", alt: "Partner 7" },
  { id: 8, logo: "/img/shelter.jpg", alt: "Partner 8" },
];
</script>
