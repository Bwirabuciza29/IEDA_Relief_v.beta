<template>
  <div>
  <hero
    background="/flags/br.jpg"
    subtitle="Mission"
    titleHighlight="ieda Relief"
    title="USA"
    description="Helping communities to become Self-sufficient"
    buttonText="Donate now"
    buttonColor="bg-custom-green hover:bg-blue-700"
  />
  <alls
    title="USA"
    subtitle="Creating a stable environment using sustainable solutions"
    description="IEDARelief's headquarters in Houston is an operational and strategic center: it manages legal and linguistic assistance for vulnerable populations in the United States, while piloting international development projects"
    email="philma@iedarelief.org"
    phone="+1 713-774-2522/ +1 713-774-2529"
    address="10103 Foundren Rd, Suite 435 Houston, Texas 77096"
    rightImage="/flags/usa.jpg"
    vectorImage="/img/Vectoria.png"
    bgColor="bg-custom-green"
  />
  <div class="mt-16 bg-white p-4 border-t border-b border-custom-green">
      <log />
    </div>
<volunteer
    title="Join our Mission"
    imageSrc="/flags/br.jpg"
    imageAlt="Volunteer helping"
    badge="IEDA Relief"
    cardTitle="Helping communities to become Self-sufficient..."
    cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
    buttonText="Donate now"
    accentColor="custom-green"
    cardBgColor="custom-blue"
  />
   <div>
   </div>
   <Act :pays="'USA'" />
  </div>
</template>
<script setup>
</script>
