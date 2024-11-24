<template>
  <section class="bg-green-50">
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-16">
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto hidden sm:block z-10"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl text-white font-bold mb-2">
                {{ t("contact.title") }}
              </h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">
                    {{ t("contact.sub_title") }}/
                  </a>
                  <span> {{ t("contact.title_first") }}</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/c1.jpg"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mj-container">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-8 lg:p-16 space-y-8 space-x-8 lg:space-y-0"
      >
        <!-- Section gauche -->
        <div class="lg:w-1/2 space-y-6">
          <h1 class="text-3xl lg:text-4xl font-bold">
            {{ t("contact.t1") }}
            <span class="font-sri text-green-600"> {{ t("contact.t2") }}</span>
            {{ t("contact.t3") }}
          </h1>
          <p class="text-gray-600">
            {{ t("contact.t4") }}
          </p>
          <div class="space-y-4 p-4 bg-white rounded-lg">
            <p class="flex items-center space-x-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600"
              >
                <i class="fas fa-envelope"></i>
              </span>
              <span>name@domain.com</span>
            </p>
            <p class="flex items-center space-x-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600"
              >
                <i class="fas fa-phone-alt"></i>
              </span>
              <span>+123 45 67 123</span>
            </p>
            <p class="flex items-center space-x-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600"
              >
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>123 Main Street, Anytown, USA</span>
            </p>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="lg:w-1/2 p-8 w-full">
          <form class="space-y-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                :placeholder="f1"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                :placeholder="f2"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <input
              type="email"
              :placeholder="f3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="tel"
              :placeholder="f4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option>{{ t("contact.f5.t1") }}</option>
              <option>{{ t("contact.f5.o1") }}</option>
              <option>{{ t("contact.f5.o2") }}</option>
              <option>{{ t("contact.f5.o3") }}</option>
            </select>
            <textarea
              rows="4"
              placeholder="Message"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <button
              type="submit"
              class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              {{ t("contact.btn") }}
            </button>
          </form>
        </div>
      </div>

      <!-- Carte Google Maps -->
      <div class="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345094977!2d144.95592831538247!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1668644382983!5m2!1sen!2s"
          width="100%"
          height="300"
          class="rounded-lg shadow-lg"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div class="mj-container mt-16">
        <h2 class="text-3xl font-bold text-gray-800 text-center">
          {{ t("about.question_title_1") }}
          <span class="text-green-500 font-sri">
            {{ t("about.question_title_2") }}</span
          >
        </h2>
        <!-- Description -->
        <p class="text-center text-gray-600 mt-2">
          {{ t("about.question_desc") }}
        </p>
        <div class="mt-10 space-y-4 max-w-xl mx-auto">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="overflow-hidden shadow-lg"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full text-left flex justify-between items-center px-4 py-4 bg-white hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <span
                :class="{ 'text-green-500 font-medium': activeFAQ === index }"
                class="text-gray-800 text-lg"
              >
                {{ faq.question }}
              </span>
              <span
                class="bg-gray-200 rounded-full p-2"
                :class="{
                  ' bg-green-100 rounded-full p-2': activeFAQ === index,
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="{
                    'rotate-180 text-green-500 bg-green-100 rounded-full':
                      activeFAQ === index,
                  }"
                  class="h-4 w-4 text-black transform transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              v-if="activeFAQ === index"
              class="px-4 py-3 text-gray-600 bg-gray-50"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Section des images et citation -->
      <div class="mj-container mt-24">
        <div
          class="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0"
        >
          <!-- Section gauche -->
          <div class="grid grid-cols-2 gap-4 lg:w-1/3 relative">
            <div class="space-y-4 absolute left-20 -top-40 hidden lg:block">
              <img
                src="/img/co1.png"
                alt="Image 1"
                class="w-24 rounded-lg object-cover"
              />
              <img
                src="/img/co3.png"
                alt="Image 2"
                class="w-16 rounded-lg object-cover"
              />
            </div>
            <img
              src="/img/co2.png"
              alt="Image 3"
              class="absolute -top-32 left-48 w-24 rounded-lg object-cover hidden lg:block"
            />
          </div>

          <!-- Section centre -->
          <div class="lg:w-1/3 text-center">
            <div class="flex justify-center space-x-4 lg:flex">
              <img
                src="/img/co4.png"
                alt="Image 4"
                class="w-12 h-12 lg:w-10 lg:h-10 rounded-full object-cover"
              />
              <img
                src="/img/co5.png"
                alt="Image 5"
                class="w-16 h-16 lg:w-16 lg:h-16 rounded-full object-cover"
              />
              <img
                src="/img/co6.png"
                alt="Image 6"
                class="w-12 h-12 lg:w-10 lg:h-10 rounded-full object-cover"
              />
            </div>
            <p class="text-gray-800 font-sri text-lg mt-4 w-full">
              "Vively doesn't just talk about making a difference - they live it
              every day, profoundly changing lives with their initiatives."
            </p>
            <p class="mt-4 text-gray-600 font-bold">Borely Bavis</p>
          </div>

          <!-- Section droite -->
          <div class="lg:w-1/3 relative">
            <div class="space-y-4 absolute right-36 -top-40 hidden lg:block">
              <img
                src="/img/co7.png"
                alt="Image 7"
                class="w-24 rounded-lg object-cover"
              />
              <img
                src="/img/co8.png"
                alt="Image 8"
                class="w-24 rounded-lg object-cover"
              />
            </div>
            <img
              src="/img/co9.png"
              alt="Image 9"
              class="absolute -top-16 -right-18 w-20 rounded-lg object-cover hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
    <hr class="mj-container" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const f1 = ref(t("contact.f1"));
const f2 = ref(t("contact.f2"));
const f3 = ref(t("contact.f3"));
const f4 = ref(t("contact.f4"));

// Data for FAQs
const faqs = ref([
  {
    question: t("about.question_1"),
    answer: t("about.question_1_answer"),
  },
  {
    question: t("about.question_2"),
    answer: t("about.question_2_answer"),
  },
  {
    question: t("about.question_3"),
    answer: t("about.question_3_answer"),
  },
  {
    question: t("about.question_4"),
    answer: t("about.question_4_answer"),
  },
  {
    question: t("about.question_5"),
    answer: t("about.question_5_answer"),
  },
]);
// State to track the active FAQ
const activeFAQ = ref(null);

// Toggle function
const toggleFAQ = (index) => {
  activeFAQ.value = activeFAQ.value === index ? null : index;
};
</script>