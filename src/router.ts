import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Article from "./views/Article.vue";
import Login from "./views/Login.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: Article,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
