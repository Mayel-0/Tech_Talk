<script setup>
</script>
<template>
  <div class="FooterBar">
    <div class="Links">
      <div class="link">
        <a >Instagrame</a>
        <img src="../assets/Logo/Instagrame.svg"/>
      </div>
      <div class="link">
        <a >Youtube</a>
        <img src="../assets/Logo/Youtube.svg"/>
      </div>
    </div>
  </div>
</template>
<style>
img {
  height: 24px;
  width: 24px;
}
.FooterBar {
  background-color: rgb(130, 129, 129);
  height: 100%;
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  margin-top: 30px;
  .Links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
