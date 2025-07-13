<template>
  <div>
  <hero
    background="/flags/malila.jpg"
    subtitle="Mission"
    titleHighlight="ieda Relief"
    title="Niger"
    description="Helping communities to become Self-sufficient"
    buttonText="Donate now"
    buttonColor="bg-custom-green hover:bg-blue-700"
  />
  <alls
    title="Niger"
    subtitle="Niger's mission"
    description="In response to the humanitarian crisis in the Diffa region, IEDA Relief is implementing, in partnership with WFP, a project called «Monitoring by third party of the operations of WFP in Diffa”"
    email="nigermission@iedarelief.org"
    phone="+227 89 97 04 60"
    address="Quartier Bobiel vers école Galaxy plus premier virage à gauche après le siège National de ADN FUSHA, Commune I,Ville de Niamey"
    rightImage="/flags/niger.jpg"
    vectorImage="/img/Vectoria.png"
    bgColor="bg-custom-green"
  />
  <div class="mt-16 bg-white p-4 border-t border-b border-custom-green">
      <log />
    </div>
<volunteer
    title="Join our Mission"
    imageSrc="/flags/nn.jpg"
    imageAlt="Volunteer helping"
    badge="IEDA Relief"
    cardTitle="Helping communities to become Self-sufficient..."
    cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
    buttonText="Donate now"
    accentColor="custom-green"
    cardBgColor="custom-blue"
  />
  <div class="bg-white">
    <div class="mj-container py-12 border-t-4 border-b-4 border-dashed border-custom-green">
       <div class="border-l-4 border-custom-green pl-4 mb-6" >
        <h2 class="text-2xl sm:text-4xl font-sri font-bold text-gray-900">
       Project Overview & Objectives
        </h2>
      </div>
      <p class="text-gray-600 mb-8">
        This project runs from <span class="font-medium text-custom-blue font-sri">October 1st to December 31st, 2017</span>. Its primary goal is to monitor food assistance closely, ensuring dignity, reducing conflict risks, and improving aid effectiveness in targeted municipalities.
      </p>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white shadow p-6 border border-blue-100">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-blue-100 text-blue-600 p-3 rounded-full">
              <i class="fas fa-warehouse text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">Storage Monitoring</h3>
          </div>
          <p class="text-sm text-gray-600">
            Systematic monitoring of food and nutrition storage mechanisms provided by WFP, including reception, storage, and post-distribution data consolidation.
          </p>
        </div>

        <div class="bg-white shadow  p-6 border border-green-100">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-green-100 text-green-600 p-3 rounded-full">
              <i class="fas fa-tasks text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">Field Activity Tracking</h3>
          </div>
          <p class="text-sm text-gray-600">
            On-site monitoring of PRRO and EMOP activities, ensuring alignment with project goals and standards.
          </p>
        </div>

        <div class="bg-white shadow  p-6 border border-yellow-100">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-yellow-100 text-yellow-600 p-3 rounded-full">
              <i class="fas fa-hand-holding-usd text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">Distribution Oversight</h3>
          </div>
          <p class="text-sm text-gray-600">
            Supervision of food, cash, and voucher distributions, covering protection, gender, accountability, and site safety.
          </p>
        </div>

        <div class="bg-white shadow  p-6 border border-purple-100">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-purple-100 text-purple-600 p-3 rounded-full">
              <i class="fas fa-check-circle text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">Quality Assurance</h3>
          </div>
          <p class="text-sm text-gray-600">
            Ensure the food basket meets WFP standards and that distributions follow agreed schedules.
          </p>
        </div>

        <div class="bg-white shadow p-6 border border-red-100">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-red-100 text-red-600 p-3 rounded-full">
              <i class="fas fa-file-alt text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">Reporting</h3>
          </div>
          <p class="text-sm text-gray-600">
            Produce monthly reports to the WFP Diffa Sub-Office on partner activities and issues identified.
          </p>
        </div>

        <div class="bg-white shadow p-6 border border-indigo-100">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-indigo-100 text-indigo-600 p-3 rounded-full">
              <i class="fas fa-map-marker-alt text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800">Targeted Areas</h3>
          </div>
          <p class="text-sm text-gray-600">
            62 school canteens, 12 CRENAMs, and 18 DGCs in Bosso, Kabléwa, N’gourti, N’guigmi, and Toumour.
          </p>
        </div>
      </div>

      <div class="mt-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          <i class="fas fa-shield-alt text-base"></i>
          Long-term goal: improve distribution quality and data consistency.
        </div>
      </div>
    </div>
  </div>
   <Act :pays="'Niger'" />
  </div>
</template>
<script setup>
</script>
