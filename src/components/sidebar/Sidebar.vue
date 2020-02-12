<template>
    <v-navigation-drawer
            v-model="drawer"
            app
    >
        <v-list dense>
            <v-list-item link to="/">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/products">
                <v-list-item-action>
                    <v-icon>shopping_basket</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>All Products</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/history">
                <v-list-item-action>
                    <v-icon>history</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Purchase History</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/administration">
                <v-list-item-action>
                    <v-icon>settings</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Administration</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Sidebar",
        components: {},
        data: () => ({
            drawer: true,
        }),
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
