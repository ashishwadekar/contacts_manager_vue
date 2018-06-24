import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewContact from '@/components/NewContact'
import EditContact from '@/components/EditContact'
import ViewContact from '@/components/ViewContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-contact',
      component: NewContact
    },
    {
      path: '/edit/:contact_id',
      name: 'edit-contact',
      component: EditContact
    },
    {
      path: '/:contact_id',
      name: 'view-contact',
      component: ViewContact
    }
  ]
})
