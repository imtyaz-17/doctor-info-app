import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import HomePage from 'pages/HomePage.vue';
import AboutPage from 'pages/AboutPage.vue';
import ContactPage from 'pages/ContactPage.vue';
import SignupPage from 'pages/SignupPage.vue';
import LoginPage from 'pages/LoginPage.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'contact', component: ContactPage },
      { path: 'signup', component: SignupPage },
      { path: 'login', component: LoginPage }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
