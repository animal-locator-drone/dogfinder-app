import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
        path: '/select_mission',
        alias: '/',
        name: 'select_mission',
        component: () => import('../views/SelectMissionView.vue')
    },
    {
        path: '/mission',
        name: 'mission',
        component: () => import('../views/MissionView.vue')
    }
  ]
})

export default router
