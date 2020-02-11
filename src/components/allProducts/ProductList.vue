<template>
    <v-container class="my-5 grid-list-xl" fluid>
        <v-layout row wrap>
            <v-flex :class="cols === '1' ? 'md12' : 'xs12 sm6 md4'" v-for="product in products"
                    v-bind:key="product.id">
                <Product v-bind="product" showPurchaseBtn/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Product from '../general/Product'

    export default {
        name: "ProductList",
        props: ['limit', 'sort_by', 'order', 'offset', 'cols'],
        components: {
            Product
        },
        data: () => {
            return {
                products: []
            }
        },
        mounted() {
            this.$http.get(`/products/?sort_by=${this.sort_by || "name"}&order=${this.order || "asc"}&limit=${this.limit || 99999}&offset=${this.offset || 0}`)
                .then(res => this.products = res.data)
                .catch(console.error)
        }
    };
</script>

<style scoped>

</style>
