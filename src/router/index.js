import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../views/About.vue';
import RandomQuote from '../views/RandomQuote.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', redirect: '/random-quote' },
  { path: '/about', component: About },
  { path: '/random-quote', component: RandomQuote },
  { path: '/contact', component: Contact },
  // Catch-all route for non-existent pages
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;



