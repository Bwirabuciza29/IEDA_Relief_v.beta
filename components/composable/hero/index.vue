<template>
      <div
      class="relative w-full h-[80vh] flex items-center justify-left text-left"
    >
      <div
        class="absolute inset-0 bg-cover bg-center shadow-7xl"
        style="
          background-image: url('/img/burkina.jpg');
          background-attachment: fixed;
        "
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"
        ></div>
      </div>

      <!-- Contenu principal -->
      <div class="relative z-10 mj-container space-y-2 text-white px-6 items-start">
        <div class="bg-custom-green/20 p-2 text-lg font-semibold border-b-2 inline-block">
          Mission
        </div>
        <div class="text-4xl font-bold sm:text-6xl ">
         <span class="text-custom-green">ieda Relief</span> Burkina Faso
        </div>
        <p class="mt-4 text-gray-300 ">
           Helping communities to become Self-sufficient
        </p>

        <!-- Boutons -->
        <div class="mt-6 flex flex-wrap  gap-4">
          <button
            class="px-6 py-3 bg-custom-green hover:bg-blue-700  text-white text-sm"
          >
            Donate now
          </button>
        
        </div>
      </div>
    </div>
</template>