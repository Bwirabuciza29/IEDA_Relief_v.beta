<template>
  <div>
    <div class="mj-container">
      <h2 class="text-2xl font-bold text-center mb-8">
        {{ t("team.txt_1") }}
      </h2>
      <p class="text-center text-gray-600 mb-12">
        {{ t("team.txt_2") }}
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        <!-- Carte 1 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-history text-blue-500 text-3xl mb-4"></i>
          <p class="font-medium text-xs mb-2">
            {{ t("all.fr_1") }}
          </p>
        </div>
        <!-- Carte 2 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-file-alt text-green-500 text-3xl mb-4"></i>
          <h3 class="font-semibold text-xs mb-2">{{ t("all.fr_2") }}</h3>
          <p class="text-gray-600 text-xs">
            {{ t("all.fr_2d") }}
          </p>
        </div>
        <!-- Carte 3 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-globe-americas text-yellow-500 text-3xl mb-4"></i>
          <h3 class="font-semibold text-xs mb-2">
            {{ t("all.fr_3") }}
          </h3>
          <p class="text-gray-600 text-xs">
            {{ t("all.fr_3d") }}
          </p>
        </div>
        <!-- Carte 4 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-file-contract text-indigo-500 text-3xl mb-4"></i>
          <h3 class="font-semibold text-xs mb-2">
            {{ t("all.fr_4") }}
          </h3>
          <p class="text-gray-600 text-xs">
            {{ t("all.fr_4d") }}
          </p>
        </div>
        <!-- Carte 5 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-file-invoice text-red-500 text-3xl mb-4"></i>
          <h3 class="font-semibold text-xs mb-2">{{ t("all.fr_5") }}</h3>
          <p class="text-gray-600 text-xs">
            {{ t("all.fr_5d") }}
          </p>
        </div>
        <!-- Carte 6 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-archive text-purple-500 text-3xl mb-4"></i>
          <h3 class="font-semibold text-xs mb-2">
            {{ t("all.fr_6") }}
          </h3>
          <p class="text-gray-600 text-xs">
            {{ t("all.fr_6d") }}
          </p>
        </div>
        <!-- Carte 7 -->
        <div
          class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
        >
          <i class="fas fa-hand-holding-heart text-teal-500 text-3xl mb-4"></i>
          <h3 class="font-semibold text-xs mb-2">
            {{ t("all.fr_7") }}
          </h3>
          <p class="text-gray-600 text-xs">
            {{ t("all.fr_7d") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>