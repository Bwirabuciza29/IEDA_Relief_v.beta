<template>
  <div class="bg-green-50">
    <div class="mj-container relative mt-20">
      <!-- Contenu principal -->
      <div class="relative z-10">
        <div
          class="flex flex-col md:flex-row items-center md:justify-between py-10"
        >
          <!-- Section de gauche -->
          <div class="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-semibold">
              {{ title_1 }}
              <span class="text-custom-green font-sri"> {{ title_2 }} </span>
              {{ title_3 }}
              <span class="text-custom-green font-sri"> {{ title_4 }} </span
              >....
            </h1>
            <p class="text-gray-700 text-lg">
              {{ desc }}
            </p>
            <NuxtLink
              :to="localePath('donation')"
              class="group relative inline-block overflow-hidden rounded-lg border-2 border-green-100 bg-custom-green px-6 py-4 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base"
            >
              <span
                class="relative z-10 translate-x-full transform transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:text-green-700"
              >
                {{ btn }}
              </span>
              <div
                class="absolute inset-0 h-full w-full translate-x-full transform bg-blue-100 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
              ></div>
            </NuxtLink>
          </div>

          <!-- Section de droite -->
          <div
            class="md:w-1/2 flex flex-wrap md:justify-end gap-4 mt-10 md:mt-0 relative"
          >
            <div class="relative md:w-3/4">
              <img
                src="/img/img_principal.png"
                alt="Community support"
                class="shadow-lg transform rounded-lg"
              />
              <img
                src="/img/img_1.png"
                alt="Volunteer"
                class="hidden md:block mx-2 absolute top-[50%] left-[-40px] w-20 h-20 md:w-28 md:h-28 shadow-md rounded-lg transition-all duration-300 hover:z-10 hover:scale-110"
              />
              <img
                src="/img/img_2.png"
                alt="Child"
                class="hidden md:block mx-2 absolute top-[20%] right-[-40px] w-20 h-20 md:w-28 md:h-28 shadow-md transform rounded-lg transition-all duration-300 hover:z-10 hover:scale-110"
              />
            </div>

            <!-- Carte en bas (superposée) -->
            <div
              class="bg-custom-green py-6 rounded-md flex items-center justify-center w-2/4 md:w-2/2 absolute -bottom-16 left-44 transform -translate-x-1/2 md:translate-x-0 transition hover:scale-105 mobile:bottom-8 mobile:left-1/2 mobile:transform mobile:-translate-x-1/2"
            >
              <div class="text-center">
                <p class="text-2xl md:text-3xl text-white font-sri">
                  {{ animatedCardNum }} {{ card_letter }}
                </p>
                <p class="text-white hover:underline">
                  {{ card_desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image de filigrane -->
      <img
        src="/img/Vector_1.png"
        alt="Filigrane"
        class="absolute right-0 top-48 transform -translate-y-1/2 opacity-90 pointer-events-none w-64 sm:w-96 md:w-[25rem] lg:w-[35rem] h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] z-0"
      />
      <img
        src="/img/Vector_1.png"
        alt="Filigrane"
        class="absolute left-0 -bottom-48 transform -translate-x-1/2 opacity-50 pointer-events-none w-64 sm:w-96 md:w-[25rem] lg:w-[35rem] h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] z-0"
      />
    </div>
    <!-- Fin Page d'accueil -->
    <div class="my-16">
      <log />
    </div>
    <div class="my-16">
      <mission />
    </div>
    <div class="my-16">
      <help />
    </div>
    <div class="my-16">
      <parteners />
    </div>
    <div class="my-16">
      <LogOurs />
    </div>
    <div class="my-16">
      <PartenersSupport />
    </div>
    <div class="my-16">
      <LogTestimonials />
    </div>
    <div class="my-16">
      <HelpSubscribe />
    </div>
    <div class="mt-16">
      <laster />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const localePath = useLocalePath();
const { t } = useI18n();
const title_1 = ref(t("hero.title_1"));
const title_2 = ref(t("hero.title_2"));
const title_3 = ref(t("hero.title_3"));
const title_4 = ref(t("hero.title_4"));
const desc = ref(t("hero.desc"));
const btn = ref(t("hero.btn"));
const card_desc = ref(t("hero.card_desc"));
const card_letter = ref(t("hero.card_letter"));

// Valeur initiale du compteur
const animatedCardNum = ref(0);

// Valeur cible du compteur
const targetCardNum = 2.2;

// Animation du compteur
onMounted(() => {
  let currentValue = 0;
  const interval = setInterval(() => {
    currentValue += 0.01; // Incrémente de 0.01 pour animer
    if (currentValue >= targetCardNum) {
      clearInterval(interval); // Arrête l'intervalle quand la valeur cible est atteinte
      currentValue = targetCardNum; // Assure que la valeur finale soit exacte
    }
    animatedCardNum.value = currentValue.toFixed(2); // Met à jour la valeur affichée
  }, 50); // Toutes les 50ms, ce qui donne une animation fluide
});
</script>
