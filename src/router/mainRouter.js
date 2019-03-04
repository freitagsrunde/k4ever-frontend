import Vue from "vue";
import Router from "vue-router";
import store from "../store"

import Login from '../components/Login'
import Storefront from '../components/storefront/Storefront'
import History from '../components/history/History'
import Administration from "../components/administration/Administration";
import AllProducts from "../components/allProducts/AllProducts";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/',
            name: 'Storefront',
            component: Storefront,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/products',
            name: 'AllProducts',
            component: AllProducts,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/history',
            name: 'History',
            component: History,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/administration',
            name: 'Administration',
            component: Administration,
            meta: {
                requiresAuth: true
            }
        }

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
});

export default router;