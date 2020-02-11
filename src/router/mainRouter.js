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
                requiresAuth: true,
                requiresAdmin: false
            }
        }, {
            path: '/products',
            name: 'AllProducts',
            component: AllProducts,
            meta: {
                requiresAuth: true,
                requiresAdmin: false
            }
        }, {
            path: '/history',
            name: 'History',
            component: History,
            meta: {
                requiresAuth: true,
                requiresAdmin: false
            }
        }, {
            path: '/administration',
            name: 'Administration',
            component: Administration,
            meta: {
                requiresAuth: true,
                requiresAdmin: true
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
    } else if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (store.getters.isAdmin) {
            next();
            return;
        }
        next('/');
    } else {
        next();
    }
});

export default router;
