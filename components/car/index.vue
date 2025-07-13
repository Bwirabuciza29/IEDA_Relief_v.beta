<template>
  <div>
  <hero
    background="/flags/cara.jpg"
    subtitle="Mission"
    titleHighlight="ieda Relief"
    title="République centrafricaine"
    description="Helping communities to become Self-sufficient"
    buttonText="Donate now"
    buttonColor="bg-custom-green hover:bg-blue-700"
  />
  <alls
    title="CAR"
    subtitle="From October 2014 to February 2017, activities implemented with WFP in CAR focused on:"
    description="
WFP supports the management of malnutrition by providing food to school canteens, often integrated with school gardens, while also managing warehouses that receive food from Bangui and Douala for distribution by all WFP partners."
    email="caroffice@iedarelief.org"
    phone="+236 72510065 / +236 72110065"
    address="Av. Barthélemy BOGANDA, Quartier SICA III, 3ème Arrondissement Bangui, Centrafrique, BP 1774 Bangui"
    rightImage="/flags/central.jpg"
    vectorImage="/img/Vectoria.png"
    bgColor="bg-custom-green"
  />
  <div class="mt-16 bg-white p-4 border-t border-b border-custom-green">
      <log />
    </div>
<volunteer
    title="Join our Mission"
    imageSrc="/flags/ied.jpg"
    imageAlt="Volunteer helping"
    badge="IEDA Relief"
    cardTitle="Helping communities to become Self-sufficient..."
    cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
    buttonText="Donate now"
    accentColor="custom-green"
    cardBgColor="custom-blue"
  />
   <div>
<div
  class="relative bg-cover bg-center h-[1500px] md:h-[700px] w-full"
  style="background-image: url('/img/r.jpg'); background-attachment: fixed;"
>
  <!-- Overlay noir -->
  <div class="absolute inset-0 bg-custom-green bg-opacity-50"></div>
   <div class="absolute inset-0 text-white px-4  border-b-4 ">
    <div class="mj-container border-t-4  border-custom-blue py-12 ">
      <h2 class="text-3xl font-extrabold text-white font-sri mb-6 text-center">
        Activities in the Prefectures of the Western Zone of <span class="text-custom-blue">CAR</span>
      </h2>
      <p class="text-center text-white max-w-3xl mx-auto mb-12">
        Implemented in the prefectures of Ouham, Ouham-Pendé, Nana-Mambéré, Mambéré-Kadei, and Sanga-Mbaéré, including Paoua Nord and Markounda.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- School Canteen Card -->
        <div class="bg-white p-6 relative overflow-hidden border-l-4 border-custom-blue">
          <h3 class="text-xl font-bold font-sri text-gray-800 mb-4 bg-custom-blue/30 inline-block border-l-4 border-custom-blue p-2 ">School Canteen</h3>
          <ul class="text-gray-600 space-y-2 text-sm list-disc pl-5">
            <li>60,000 students in 160 schools receive daily rations.</li>
            <li>Distribution in Paoua (30,000), Markounda (8,000), Boguila (4,000), Bocaranga (9,000), Ngaoundaye (6,000), Koui (3,000).</li>
            <li>532.8 tons of WFP food prepared and distributed.</li>
          </ul>
        </div>

        <!-- General Food Distribution & FFA -->
          <div class="bg-white p-6 relative overflow-hidden border-l-4 border-custom-green/30">
          <h3 class="text-xl font-sri font-semibold text-gray-800 mb-4 bg-custom-green/30 inline-block border-l-4 border-custom-green p-2 ">Food Distribution & FFA</h3>
          <ul class="text-gray-600 space-y-2 text-sm list-disc pl-5">
            <li>15,000 vulnerable households assisted (Paoua: 5,000, Markounda: 10,000).</li>
            <li>1,000 households involved in vegetable growing (80% women).</li>
            <li>5 ha of community gardens established.</li>
            <li>823.5 tons of food distributed over 6 months.</li>
            <li>Seeds & FFA support for 1,000 households (80% women).</li>
          </ul>
        </div>

        <!-- Managing Moderate Malnutrition -->
        <div class="bg-white p-6 relative overflow-hidden border-l-4 border-yellow-500">
          <h3 class="text-xl font-sri font-semibold text-gray-800 mb-4 bg-yellow-500/30 inline-block border-l-4 border-yellow-500 p-2 ">Managing Moderate Malnutrition</h3>
          <ul class="text-gray-600 space-y-2 text-sm list-disc pl-5">
            <li>1,500 BSF children (6–23 months): 500 in Paoua, 1,000 in Markounda.</li>
            <li>1,500 TSF children moderately malnourished (various zones).</li>
            <li>1,500 cases screened, referred & treated in health structures.</li>
            <li>40.5 tons of super cereal +++ distributed over 6 months.</li>
            <li>12.4 tons of plumpy-sup to 32 health facilities.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
   </div>
   <Act :pays="'CAR'" />
  </div>
</template>
<script setup>
</script>
