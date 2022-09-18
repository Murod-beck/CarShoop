import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'card' },
    component: () => import('../views/HomeViews.vue'),
  },
  {
    path: '/computer',
    name: 'Computer',
    meta: { layout: 'card' },
    component: () => import('../views/Computer.vue'),
  },
  {
    path: '/deliver',
    name: 'Deliver',
    meta: { layout: 'card' },
    component: () => import('../views/Deliver.vue'),
  },
  {
    path: '/discount',
    name: 'Discount',
    meta: { layout: 'card' },
    component: () => import('../views/Discount.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    meta: { layout: 'card' },
    component: () => import('../views/Payment.vue'),
  },
  {
    path: '/technical',
    name: 'Technical',
    meta: { layout: 'card' },
    component: () => import('../views/Technical.vue'),
  },
  {
    path: '/accessories',
    name: 'Accessories',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/Accessories.vue'),
  },
  {
    path: '/autos',
    name: 'Autos',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/Autos.vue'),
  },
  {
    path: '/cases',
    name: 'Cases',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/Cases.vue'),
  },
  {
    path: '/flavors',
    name: 'Flavors',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/Flavors.vue'),
  },
  {
    path: '/news',
    name: 'News',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/News.vue'),
  },
  {
    path: '/whell',
    name: 'Whell',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/Whell.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Carts.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/user',
    name: 'User',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/User.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Admin.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
