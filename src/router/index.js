import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../components/Accueil'
import Resultats from "../components/Resultats.vue"
import Contact from "../components/Contact.vue"
import Photos from "../components/Photos.vue"
import Information from "../components/Information.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/resultats',
      name: 'Resultats',
      component: Resultats
    }
  ]
})
