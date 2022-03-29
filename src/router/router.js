import { createRouter,createWebHashHistory } from 'vue-router'

/* LazyLoad c'est la configuration des routes pour que le temps de chargement de la page soit plus court */

const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName : "ListPage" */'../modules/pokemon/pages/ListPage')
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName : "About" */'../modules/pokemon/pages/AboutPage')
    },
    { 
        path: '/id', 
        component: () => import(/* webpackChunkName : "PokemonPage" */'../modules/pokemon/pages/PokemonPage')
    },
    { 
        path: '/pathMatch(.*)*', 
        component: () => import(/* webpackChunkName : "PageNotFound" */'../modules/shared/PageNotFound')
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router