<template>
  <section class="bg-green-50">
    <div v-if="card">
      <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
        <img
          src="/img/Vectoria.png"
          alt="Decorative Vector"
          class="absolute top-0 left-64 h-full w-auto z-10 hidden sm:block"
        />
        <div class="mj-container">
          <div class="relative">
            <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
              <div class="flex-1 p-6 md:p-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  {{ card.title }}
                </h1>

                <nav class="text-sm text-black">
                  <div class="inline-block bg-white p-3 rounded-lg">
                    <a href="/works" class="hover:underline font-semibold">{{
                      t("works.title")
                    }}</a>
                    /
                    <span>{{ card.title }}</span>
                  </div>
                </nav>
              </div>
              <div class="flex-1 hidden md:flex">
                <img
                  :src="card.image"
                  alt="About Us Section"
                  class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:z-10 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mj-container mt-8">
        <div
          class="bg-white flex flex-col md:flex-row p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8"
        >
          <!-- Section Gauche -->
          <div class="flex-1">
            <h1 class="text-4xl font-bold text-black mb-4">
              {{ card.title }} {{ card.ti }}
            </h1>
            <p class="text-gray-600 text-justify">
              {{ card.desc_1 }}
            </p>
            <p class="text-gray-600 mt-4 text-justify">
              {{ card.desc_2 }}
            </p>
            <p class="text-gray-600 mt-4 text-justify">
              {{ card.desc_3 }}
            </p>
            <!-- Liste des activités avec icônes -->
            <!-- BURKINAFASO -->
            <div v-if="card">
              <!-- Affichage du contenu spécifique pour id === 1 -->
              <div v-if="card.id === 1">
                <h2 class="text-2xl font-bold text-black mb-4">
                  IEDA Relief organizes the following activities:
                </h2>
                <ul class="list-none space-y-4">
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-calendar-alt text-blue-500 mr-3"></i>
                    Monthly distribution plans (MDP)
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-utensils text-green-500 mr-3"></i>
                    Evaluate the Refugee feeding situation, specifically those
                    in specific needs
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-child text-yellow-500 mr-3"></i>
                    Avail Blanket supplementary Feeding to young girls and boys
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-handshake text-purple-500 mr-3"></i>
                    Organizing joint meeting prior and after distribution with
                    all the stakeholders to ensure accountability in the process
                  </li>
                </ul>
              </div>
            </div>
            <!-- FIN BURKINAFASO -->
            <!-- CAMEROUN -->
            <div v-if="card" class="mb-16">
              <!-- Affichage du contenu spécifique pour id === 2 -->
              <div v-if="card.id === 2">
                <h2 class="text-2xl font-bold text-black mb-4">
                  Blanket Supplementary Feeding (BSFP):
                </h2>
                <ul
                  class="list-inside pl-6 space-y-4 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      The objective is to contribute to the improvement of the
                      nutritional status of boys and girls between 6 and
                      59-month-old in the Far North region, specifically in the
                      Logone et Chari Department.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      The project targets Nigerian refugees as well as IDPs. So
                      far, around 93,460 boys and girls between 6 and
                      59-month-old have benefited from the partnership WFP –
                      IEDA Relief.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      The project involves:
                      <ul class="list-inside pl-6 space-y-1">
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Distributing the super cereal +++ and following up
                            treatments for severely malnourished young children
                            through reference to health centers.
                          </span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Preventing severe malnutrition among boys and girls
                            aged 6–23 months.
                          </span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Organizing treatment for moderate malnutrition for
                            boys and girls aged 6–59 months.
                          </span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Promoting and supporting complementary activities
                            related to nutrition within communities.
                          </span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Building the capacity of community workers (men and
                            women) to mobilize community members and evaluate
                            activities related to childhood nutrition and
                            protection.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      This action ensures that:
                      <ul class="list-inside pl-6 space-y-1">
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Girls and boys aged 6 to 59 months receive
                            supplementary feeding packs regularly.
                          </span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            The nutritional status of girls and boys aged 6 to
                            59 months is monitored monthly.
                          </span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            All complementary community services related to
                            young infants' nutrition are guaranteed.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>

                <h2 class="text-2xl font-bold text-black mt-8 mb-4">
                  General Food Distribution (GFD):
                </h2>
                <ul
                  class="list-inside pl-6 space-y-4 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      The objective is to improve food security and living
                      conditions in the Logone et Chari Department in the Far
                      North of Cameroon.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      This project targets IDPs and local vulnerable
                      populations. Around 300,000 people have been supported by
                      the partnership between WFP and IEDA since 2015.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      Distributed food includes:
                      <ul class="list-inside pl-6 space-y-1">
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-caret-right text-blue-500 mt-1"></i>
                          <span>
                            Rice, sorghum, maize, millet flour, and cooking oil.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      IEDA Relief has developed community capacity and raised
                      awareness to encourage community ownership and involvement
                      from all stakeholders.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>
                      IEDA distributes and works closely with the community
                      leaders to follow through complaints and ensure
                      accountability. For this, IEDA has set up the food
                      distribution community and the complaints community to
                      ensure that the food goes to the vulnerable people in a
                      transparent way.
                    </span>
                  </li>
                </ul>

                <p class="text-justify mt-6">
                  These two projects have helped IEDA-WFP strengthen their
                  partnership and consolidate their operational ties through
                  joint monitoring actions.
                </p>
              </div>
            </div>
            <!-- FIN CAMEROUN -->
            <!-- RCA -->
            <div v-if="card" class="mb-16 -mt-14">
              <!-- Affichage du contenu spécifique pour id === 3 -->
              <div v-if="card.id === 3">
                <h2 class="text-2xl font-bold text-black mb-4">
                  Activities in the Prefectures of the Western Zone of CAR:
                </h2>
                <p class="text-gray-600 mb-4 text-justify">
                  These activities were implemented in the Prefectures of the
                  Western Zone of CAR: Ouham, Ouham-Pendé, Nana-Mambéré,
                  Mambéré-Kadei, and Sanga-Mbaéré. These prefectures are from
                  Paoua Nord and in Markounda.
                </p>
                <p class="text-gray-600 mb-6 text-justify">
                  Since March 2017 to date, the activities underway are:
                </p>

                <h3 class="text-xl font-semibold text-blue-600 mb-2">
                  School Canteen
                </h3>
                <ul
                  class="list-inside pl-6 space-y-2 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-school text-yellow-500 mt-1"></i>
                    <span>
                      At least 60,000 students in 160 schools receive daily
                      rations (including 30,000 in Paoua, 8,000 to Markounda,
                      4,000 in Boguila, 9,000 in Bocaranga, 6,000 in Ngaoundaye,
                      and 3,000 in Koui).
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-utensils text-yellow-500 mt-1"></i>
                    <span>
                      At least 532,786 tons of WFP food are prepared and
                      distributed in the 160 selected schools.
                    </span>
                  </li>
                </ul>

                <h3 class="text-xl font-semibold text-blue-600 mt-6 mb-2">
                  General Food Distribution and Food For Asset
                </h3>
                <ul
                  class="list-inside pl-6 space-y-2 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-boxes text-orange-500 mt-1"></i>
                    <span>
                      At least 15,000 vulnerable households are identified and
                      assisted with food, including 5,000 in Paoua and 10,000 in
                      Markounda.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-leaf text-green-500 mt-1"></i>
                    <span>
                      At least 1,000 households (500 in Paoua and 500 in
                      Markounda) are involved in vegetable growing activities
                      with the FFA, of which at least 80% are women.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-seedling text-green-500 mt-1"></i>
                    <span
                      >5 hectares of community vegetable gardens are
                      established.</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-truck-loading text-orange-500 mt-1"></i>
                    <span>
                      823,500 tons of WFP food are distributed to 15,000
                      vulnerable people for 6 months.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-seedling text-green-500 mt-1"></i>
                    <span>
                      At least 1,000 households receive seeds and are supervised
                      by the FFA to replenish their assets, with 80% of women
                      being financially self-sufficient.
                    </span>
                  </li>
                </ul>

                <h3 class="text-xl font-semibold text-blue-600 mt-6 mb-2">
                  Managing Moderate Malnutrition
                </h3>
                <ul
                  class="list-inside pl-6 space-y-2 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-baby-carriage text-pink-500 mt-1"></i>
                    <span>
                      Nutrition BSF (6–23 months): 1,500 children, including 500
                      in Paoua and 1,000 in Markounda.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-heartbeat text-red-500 mt-1"></i>
                    <span>
                      Nutrition TSF: 1,500 moderately malnourished children (400
                      in Paoua, 150 in Markounda, 440 in Bocaranga, 410 in
                      Ngaoundaye, and 100 in Koui).
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-stethoscope text-red-500 mt-1"></i>
                    <span
                      >1,500 cases are screened, referred, and treated in
                      targeted health structures.</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-capsules text-blue-500 mt-1"></i>
                    <span>
                      40,500 tons of super cereal +++ are distributed to healthy
                      children from 6 to 23 months during 6 months of the
                      project.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-medkit text-blue-500 mt-1"></i>
                    <span
                      >12,420 tons of plumpy-sup are distributed in 32 health
                      facilities.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- FIN RCA -->
            <!-- MALI -->
            <div v-if="card" class="mb-16">
              <!-- Affichage du contenu spécifique pour id === 4 -->
              <div v-if="card.id === 4">
                <h2 class="text-2xl font-bold text-black mb-4">
                  Activities in the Regions of Kidal and Timbuktu
                </h2>

                <h3 class="text-xl font-semibold text-blue-600 mb-2">
                  In the Region of Kidal
                </h3>
                <ul
                  class="list-inside pl-6 space-y-4 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-bread-slice text-yellow-500 mt-1"></i>
                    <span>
                      <strong>General Food Distribution</strong> targeting
                      households facing a severe shortage of foodstuff. 550 tons
                      of cereal, oil, beans, and salt were distributed to 2,209
                      households (11,910 people) in the year 2016; we expect the
                      same results by the end of this year 2017.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-baby-carriage text-pink-500 mt-1"></i>
                    <span>
                      <strong>Blanket feeding</strong> targeting Pregnant and
                      Lactating women (PLW), children from 6 to 23 months old;
                      for this year 2017, a total of 5,340 children and 2,225
                      PLW are benefiting from this program in the Kidal region.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-heartbeat text-red-500 mt-1"></i>
                    <span>
                      <strong>Treatment of moderate acute malnutrition</strong>,
                      targeting PLW and children from 6 to 59 months. 1,841
                      children and 1,033 PLW suffering from MAM were enrolled in
                      our supplementary feeding program (SFP) in 2016. The
                      caseload for 2017 is 1,500 children and 1,112 PLW.
                    </span>
                  </li>
                </ul>

                <h3 class="text-xl font-semibold text-blue-600 mt-6 mb-2">
                  In the Region of Timbuktu
                </h3>
                <ul
                  class="list-inside pl-6 space-y-4 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-cogs text-orange-500 mt-1"></i>
                    <span>
                      <strong>Third-party Monitoring (TPM)</strong> for the
                      overall projects of the Implementing Partners of WFP. This
                      activity has four components: Process monitoring, Activity
                      implementation monitoring, Output monitoring, and Outcome
                      monitoring.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-project-diagram text-blue-500 mt-1"></i>
                    <span>
                      For the year 2017, a total of 54 projects implemented by
                      11 Implementing Partners (IPs) are monitored in the region
                      of Timbuktu, relating to GFD, School Feeding, Food for
                      Assets, SFP, and Blanket Feeding.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <!--FIN MALI -->
            <!-- NIGER -->
            <div v-if="card" class="mb-16">
              <!-- Affichage du contenu spécifique pour id === 5 -->
              <div v-if="card.id === 5">
                <h2 class="text-2xl font-bold text-black mb-4">
                  Project Overview and Objectives
                </h2>
                <p class="text-gray-700 text-justify mb-4">
                  The project began on October 1<sup>st</sup> and ends on
                  December 31<sup>st</sup>, 2017. It consists of closely
                  monitoring food assistance activities with a view to
                  contributing to respect for human dignity and reducing the
                  risk of conflict.
                </p>
                <p class="text-gray-700 text-justify mb-4">
                  In other words, it consists of:
                </p>
                <ul
                  class="list-inside pl-6 space-y-4 text-gray-600 text-justify"
                >
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-warehouse text-blue-500 mt-1"></i>
                    <span>
                      Systematic monitoring of food and nutrition storage
                      mechanisms provided by WFP (receiving and storing food and
                      consolidating data after distributions).
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-tasks text-green-500 mt-1"></i>
                    <span>
                      Monitoring the implementation of PRRO and EMOP project
                      activities at the sites.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-hand-holding-heart text-red-500 mt-1"></i>
                    <span>
                      Monitoring food distribution activities, cash, and
                      vouchers in all its aspects (protection, gender,
                      accountability, information to beneficiaries on
                      distributions, management of complaints, exchanges with
                      local authorities, implementation of security aspects of
                      distribution sites, etc.).
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check-circle text-yellow-500 mt-1"></i>
                    <span>
                      Evaluate the conformity of the food basket with WFP's
                      expectations from beneficiaries.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-calendar-check text-purple-500 mt-1"></i>
                    <span>
                      Verify the conformity of the distribution process
                      according to the schedule submitted by the distribution
                      partners.
                    </span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-file-alt text-gray-500 mt-1"></i>
                    <span>
                      Produce a monthly report to the WFP’s Diffa Sub-Office on
                      partner activities related to the issues identified.
                    </span>
                  </li>
                </ul>

                <p class="text-gray-700 text-justify mt-6 mb-4">
                  The project plans to reach 62 school canteens, 12 CRENAM, and
                  18 Targeted Free Distribution sites (DGC) in the
                  municipalities of Bosso, Kabléwa, N'gourti, N'guigmi, and
                  Toumour.
                </p>
                <p class="text-gray-700 text-justify">
                  In the long term, the project should lead to an improvement in
                  the quality of distribution, secure distribution sites, and
                  ensure that the data between the quantities delivered by
                  logistics and those received by distribution partners in areas
                  with limited or difficult access are consistent.
                </p>
              </div>
            </div>

            <!-- FIN NIGER -->
          </div>

          <!-- Section Droite -->
          <div class="w-full h-72 mb-12 md:w-1/3 bg-green-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">
              Have Additional Questions?
            </h3>
            <ul class="space-y-4">
              <li class="flex items-center">
                <i
                  class="fas fa-envelope text-white text-xs mr-3 rounded-full p-2 bg-green-500"
                ></i>
                <span class="text-gray-600 hover:underline">{{
                  card.email
                }}</span>
              </li>
              <li class="flex items-center">
                <i
                  class="fas fa-phone-alt text-white text-xs mr-3 rounded-full p-2 bg-green-500"
                ></i>
                <span class="text-gray-600 hover:underline">{{
                  card.phone
                }}</span>
              </li>
              <li class="flex items-center">
                <i
                  class="fas fa-map-marker-alt text-white text-xs mr-3 rounded-full p-2 bg-green-500"
                ></i>
                <span class="text-gray-600 hover:underline mb-4"
                  >{{ card.li_2 }} {{ card.capital }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mj-container mb-8">
        <div
          class="bg-white mt-4 flex flex-col md:flex-row p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8"
        >
          <!-- Section Gauche -->
          <div class="flex-1">
            <div class="relative">
              <!-- Début video -->
              <div
                class="w-full h-full overflow-hidden rounded-lg shadow-lg bg-custom-green"
              >
                <!-- Header -->
                <div
                  class="z-20 w-full bg-custom-green bg-opacity-70 px-4 py-2 backdrop-blur-lg"
                >
                  <div class="-m-2 flex flex-wrap items-center justify-between">
                    <!-- Circles -->
                    <div class="w-auto p-2">
                      <div class="flex flex-row">
                        <div class="w-auto p-1">
                          <div
                            class="h-2 w-2 rounded-full border border-red-500 bg-red-400"
                          ></div>
                        </div>
                        <div class="w-auto p-1">
                          <div
                            class="h-2 w-2 rounded-full border border-yellow-500 bg-yellow-400"
                          ></div>
                        </div>
                        <div class="w-auto p-1">
                          <div
                            class="h-2 w-2 rounded-full border border-green-500 bg-green-400"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="p-2">
                      <div
                        class="mx-auto max-w-xs rounded bg-white px-4 py-0.5 text-center text-xs font-medium tracking-tight text-custom-green"
                      >
                        <span>IEDA Relief</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Video Section -->
                <div class="relative">
                  <div
                    ref="youtube"
                    class="plyr w-full rounded-lg shadow-lg"
                    controls
                    :data-plyr-provider="'youtube'"
                    :data-plyr-embed-id="card.videoId"
                  ></div>
                </div>
              </div>
            </div>
            <!-- Fin video -->
            <!-- Description principale -->

            <!-- Section Volunteer -->
            <div class="mt-6">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                Volunteer with Us
              </h2>
              <p class="text-gray-600 mb-4">
                Egestas pretium aenean pharetra magna ac placerat. Nisi lacus
                sed viverra tellus.
              </p>
              <NuxtLink
                to="/works"
                class="text-custom-blue underline hover:text-blue-600 font-semibold"
                >BACK TO WORK!
              </NuxtLink>
            </div>
            <hr class="my-6" />
            <!-- Tags sociaux -->

            <!-- Social Icons -->
            <div
              class="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 mt-6"
            >
              <!-- Tags -->
              <div
                class="flex flex-wrap gap-2 justify-center w-full sm:justify-start"
              >
                <span
                  class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm text-center"
                >
                  #SocialImpact
                </span>
                <span
                  class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm text-center"
                >
                  #ChangingLives
                </span>
              </div>
              <!-- Social Icons -->
            </div>
            <!-- Fin Social Icons -->
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <p class="text-gray-600">Loading...</p>
    </div>
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
import { onMounted, ref, nextTick } from "vue";
const { t } = useI18n();
const route = useRoute();
const card = ref(null);
const video = ref(null);
const youtube = ref(null);

function animateValue(target, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment = range / (duration / 10);
  const interval = setInterval(() => {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      current = end;
      clearInterval(interval);
    }
    target.value = Math.round(current);
  }, 10);
}
// Déclaration des données
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);

const cards = [
  {
    id: 1,
    image: "/img/w.jpg",
    tag: t("works.title"),
    title: "Burkina Faso",
    capital: "Ouagadougou",
    mean: "Burkina Faso, which means land of honest men",
    email: "burkinafasooffice@iedarelief.org",
    phone: "+226 25374622",
    li_2: "05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi, secteur 53, Section PLot 17, Parcelle No 6 Ouaga2000",
    description:
      "Empowering communities with essential knowledge and practices to promote health and prevent",
    desc_1:
      "Since the Mali crisis in 2012, WFP signed a tripartite accord (UNHCR, WFP, and IEDA Relief) to ensure food distribution to 33000 Mali refugees living in and outside the camps.",
    desc_2:
      "Food distribution is done on a monthly basis and it includes rice, CSB, Oil, salt, and cereals. WFP avails about 6888 tonnes (574 tonnes monthly) through UNHCR, which pays for the operational costs at around 180. 000 USD",
    desc_3: "",
    ti: "which means land of honest men",
    videoId: "https://www.youtube.com/watch?v=OwEpDNF55dY",
  },
  {
    id: 2,
    image: "/img/w2.jpg",
    tag: t("works.title"),
    title: "Cameroun",
    capital: "Younde",
    description:
      "Providing Harper with the freedom and independence to navigate the world with ease",
    email: "cameroonoffice@iedarelief.org",
    phone: "+236 74125446",
    li_2: "Yaoundé, derrière la sous-préfecture de Tshinga, montée Palais des congrès m.",
    videoId: "https://youtu.be/a_mBE32q0m4",
  },
  {
    id: 3,
    image: "/img/w3.jpg",
    tag: t("works.title"),
    title: "Central Africa Republic",
    capital: "Bangui",
    description:
      "Join us in providing compassionate support and resources for Daniel as he embarks on his",
    email: "caroffice@iedarelief.org",
    phone: "+236 72510065",
    li_2: "Av. Barthélemy BOGANDA, Quartier SICA III, 3ème Arrondissement Bangui, Centrafrique, BP 1774 Bangui",
    videoId: "https://youtu.be/Ue1RvItha5A",
    desc_1:
      "From October 2014 to February 2017, activities implemented with WFP in CAR focused on:",
    desc_2:
      "WFP supports the management of malnutrition by providing food to school canteens, often integrated with school gardens, while also managing warehouses that receive food from Bangui and Douala for distribution by all WFP partners.",
    desc_3: "",
  },

  {
    id: 4,
    image: "/img/w4.jpg",
    tag: t("works.title"),
    title: "Mali",
    capital: "Bamako",
    description:
      "Cancer Battle Fund provides critical financial support for Olivia's medical treatment, offering hope and …",

    email: "malioffice@iedarelief.org",
    phone: "+223 74613901",
    li_2: "BP 3113 Bamako, Hamdallay, ACI 2000, 5eme Arrondissement",
    videoId: "https://youtu.be/JgFih2x1jFA",
    desc_1:
      "IEDA Relief has been partnering with WFP in Northern Mali since 2014 to mitigate the harmful effects of the conflict on vulnerable populations regarding Emergency Food Security and Livelihood. The section below presents an overview of projects implemented by IEDA Relief",
  },
  {
    id: 5,
    image: "/img/w5.jpg",
    tag: t("works.title"),
    title: "Niger",
    capital: "Niamey",
    description:
      "Response teams delivering lifesaving aid for children impacted by any major humanitarian ..",

    email: "nigermission@iedarelief.org",
    phone: "+227 89 97 04 60",
    li_2: "Quartier Bobiel vers école Galaxy plus premier virage à gauche après le siège National de ADN FUSHA, Commune I,Ville de Niamey",
    videoId: "https://youtu.be/ogGFt45uu28",
    desc_1:
      "In response to the humanitarian crisis in the Diffa region, IEDA Relief is implementing, in partnership with WFP, a project called «Monitoring by third party of the operations of WFP in Diffa”",
  },
  {
    id: 8,
    image: "/img/w8.jpg",
    tag: t("works.title"),
    title: "Democratic Rep. of the Congo",
    capital: "Kinshasa",
    description:
      "Providing specialized medical care and rehabilitation to children affected by war, offering hope and …",
    email: "drcoffice@iedarelief.org",
    phone: "+243 995614803",
    li_2: "Avenue O.U.A, N°17, Quartier Basoko/GB, Commune de Ngaliema, ville de Kinshasa, RDC",
    videoId: "https://youtu.be/4N1xCpN5EeM",
  },
];

onMounted(async () => {
  const id = parseInt(route.params.id);
  card.value = cards.find((c) => c.id === id);

  if (!card.value) {
    console.error("Card not found");
    return;
  }

  const { $plyr } = useNuxtApp();

  // Assurez-vous que le DOM est prêt avant d'initialiser Plyr
  await nextTick();

  // Initialiser Plyr pour YouTube
  if (youtube.value) {
    try {
      const youtubePlayer = new $plyr(youtube.value, {
        autoplay: false,
        muted: false,
      });
    } catch (error) {
      console.error("Failed to initialize YouTube player:", error);
    }
  } else {
    console.warn("YouTube element is not available");
  }

  // Initialiser Plyr pour une vidéo locale
  if (video.value) {
    try {
      const player = new $plyr(video.value);
    } catch (error) {
      console.error("Failed to initialize video player:", error);
    }
  } else {
    console.warn("Video element is not available");
  }

  // Animation des compteurs
  animateValue(count1, 0, 20, 2000);
  animateValue(count2, 0, 2200000, 3000);
  animateValue(count3, 0, 2008, 1500);
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
