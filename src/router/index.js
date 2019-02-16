import Vue from "vue";
import Router from "vue-router";
import store from "../store"

import Login from '../components/Login'
import Storefront from '../components/storefront/Storefront'
import Settings from "../components/settings/Settings";

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
            path: '/settings',
            name: 'Settings',
            component: Settings,
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