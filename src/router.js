import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio'
import Articulo from './views/Articulo'
import Contacto from './views/Contacto'
import SobreMi from './views/SobreMi'
import NotFound from './views/NotFound'


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Inicio,
        name: "inicio"
      },
      {
          path: "/post/:npost",
          component: Articulo
      },
      {
          path: "/contacto",
          component: Contacto
      },
      {
          path: "/sobremi",
          component: SobreMi,
          name: "sobremi"
      },
      {
          path: "*",
          component: NotFound
      }
    ]
})