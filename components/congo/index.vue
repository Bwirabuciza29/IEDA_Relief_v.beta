<template>
  <div>
    <hero
      background="/flags/p2.jpg"
      subtitle="Mission"
      titleHighlight="ieda Relief"
      title="DR Congo"
      description="Helping communities to become Self-sufficient"
      buttonText="Donate now"
      buttonColor="bg-custom-green hover:bg-blue-700"
    />
    <alls
      title="DR Congo"
      subtitle="Burkina Faso means 'Land of Honest Men'"
      description="Since the Mali crisis in 2012, WFP signed a tripartite accord with UNHCR and IEDA Relief to ensure monthly food distribution to over 33,000 Mali refugees living in and outside camps. The food rations include rice, CSB, oil, salt, and cereals."
      email="burkinafasooffice@iedarelief.org"
      phone="+22625374622"
      address="05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi,
secteur 53, Section PLot 17, Parcelle No 6 Ouaga2000 Ouagadougou"
      rightImage="/flags/congo.jpg"
      vectorImage="/img/Vectoria.png"
      bgColor="bg-custom-green"
    />
    <div class="mt-16 bg-white p-4 border-t border-b border-custom-green">
      <log />
    </div>
    <volunteer
      title="Join our Mission"
      imageSrc="/flags/bru.webp"
      imageAlt="Volunteer helping"
      badge="IEDA Relief"
      cardTitle="Helping communities to become Self-sufficient..."
      cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
      buttonText="Donate now"
      accentColor="custom-green"
      cardBgColor="custom-blue"
    />
    <div></div>
    <Act :pays="'DRC'" />
  </div>
</template>
<script setup></script>
