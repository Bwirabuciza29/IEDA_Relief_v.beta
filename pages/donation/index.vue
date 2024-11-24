<template>
  <div>
    <div class="mj-container mt-24">
      <!-- Section principale -->
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- Colonne gauche -->
        <div class="lg:w-1/2">
          <h1 class="text-4xl font-bold">
            {{ title_1 }}
            <span
              class="font-sri hover:underline transition-transform duration-300 hover:scale-105"
              >{{ title_2 }}</span
            >
            {{ title_3 }}
          </h1>
          <p class="mt-2 text-gray-600">
            {{ desc }}
          </p>

          <!-- Liste des récents dons -->
          <div class="mt-6 space-y-4">
            <h1 class="text-2xl font-bold">{{ sub_title }}</h1>
            <div
              class="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-50 hover:bg-white hover:border-custom-green hover:scale-105 transition-transform duration-300 ease-in-out border"
              v-for="donation in recentDonations"
              :key="donation.id"
            >
              <p>{{ donation.description }}</p>
              <span class="text-xl font-semibold text-black"
                >${{ donation.amount }}</span
              >
            </div>
          </div>
        </div>

        <!-- Colonne droite -->
        <div class="lg:w-1/2">
          <!-- Boutons de bascule -->
          <div class="w-full flex flex-col-2 items-center mb-6 gap-2">
            <button
              :class="[
                'w-full px-4 py-2 text-center rounded-md transition duration-200',
                isGiveOnce ? 'bg-custom-green text-white' : 'bg-gray-50',
              ]"
              @click="toggleForm('giveOnce')"
            >
              {{ btn_1 }}
            </button>
            <button
              :class="[
                'w-full px-4 py-2 text-center rounded-md transition duration-200',
                isGiveOnce ? 'bg-gray-50' : 'bg-custom-green text-white',
              ]"
              @click="toggleForm('monthly')"
            >
              {{ btn_2 }}
            </button>
          </div>
          <div>
            <div v-if="isGiveOnce" class="w-full">
              <form class="space-y-4 p-6 bg-gray-50">
                <!-- Boutons de sélection des montants -->
                <div class="flex flex-wrap gap-2 w-full">
                  <button
                    v-for="option in options"
                    :key="option"
                    @click.prevent="setAmount(option)"
                    :class="[
                      'flex-1 py-2 text-center rounded-lg border transition duration-200',
                      selectedAmount === option
                        ? 'border-custom-green text-custom-green'
                        : 'bg-gray-100',
                    ]"
                  >
                    ${{ option }}
                  </button>
                </div>

                <!-- Champs du formulaire -->
                <div
                  class="relative w-full flex items-center border rounded focus-within:border-custom-green"
                >
                  <!-- Signe dollar -->
                  <span class="absolute left-3 text-gray-500">$</span>

                  <!-- Champ de saisie -->
                  <input
                    v-model="amount"
                    type="number"
                    placeholder="Enter Amount"
                    class="w-full p-2 pl-8 pr-12 border-none focus:outline-none rounded"
                  />

                  <!-- Texte USD -->
                  <span class="absolute right-3 text-gray-500">USD</span>
                </div>

                <!-- Champ de texte pour le nom -->
                <input
                  type="text"
                  :placeholder="frm_1"
                  class="w-full p-2 rounded border focus:outline-none focus:border-custom-green"
                />

                <!-- Champ de texte pour l'email -->
                <input
                  type="email"
                  :placeholder="frm_2"
                  class="w-full p-2 rounded border focus:outline-none focus:border-custom-green"
                />

                <!-- Zone de texte pour les commentaires -->
                <textarea
                  :placeholder="frm_3"
                  class="w-full p-2 rounded border focus:outline-none focus:border-custom-green"
                ></textarea>

                <!-- Checkbox -->
                <div class="flex items-center gap-2">
                  <!-- Première checkbox -->
                  <input
                    type="checkbox"
                    id="hide-name"
                    class="h-4 w-4 text-green-500"
                  />
                  <label for="hide-name" class="text-gray-600 text-sm">{{
                    check_1
                  }}</label>

                  <input
                    type="checkbox"
                    id="contact-me"
                    class="h-4 w-4 text-green-500"
                    disabled
                  />
                  <label for="contact-me" class="text-gray-600 text-sm">
                    {{ check_2 }}
                  </label>
                </div>

                <!-- Bouton de soumission -->
                <button
                  type="submit"
                  class="w-full py-2 text-white bg-green-400 rounded-lg"
                >
                  {{ btn_3 }}
                </button>
              </form>
            </div>

            <!-- Formulaire mensuel -->
            <div v-else>
              <form class="space-y-4 p-6 bg-gray-50">
                <h3 class="text-xl font-semibold">Monthly</h3>

                <!-- Champ de saisie pour le montant mensuel -->

                <div
                  class="relative w-full flex items-center border rounded focus-within:border-green-400"
                >
                  <!-- Signe dollar -->
                  <span class="absolute left-3 text-gray-500">$</span>

                  <!-- Champ de saisie -->
                  <input
                    v-model="amount"
                    type="number"
                    placeholder="Enter Amount"
                    class="w-full p-2 pl-8 pr-12 border-none focus:outline-none rounded"
                  />

                  <span class="absolute right-3 text-gray-500">USD</span>
                </div>

                <input
                  type="text"
                  :placeholder="frm_1"
                  class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
                />

                <input
                  type="email"
                  :placeholder="frm_2"
                  class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
                />

                <textarea
                  :placeholder="frm_3"
                  class="w-full p-2 border rounded focus:outline-none focus:border-green-400"
                ></textarea>
                <!-- Checkbox -->
                <div class="flex items-center gap-2">
                  <!-- Première checkbox -->
                  <input
                    type="checkbox"
                    id="hide-name"
                    class="h-4 w-4 text-green-500"
                  />
                  <label for="hide-name" class="text-gray-600 text-sm">{{
                    check_1
                  }}</label>

                  <input
                    type="checkbox"
                    id="contact-me"
                    class="h-4 w-4 text-green-500"
                    disabled
                  />
                  <label for="contact-me" class="text-gray-600 text-sm">
                    {{ check_2 }}
                  </label>
                </div>

                <!-- Bouton de soumission -->
                <button
                  type="submit"
                  class="w-full py-2 text-white bg-green-400 rounded"
                >
                  {{ btn_3 }}
                </button>
              </form>
            </div>
            <!-- Formulaires -->
          </div>
        </div>
      </div>
    </div>
    <div class="my-16">
      <log />
    </div>
  </div>
</template>

<script setup>
const isGiveOnce = ref(true);
const recentDonations = ref([
  {
    id: 1,
    description:
      "Michael R. made a one-time donation to support the Pet Pals Monthly Giving Circle.",
    amount: 40,
  },
  {
    id: 2,
    description:
      "Aurora C. made a one-time donation to support the Enriching Senior Lives.",
    amount: 500,
  },
  {
    id: 3,
    description:
      "Horizon P. made a one-time donation to support the Homeless Shelter Meals.",
    amount: 12,
  },
]);

const options = [25, 50, 75, 100, 250];
const selectedAmount = ref(null);
const amount = ref(0);

const toggleForm = (type) => {
  isGiveOnce.value = type === "giveOnce";
};

const setAmount = (value) => {
  amount.value = value;
  selectedAmount.value = value;
};
const { t } = useI18n();
const title_1 = ref(t("donation.title_1"));
const title_2 = ref(t("donation.title_2"));
const title_3 = ref(t("donation.title_3"));
const desc = ref(t("donation.desc"));
const sub_title = ref(t("donation.sub_title"));
const btn_1 = ref(t("donation.btn_1"));
const btn_2 = ref(t("donation.btn_2"));
const btn_3 = ref(t("donation.btn_3"));
const frm_1 = ref(t("donation.frm_1"));
const frm_2 = ref(t("donation.frm_2"));
const frm_3 = ref(t("donation.frm_3"));
const check_1 = ref(t("donation.check_1"));
const check_2 = ref(t("donation.check_2"));
</script>

