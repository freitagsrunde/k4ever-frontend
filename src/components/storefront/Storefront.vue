<template>
    <v-content>
        <v-container fluid>
            <!--            <v-row>-->
            <!--                <v-col class="mb-12 display-2 font-weight-medium">Storefront</v-col>-->
            <!--            </v-row>-->
            <v-row>
                <v-col md12 lg4>
                    <v-row align="center" justify="center">
                        <v-col class="display-1 font-weight-medium text-center">Favourite Items</v-col>
                    </v-row>
                    <v-row>
<!--                        <ProductList :limit="5" sort_by="favourites" order="desc" cols="1"></ProductList>-->
                    </v-row>
                </v-col>
                <v-col md12 lg4>
                    <v-row>
                        <v-col class="display-1 font-weight-medium text-center">Most bought Items</v-col>
                    </v-row>
                    <v-row>
                        <ProductList :limit="5" sort_by="times_bought" order="desc" cols="1"></ProductList>
                    </v-row>
                </v-col>
                <v-col md12 lg4>
                    <v-row>
                        <v-col class="display-1 font-weight-medium text-center">Last bought Items</v-col>
                    </v-row>
                    <v-row>
                        <ProductList :limit="5" sort_by="last_bought" order="desc" cols="1"></ProductList>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import ProductList from "../allProducts/ProductList";

    export default {
        components: {
            ProductList,
        }
    };
</script>


<style scoped lang="scss">

</style>
