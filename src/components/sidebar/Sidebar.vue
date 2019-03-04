<template>
    <div class="sidebar">
        <UserInfo/>
        <IncreaseFunds/>
        <button v-on:click="logout">Logout</button>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/products">All products</router-link>
            <router-link to="/history">Purchase history</router-link>
            <router-link to="/administration">Administration</router-link>
        </nav>
    </div>
</template>

<script>
    import UserInfo from "./UserInfo";
    import IncreaseFunds from "./IncreaseBalance";
    export default {
        name: "Sidebar",
        components: {IncreaseFunds, UserInfo},
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        },
    }
</script>

<style scoped lang="scss">
    nav {
        display: grid;
        grid-template-columns: auto;
    }
</style>