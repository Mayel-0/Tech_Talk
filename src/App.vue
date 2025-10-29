<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>
<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>
<style>
.Views {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
</style>
