import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Acceuil.vue";
import About from "../views/About.vue";
import Podcasts from "../views/Podcasts.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Podcasts",
    name: "Podcasts",
    component: Podcasts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
