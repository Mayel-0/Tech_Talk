<script setup>
import { ref, onMounted, Transition} from 'vue'

const ShowPage = ref(false)
const showCursor = ref(true);
const texteComplet = "Podcaste Page 🎥";
const displayedText = ref('');
let currentIndex = 0;

const typeWriter = () => {
  if (currentIndex < texteComplet.length) {
    displayedText.value += texteComplet.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeWriter, 200);
  } else {
    showCursor.value = false;
  }
};

onMounted(() =>{
  setTimeout(() => { ShowPage.value = true; }, 500);
  typeWriter();
})

</script>
<template>
  <Transition name="fade">
    <div v-if="ShowPage" class="Views PodcastPage">
      <h1 :class="{ 'with-cursor': showCursor }">{{ displayedText }}</h1>
      <div class="Video">
        <iframe src="https://www.youtube.com/embed/xzlb9hbp9iI?si=MVR1dnleZZPZ0ARD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </Transition>
</template>
<style>
iframe {
  background-color: black;
  width: 560px;
  height: 315px;
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

h1.with-cursor::after {
  content: '|';
  margin-left: 5px;
  animation: clignoter 0.7s infinite;
}

@keyframes clignoter {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
