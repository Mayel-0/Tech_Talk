<script setup>
import { ref, onMounted, Transition} from 'vue'

const ShowPage = ref(false)

onMounted(() =>{
  setTimeout(() => { ShowPage.value = true; }, 500);
})

</script>
<template>
  <Transition name="fade">
    <div v-if="ShowPage" class="Views AcceuilPage">
      <h1>Bienvenue</h1>
    </div>
  </Transition>
</template>
<style>
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
</style>
