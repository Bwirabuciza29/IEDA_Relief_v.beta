<template>
  <section class="mj-container relative z-10">
    <div class="text-center my-6">
      <p class="text-custom-green uppercase tracking-widest text-xs">
        {{ t1 }}
      </p>
      <h1 class="text-3xl font-semibold">
        <span class="font-sri"> {{ t2 }}</span> {{ t3 }}
      </h1>
    </div>
    <div class="grid gap-6 p-4 md:grid-cols-3">
      <!-- Premier Grid -->

      <div class="relative w-full max-w-xs mx-auto sm:w-full sm:h-auto">
        <div
          :class="firstCardColor"
          class="absolute -bottom-8 -right-10 w-full h-full rounded-lg shadow-lg z-0 transition-colors duration-1000"
        ></div>
        <!-- Image -->
        <img
          src="/img/filles.png"
          alt="Image principale"
          class="absolute inset-0 w-full h-full rounded-lg shadow-md object-cover z-10 transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <!-- Deuxième Grid -->
      <div class="flex flex-col items-center text-center">
        <div class="flex items-center gap-4 mb-4">
          <div>
            <img
              src="/img/t1.png"
              class="w-14 h-14 rounded-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <img
              src="/img/t2.png"
              class="w-20 h-20 rounded-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <img
              src="/img/t1.png"
              class="w-14 h-14 rounded-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <p class="text-gray-700 px-4">“ {{ desc }}”</p>
      </div>

      <!-- Troisième Grid -->
      <div class="relative w-full max-w-xs mx-auto sm:w-full sm:h-auto">
        <!-- Carte derrière l'image -->
        <div
          :class="firstCardColors"
          class="absolute -top-8 -right-10 w-full h-full rounded-lg shadow-lg z-0 transition-colors duration-1000"
        ></div>
        <!-- Image -->
        <img
          src="/img/t2.jpg"
          alt="Deuxième image"
          class="absolute inset-0 w-full h-full rounded-lg shadow-md object-cover z-10 transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const t1 = ref(t("testimonial.t1"));
const t2 = ref(t("testimonial.t2"));
const t3 = ref(t("testimonial.t3"));
const desc = ref(t("testimonial.desc"));

const firstCardColor = ref("bg-yellow-300");
const firstCardColors = ref("bg-custom-green");

// Fonction qui alterne les couleurs de la première carte
onMounted(() => {
  setInterval(() => {
    firstCardColor.value =
      firstCardColor.value === "bg-yellow-300"
        ? "bg-blue-300"
        : "bg-yellow-300";
  }, 2000);
});
onMounted(() => {
  setInterval(() => {
    firstCardColors.value =
      firstCardColors.value === "bg-custom-green"
        ? "bg-custom-blue"
        : "bg-yellow-100";
  }, 2000);
});
</script>
