import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewContact from '@/components/NewContact'
import EditContact from '@/components/EditContact'
import ViewContact from '@/components/ViewContact'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new',
      name: 'new-contact',
      component: NewContact,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:contact_id',
      name: 'edit-contact',
      component: EditContact,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:contact_id',
      name: 'view-contact',
      component: ViewContact,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  // Check required Auth Guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged In
    if (!firebase.auth().currentUser) {
      //Go to login page
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to requested route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged In
    if (firebase.auth().currentUser) {
      //Go to login page
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to requested route
      next()
    }
  } else {
      // Proceed to requested route
      next()
  }
})

export default router
