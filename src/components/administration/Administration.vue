<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col class="display-1 font-weight-medium text-center">Administration</v-col>
            </v-row>
            <!--            <v-row>-->
            <!--                <AddProduct/>-->
            <!--            </v-row>-->
            <!--            <AddUser/>-->
            <!--            <hr>-->
            <!--            <h2>User List</h2>-->
            <v-tabs v-model="tab">
                <v-tab>Products</v-tab>
                <v-tab>Users</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <ProductManager/>
                </v-tab-item>
                <v-tab-item>
                    <UserList/>
                </v-tab-item>
            </v-tabs-items>
        </v-container>
    </v-content>
</template>

<script>
    import UserList from "./UserList";
    import ProductManager from "./ProductManager";

    export default {
        name: "Administration",
        components: {ProductManager, UserList},
        data: () => ({
            tab: null,
        })
    }
</script>

<style scoped lang="scss">

</style>
