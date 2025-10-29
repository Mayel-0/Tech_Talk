<script setup>
import { ref, onMounted} from 'vue'

const Animation = ref()

onMounted(() =>{

})
</script>
<template>
  <div class="Views PodcastPage">
    <h1>Podcaste page 🎥</h1>
    <div class="Video">
      <iframe src="https://www.youtube.com/embed/xzlb9hbp9iI?si=MVR1dnleZZPZ0ARD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>
<style>
iframe {
  background-color: black;
  width: 560px;
  height: 315px;
}
</style>
