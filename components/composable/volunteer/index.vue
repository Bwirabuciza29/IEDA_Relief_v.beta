<template>
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
</template>