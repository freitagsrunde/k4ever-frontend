<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col class="display-1 font-weight-medium text-center">Administration</v-col>
            </v-row>
<!--            <v-row>-->
<!--                <AddProduct/>-->
<!--            </v-row>-->
            <AddUser/>
            <hr>
            <h2>User List</h2>
            <UserList/>
            <ProductManager/>
        </v-container>
    </v-content>
</template>

<script>
    import AddProduct from "./AddProduct";
    import AddUser from "./AddUser";
    import UserList from "./UserList";
    import ProductManager from "./ProductManager";

    export default {
        name: "Administration",
        components: {ProductManager, UserList, AddUser, AddProduct}
    }
</script>

<style scoped lang="scss">

</style>
