
  <template>
  <div>
    <div
      class="relative w-full h-screen flex items-center justify-center text-center"
    >
      <div
        class="absolute inset-0 bg-cover bg-center shadow-7xl"
        style="
          background-image: url('/img/bg/burk.jpg');
          background-attachment: fixed;
        "
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"
        ></div>
      </div>

      <!-- Contenu -->
      <div class="relative z-10 max-w-2xl text-white px-6">
        <h2 class="text-lg font-semibold">
          Helping communities to become Self-sufficient
        </h2>
        <h1 class="text-5xl font-bold">Transformez vos idées en réalité</h1>
        <p class="mt-4 text-gray-300">
          Découvrez une plateforme innovante pour créer des expériences uniques.
        </p>

        <!-- Boutons -->
        <div class="mt-6 flex justify-center gap-4">
          <button
            class="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-white"
          >
            Commencer
          </button>
          <button
            class="px-6 py-3 border border-gray-300 hover:bg-gray-700 rounded-lg text-white"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

