<template>
    <div class="login">
        <form class="login" @submit.prevent="login">
            <!--<pre v-text="$attrs"/>-->
            <input required v-model="email" type="text" placeholder="username">
            <input required v-model="password" type="password" placeholder="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters([
                'jwt',
                'jwtSubject',
                'jwtIssuer'
            ])
        },
        methods: {
            login: function () {
                let email = this.email
                let password = this.password
                this.$store.dispatch('login', { email, password })
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        },
        mounted() {
            this.$store.dispatch('fetchJWT', {
                username: "admin",
                password: "admin"
            })
        }
    };
</script>

<style scoped lang="scss">

</style>