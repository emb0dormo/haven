import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YearbookView from '../views/YearbookView.vue'
import PopupStoresView from '../views/PopupStoresView.vue'
import MerchandiseView from '../views/MerchandiseView.vue'
import ProjectsView from '../views/ProjectsView.vue' // Add the ProjectsView import

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AboutUs',
      name: 'aboutus',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/Business',
      name: 'business',
      component: () => import('../views/BusinessView.vue')
    },
    {
      path: '/Partners',
      name: 'partners',
      component: () => import('../views/PartnersView.vue')
    },
    {
      path: '/News',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/ContactUs',
      name: 'contactus',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/Yearbook',
      name: 'yearbook',
      component: YearbookView
    },
    {
      path: '/PopupStores',
      name: 'popupstores',
      component: PopupStoresView
    },
    {
      path: '/Merchandise',
      name: 'merchandise',
      component: MerchandiseView
    },
    {
      path: '/Projects', // Add the route for ProjectsView
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/OEMODM',
      name: 'OEMODM',
      component: () => import('@/views/OEMODM.vue')
    }
    
  ]
})

export default router
