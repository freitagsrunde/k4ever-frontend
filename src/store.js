import Vue from 'vue';
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
    },
    getters: {
        isLoggedIn: (state) => !!state.token,
        authStatus: (state) => state.status,
        getUser: (state) => state.user,
        isAdmin: (state) => state.user.role >= 3,
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, token) {
            state.status = 'success';
            state.token = token;
            const base64 = token.split('.')[1]
                .replace('-', '+').replace('_', '/');
            const user = JSON.parse(window.atob(base64));
            state.user = {name: user.name, display_name: user.name, balance: 0, role: 0};
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
        },
        update_user(state, user) {
            state.user = user;
        },
    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({
                    url: '/login/',
                    data: user,
                    method: 'POST'
                })
                    .then(resp => {
                        const token = resp.data.token;
                        localStorage.setItem('token', `Bearer ${token}`);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                        commit('auth_success', token);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error');
                        localStorage.removeItem('token');
                        reject(err);
                    })
            })
        },
        logout({commit}) {
            return new Promise((resolve, reject) => {
                commit('logout');
                localStorage.removeItem('token');
                delete axios.defaults.headers.common['Authorization'];
                resolve()
            })
        },
        updateUser({commit, state}) {
            return new Promise((resolve, reject) => {
                const user = state.user;

                if (user.name) {
                    axios.get(`/users/${user.name}/`)
                        .then(resp => {
                            const user = resp.data;
                            commit('update_user', user);
                            resolve(resp);
                        })
                        .catch(reject)
                }
            })
        },
    }
});
