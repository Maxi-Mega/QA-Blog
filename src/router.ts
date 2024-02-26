import {createRouter, createWebHistory} from "vue-router";
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
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: Article,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
