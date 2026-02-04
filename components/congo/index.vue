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
      subtitle="Democratic Republic of the Congo"
      description="Depuis 2008, nous avons travaillé dans 12 pays avec un investissement de $80M sur 260 projets en assistant les personnes durant leur transition vers le développement à long terme. Notre effectif de plus de 1.100 employés met l’accent sur les groupes marginalisés à savoir les personnes déplacées internes et les réfugiés. Nous avons facilité et fourni les composantes clés d’assistance et couplé des activités en développement des capacités communautaires pour créer une voix locale, une appropriation des compétences techniques, afin d’accroitre leur viabilité à long terme. "
      email="drcmission@iedarelief.org"
      phone="+243827648797"
      address="Quartier Basoko/GB, Avenue O.U.A, N°17, Commune de Ngaliema - Kinshasa, RDC"
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
