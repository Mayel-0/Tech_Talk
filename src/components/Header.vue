<template>
  <div class="TopBar">
    <h1>Bienvenue sur TechTalk 🎉</h1>
    <div class="LinksButtons">
      <router-link to="/">
        <button>Accueil</button>
      </router-link>
      <router-link to="/About">
        <button>About</button>
      </router-link>
      <router-link to="/Podcasts">
        <button>Podcasts</button>
      </router-link>
    </div>
  </div>
</template>
<style>
.TopBar {
  background-color: rgb(130, 129, 129);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
}
.LinksButtons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
}
h1 {
  margin: 0px;
  margin-bottom: 20px;
}
</style>
