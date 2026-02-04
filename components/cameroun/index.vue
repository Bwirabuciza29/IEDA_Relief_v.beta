<template>
  <div>
    <hero
      background="/img/donat.jpg"
      subtitle="Mission"
      titleHighlight="ieda Relief"
      title="Cameroun"
      description="Helping communities to become Self-sufficient"
      buttonText="Donate now"
      buttonColor="bg-custom-green hover:bg-blue-700"
    />
    <alls
      title="Cameroon"
      subtitle="Cameroon"
      description="Depuis 2008, nous avons travaillé dans 12 pays avec un investissement de $80M sur 260 projets en assistant les personnes durant leur transition vers le développement à long terme. Notre effectif de plus de 1.100 employés met l’accent sur les groupes marginalisés à savoir les personnes déplacées internes et les réfugiés. Nous avons facilité et fourni les composantes clés d’assistance et couplé des activités en développement des capacités communautaires pour créer une voix locale, une appropriation des compétences techniques, afin d’accroitre leur viabilité à long terme. "
      email="camerounoffice@iedarelief.org"
      phone="+237233456789"
      address="05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi,
secteur 53, Section PLot 17, Parcelle No 6 Ouaga2000 Ouagadougou"
      rightImage="/flags/cam.jpg"
      vectorImage="/img/Vectoria.png"
      bgColor="bg-custom-green"
    />
    <div class="mt-16 bg-white p-4 border-t border-b border-custom-green">
      <log />
    </div>
    <volunteer
      title="Join our Mission"
      imageSrc="/flags/cam2.avif"
      imageAlt="Volunteer helping"
      badge="IEDA Relief"
      cardTitle="Helping communities to become Self-sufficient..."
      cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
      buttonText="Donate now"
      accentColor="custom-green"
      cardBgColor="custom-blue"
    />
    <div></div>
    <Act :pays="'Cameroun'" />
  </div>
</template>
<script setup></script>
