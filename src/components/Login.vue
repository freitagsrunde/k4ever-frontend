<template>
    <div id="login">
        <form class="loginForm" @submit.prevent="login">
            <!--<pre v-text="$attrs"/>-->
            <input required v-model="username" type="text" placeholder="username">
            <input required v-model="password" type="password" placeholder="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                let name = this.username;
                let password = this.password;
                this.$store.dispatch('login', { name, password })
                    .then(() => {return this.$store.dispatch('updateUser')})
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err));
            }
        },
    };
</script>

<style scoped lang="scss">

</style>