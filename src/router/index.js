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
    component: () => import('../views/navmenu/Computer.vue'),
  },
  {
    path: '/deliver',
    name: 'Deliver',
    meta: { layout: 'card' },
    component: () => import('../views/navmenu/Deliver.vue'),
  },
  {
    path: '/discount',
    name: 'Discount',
    meta: { layout: 'card' },
    component: () => import('../views/navmenu/Discount.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    meta: { layout: 'card' },
    component: () => import('../views/navmenu/Payment.vue'),
  },
  {
    path: '/technical',
    name: 'Technical',
    meta: { layout: 'card' },
    component: () => import('../views/navmenu/Technical.vue'),
  },
  {
    path: '/accessories',
    name: 'Accessories',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/menu/Accessories.vue'),
  },
  {
    path: '/autos',
    name: 'Autos',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/menu/Autos.vue'),
  },
  {
    path: '/cases',
    name: 'Cases',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/menu/Cases.vue'),
  },
  {
    path: '/flavors',
    name: 'Flavors',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/menu/Flavors.vue'),
  },
  {
    path: '/news',
    name: 'News',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/menu/News.vue'),
  },
  {
    path: '/whell',
    name: 'Whell',
    meta: { layout: 'menu', auth: true },
    component: () => import('../views/menu/Whell.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Carts.vue'),
  },
  {
    path: '/asessment',
    name: 'Asessment',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Asessment.vue'),
  },
  {
    path: '/detail/:id',
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
