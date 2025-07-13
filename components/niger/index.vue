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
   <div>
   </div>
   <Act :pays="'Niger'" />
  </div>
</template>
<script setup>
</script>
