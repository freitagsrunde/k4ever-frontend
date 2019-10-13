<template>
    <div class="sidebar">
        <UserInfo/>
        <IncreaseFunds/>
        <button v-on:click="logout">Logout</button>
        <hr>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/products">All products</router-link>
            <router-link to="/history">Purchase history</router-link>
            <router-link to="/administration">Administration</router-link>
        </nav>
        <hr>
        <TransferFunds/>
    </div>
</template>

<script>
    import UserInfo from "./UserInfo";
    import IncreaseFunds from "./IncreaseBalance";
    import TransferFunds from "../unspecified/TransferFunds";

    export default {
        name: "Sidebar",
        components: {TransferFunds, IncreaseFunds, UserInfo},
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
