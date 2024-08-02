import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/HomeView.vue"),
        },

        {
          path: "/skills",
          name: "Skills",
          component: () => import("../views/SkillsView.vue"),
        },

        {
          path: "/projects",
          name: "Projects",
          component: () => import("../views/ProjectsView.vue"),
        },

        {
          path: "/contact",
          name: "Contact",
          component: () => import("../views/ContactView.vue"),
        },
      ]   
    },
   
  ]
})

export default router
