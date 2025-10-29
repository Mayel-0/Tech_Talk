<script setup>
import { ref, onMounted, nextTick } from 'vue'

const ShowPage = ref(false)
const paragraphs = ref([]);

onMounted(async () => {
  // Afficher la page après 500ms
  setTimeout(async () => {
    ShowPage.value = true;

    // Attendre que Vue mette à jour le DOM
    await nextTick();

    // Maintenant créer l'observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observer tous les paragraphes
    const allParagraphs = document.querySelectorAll('.fade-in-scroll');
    allParagraphs.forEach(p => observer.observe(p));
  }, 500);
})
</script>

<template>
  <Transition name="fade">
    <div v-if="ShowPage" class="Views AboutPage">
      <h1>A propos de nous 📝</h1>
      <div class="ParagrapheText">
        <div class="caseText">
          <h3>Peux-tu te présenter en quelques mots ?</h3>
          <p>Je suis Maëlys Nunes De Sousa, étudiante en M2 Social Media, Influence et E-reputation. Intriguée par les enjeux du digital et de la communication, je souhaite créer du contenu qui décrypte les évolutions technologiques pour la prochaine génération de professionnels, nous.</p>
        </div>
        <div class="caseText">
          <h3>Pourquoi souhaites-tu lancer un podcast ?</h3>
          <p>Pour créer un pont entre le monde académique et le monde professionnel. Je constate que les étudiants ont besoin de comprendre toutes ces évolutions rapides du secteur de la tech (IA, cybersécurité, transformation digitale) pour mieux s'y préparer et rester agile dans notre domaine. Le podcast est le format idéal pour rendre ces sujets accessibles et inspirants.</p>
        </div>
      </div>
      <div class="Objectifs">
        <h2>Quels sont tes objectifs avec ce podcast ?</h2>
        <p class="fade-in-scroll">- Informer les étudiants et jeunes professionnels sur les tendances digitales</p>
        <p class="fade-in-scroll">- Inspirer par des témoignages d'experts et professionnels du terrain</p>
        <p class="fade-in-scroll">- Former en vulgarisant des concepts techniques (cybersécurité, IA, data)</p>
        <p class="fade-in-scroll">- Connecter l'écosystème tech local avec la communauté YNOV</p>
        <p class="fade-in-scroll">- Développer mes compétences en production audiovisuelle et gestion de projet média</p>
      </div>
    </div>
  </Transition>
</template>

<style>
.fade-in-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-scroll:nth-child(2) { transition-delay: 0s; }
.fade-in-scroll:nth-child(3) { transition-delay: 0.15s; }
.fade-in-scroll:nth-child(4) { transition-delay: 0.3s; }
.fade-in-scroll:nth-child(5) { transition-delay: 0.45s; }
.fade-in-scroll:nth-child(6) { transition-delay: 0.6s; }

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-23px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.ParagrapheText {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
}

.ParagrapheText .caseText {
  width: 40%;
  margin-top: 60px;
  margin-bottom: 80px;
}
</style>
