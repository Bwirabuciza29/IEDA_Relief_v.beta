<template>
  <section class="relative bg-custom-blue p-8 mx-4 ">
    <HelpParticle  container-id="home-bg"
      :config="customConfig" />
    <div class="mj-container text-center relative z-10">
      <div class="w-full text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          {{ t1 }}
          <span class="font-sri text-green-200">{{ t2 }}</span>
          <br />
          <span>{{ t3 }}</span>
        </h2>
        <p class="text-white mb-6">
          {{ desc }}
        </p>
        <form
          @submit.prevent="submitSubscription"
          class="space-y-4 w-full max-w-md mx-auto"
        >
          <!-- First Name and Last Name -->
          <div class="flex flex-col md:flex-row md:space-x-4">
            <input
              v-model="name"
              id="name"
              type="text"
              :placeholder="frm_1"
              class="w-full p-3 text-sm border border-custom-blue  focus:ring-2 focus:ring-custom-blue"
              required
            />
            <input
              v-model="last_name"
              id="last_name"
              type="text"
              :placeholder="frm_2"
              class="w-full p-3 text-sm border border-custom-blue  focus:ring-2 focus:ring-custom-blue mt-3 md:mt-0"
              required
            />
          </div>
          <!-- Email and Subscribe Button -->
          <div class="space-y-3 gap-2">
            <input
              v-model="email"
              id="email"
              type="email"
              :placeholder="frm_3"
              class="w-full p-3 text-sm border border-custom-blue  focus:ring-2 focus:ring-custom-blue"
              required
            />
            <button
              class="w-full bg-blue-600 text-white py-3 px-4 text-sm border border-blue-300 hover:bg-blue-700 transition"
            >
              {{ btn }}
            </button>
          </div>
          <p v-if="successMessage" class="mt-4 text-yellow-200 font-medium">
            {{ successMessage }} de
            <span class="text-green-300"> l'ieda Relief</span>
          </p>
          <p v-if="errorMessage" class="mt-4 text-red-400 font-medium">
            🫣 {{ errorMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const name = ref("");
const last_name = ref("");
const email = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const { createItems } = useDirectusItems();

const submitSubscription = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (!validateEmail(email.value)) {
    errorMessage.value = "Veuillez entrer une adresse email valide.";
    return;
  }

  try {
    const items = [
      { name: name.value, last_name: last_name.value, email: email.value },
    ];
    await createItems({ collection: "subscription", items });
    successMessage.value = "You are successfully subscribed to the newsletter";
    // Réinitialise les champs
    name.value = "";
    last_name.value = "";
    email.value = "";
  } catch (e) {
    if (e?.data?.errors?.[0]?.extensions?.code === "RECORD_NOT_UNIQUE") {
      errorMessage.value = "Sorry!! This email already exists in our mails.";
    } else {
      errorMessage.value =
        "An unexpected error has occurred. Please try again later.";
      console.error("Erreur : ", e);
    }
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
const t1 = ref(t("subscribe.t1"));
const t2 = ref(t("subscribe.t2"));
const t3 = ref(t("subscribe.t3"));
const desc = ref(t("subscribe.desc"));
const frm_1 = ref(t("subscribe.frm_1"));
const frm_2 = ref(t("subscribe.frm_2"));
const frm_3 = ref(t("subscribe.frm_3"));
const btn = ref(t("subscribe.btn"));
const customConfig = {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 700 } },
    color: { value: "#00ffcc" },
    shape: { type: "triangle" },
    opacity: { value: 0.6 },
    size: { value: 3, random: true },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
    },
  },
  retina_detect: true,
}
</script>
