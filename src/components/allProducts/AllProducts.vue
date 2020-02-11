<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col class="display-2 font-weight-medium">All Products</v-col>
            </v-row>
            <v-row>
                <ProductList cols="3"/>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>

    import ProductList from "./ProductList";

    export default {
        name: "AllProducts",
        components: {
            ProductList
        }
    };

</script>

<style scoped lang="scss">

</style>
