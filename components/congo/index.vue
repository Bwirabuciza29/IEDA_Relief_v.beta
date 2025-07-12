<template>
  <div>
    <!-- Section principale -->
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
         <span class="text-custom-green">Ieda Relief</span> Burkina Faso
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

 <div class="mj-container px-6  -mt-24 sm:-mt-20 md:-mt-28 relative z-20">
       <div
          class="relative border-t-4 border-white  flex flex-col md:flex-row bg-custom-green overflow-hidden"
        >
          <img
            src="/img/Vectoria.png"
            alt="Decorative Vector"
            class="absolute top-0 left-64 h-full w-auto hidden sm:block z-20"
          />
          <!-- Texte -->
        <div class="w-full md:w-1/2 p-4 md:p-6 text-white flex flex-col justify-center relative z-20 space-y-2">
  <!-- Titre principal -->
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
  Burkina Faso
</h1>


  <!-- Sous-titre -->
  <p class="text-lg text-white italic">
    "Burkina Faso" means "Land of Honest Men"
  </p>

  <!-- Description générale -->
  <div class="bg-white/10 p-4   backdrop-blur-sm">
    <p class="text-sm text-white leading-relaxed">
      Since the Mali crisis in 2012, WFP signed a tripartite accord with UNHCR and IEDA Relief to ensure monthly food distribution to over <strong>33,000 Mali refugees</strong> living in and outside camps. The food rations include <strong>rice, CSB, oil, salt, and cereals</strong>.
    </p>
  </div>

  <!-- Détails logistiques -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Tonnes distribué -->
    <div class="bg-white/10 p-4 flex items-start space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6m6-18H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z" />
      </svg>
      <div>
        <h3 class="text-white font-semibold">Monthly Distribution</h3>
        <p class="text-sm text-white">574 tonnes / month • Total: 6888 tonnes</p>
      </div>
    </div>

    <!-- Coût opérationnel -->
    <div class="bg-white/10 p-4 flex items-start space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zm-2 6c0 1.1.9 2 2 2s2-.9 2-2H10zM5 20h14a2 2 0 002-2v-6a9 9 0 10-18 0v6a2 2 0 002 2z" />
      </svg>
      <div>
        <h3 class="text-white font-semibold">Operational Cost</h3>
        <p class="text-sm text-white">$180,000 USD paid by UNHCR</p>
      </div>
    </div>
  </div>


          </div>


          <!-- Image -->
          <div class="hidden md:block md:w-1/2 relative">
            <!-- Dégradé à gauche -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-custom-green to-transparent z-10"
            ></div>
            <!-- Image pleine largeur/hauteur -->
            <img
              src="/flags/burks.jpg"
              alt="About Us Section"
              class="w-full h-full object-cover "
            />
          </div>
        </div>
    </div>
    <!-- Nouvelle div chevauchante -->
   <div>
 <div class="py-12 px-4 sm:px-6 lg:px-8">
  <div class="mj-container">
    <!-- Titre -->
    <div class="border-l-4 border-custom-green pl-4 mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Volunteer with Us</h2>
    </div>

    <!-- Wrapper image + card -->
    <div class="relative flex flex-col md:flex-row">
      <!-- Image : 100% mobile, 70% desktop -->
      <div class="w-full md:w-[70%]">
        <img src="/img/d.jpg" alt="Teacher in Nigeria" class="w-full h-auto object-cover border-b-4 border-custom-green">
      </div>

      <!-- Espace vide pour le card sur desktop uniquement -->
      <div class="hidden md:block md:w-[30%]"></div>

      <!-- Card positionnée sur l'image en desktop, en bloc normal sur mobile -->
      <div
        class="relative md:absolute md:-right-16 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-[-15%] md:w-[50%] z-10 mt-6 md:mt-0">
        <div class="bg-custom-blue/80 text-white p-6 sm:p-8">
          <p class="text-sm uppercase mb-2">IEDA Relief</p>
          <h3 class="text-xl sm:text-2xl font-bold mb-4 leading-snug">
            Helping communities to become Self-sufficient...
          </h3>
          <p class="text-base mb-6">
            Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world.
          </p>
          <div class="py-2 px-4 bg-custom-green inline-block font-bold transition-colors">
            Donate now
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



   </div>
  </div>
</template>
<script setup>
const { t, locale } = useI18n();
</script>
