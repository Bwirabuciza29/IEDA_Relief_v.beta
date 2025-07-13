<template>
  <div>
  <hero
    background="/flags/nienfant.jpg"
    subtitle="Mission"
    titleHighlight="ieda Relief"
    title="Mali"
    description="Helping communities to become Self-sufficient"
    buttonText="Donate now"
    buttonColor="bg-custom-green"
  />
  <alls
    title="Mali"
    subtitle="Burkina Faso means 'Land of Honest Men'"
    description="IEDA Relief has been partnering with WFP in Northern Mali since 2014 to mitigate the harmful effects of the conflict on vulnerable populations regarding Emergency Food Security and Livelihood. The section below presents an overview of projects implemented by IEDA Relief"
    email="malioffice@iedarelief.org"
    phone="+223 74613901"
    address="BP 3113 Bamako, Hamdallay, ACI 2000, 5eme Arrondissement Bamako"
    rightImage="/flags/mal.jpg"
    vectorImage="/img/Vectoria.png"
    bgColor="bg-custom-green"
  />
 
<volunteer
    title="Join our Mission"
    imageSrc="/flags/mm.jpg"
    imageAlt="Volunteer helping"
    badge="IEDA Relief"
    cardTitle="Helping communities to become Self-sufficient..."
    cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
    buttonText="Donate now"
    accentColor="custom-green"
    cardBgColor="custom-blue"
  />
<div
  class="relative bg-cover bg-center h-[1100px] md:h-[700px] w-full"
  style="background-image: url('/flags/hello.jpg'); background-attachment: fixed;"
>
  <!-- Overlay noir -->
  <div class="absolute inset-0 bg-black bg-opacity-60"></div>

  <!-- Contenu texte au-dessus -->
  <div class="absolute inset-0 text-white px-4 ">
   <div class="mj-container my-8">
    
       <div class="border-l-4 pl-4 mb-6 border-custom-green">
        <h2 class="text-2xl sm:text-4xl font-bold text-hite">
            Activities in the Regions of Kidal and Timbuktu
        </h2>
      </div>

    <!-- Kidal -->
    <h3 class="text-xl md:text-2xl font-semibold text-center text-custom-green font-sri mb-4">In the Region of Kidal</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <activity
        v-for="(activity, index) in kidalActivities"
        :key="'kidal-' + index"
        v-bind="activity"
      />
    </div>

    <!-- Timbuktu -->
    <h3 class="text-xl md:text-2xl font-semibold text-center text-custom-green font-sri mb-4">In the Region of Timbuktu</h3>
    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
      <activity
        v-for="(activity, index) in timbuktuActivities"
        :key="'timbuktu-' + index"
        v-bind="activity"
      />
    </div>
   </div>
  </div>
</div>
 
  </div>
</template>
<script setup>

const kidalActivities = [
  {
    icon: 'fa-solid fa-box',
    borderColor: 'border-l-custom-green',
    title: 'General Food Distribution – Kidal',
    description:
      '550 tons of cereal, oil, beans, and salt were distributed to 2,209 households (11,910 people) in 2016; similar results expected by end of 2017.',
  },
  {
    icon: 'fa-solid fa-baby',
     borderColor: 'border-l-custom-green',
    title: 'Blanket Feeding – Kidal',
    description:
      '5,340 children and 2,225 pregnant/lactating women are benefiting from the program in 2017.',
  },
    {
    icon: 'fa-solid fa-heartbeat',
    borderColor: 'border-l-custom-green',
    title: 'Treatment of Moderate Acute Malnutrition – Kidal',
    description:
      '1,500 children and 1,112 PLW are the 2017 caseload in our supplementary feeding program.',
  },
]

const timbuktuActivities = [
 
  {
    icon: 'fa-solid fa-eye',
    borderColor: 'border-l-custom-green',
    title: 'Third-party Monitoring – Timbuktu',
    description:
      'Monitoring 54 projects by 11 Implementing Partners for activities like GFD, School Feeding, SFP, Blanket Feeding, etc.',
  },
]
</script>
