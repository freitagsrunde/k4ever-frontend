<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col class="display-1 font-weight-medium text-center">Administration</v-col>
            </v-row>
            <v-row justify="center">
                <v-tabs v-model="tab" centered>
                    <v-tab>Products</v-tab>
                    <v-tab>Users</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <ProductManager/>
                    </v-tab-item>
                    <v-tab-item>
                        <UserManager/>
                    </v-tab-item>
                </v-tabs-items>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import UserManager from "./UserManager";
    import ProductManager from "./ProductManager";

    export default {
        name: "Administration",
        components: {ProductManager, UserManager},
        data: () => ({
            tab: null,
        })
    }
</script>

<style scoped lang="scss">

</style>
