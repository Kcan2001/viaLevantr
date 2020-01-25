import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Calendar from '@/components/Calendar'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: { 
            requiresAuth: true
          }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar,
        meta: { 
            requiresAuth: true
          }
    }
]
});

export default router