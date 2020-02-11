<template>
    <v-app id="inspire">
        <Sidebar v-if="this.$store.getters.isLoggedIn" ref="drawer"/>
        <Titlebar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-if="this.$store.getters.isLoggedIn"/>
        <router-view/>
    </v-app>
</template>

<script>

    import Sidebar from "./components/sidebar/Sidebar";
    import Titlebar from "./components/sidebar/Titlebar";

    export default {
        name: 'app',
        components: {Titlebar, Sidebar},
        props: {
            source: String,
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn()
            }
        },
        created: function () {
            this.$http.interceptors.response.use(undefined, function (err) {
                return new Promise(function (resolve, reject) {
                    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                        this.$store.dispatch('logout');
                        this.$router.push('login');
                    }
                    throw err;
                });
            });

            const token = localStorage.getItem('token');

            if (token) {
                this.$store.commit('auth_success', token)
            }
        },
        mounted() {
            this.$store.dispatch('updateUser')
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

        display: grid;
        grid-template-columns: 350px auto;
    }
</style>
