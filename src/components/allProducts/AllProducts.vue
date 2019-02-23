<template>
    <div class="all-products">
        <h2>All Products</h2>
        <Product v-for="product in products"
                 v-bind:key="product.id"
                 v-bind="product" showPurchaseBtn></Product>
    </div>
</template>

<script>
    import Product from '../general/Product'

    export default {
        name: "AllProducts",
        components: {
            Product
        },
        data: () => {
            return {
                products: []
            }
        },
        mounted() {
            this.$http.get('/products/')
                .then(res => this.products = res.data)
                .catch(console.error)
        }
    };

</script>

<style scoped lang="scss">
    .all-products {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1000px;
    }

    h2 {
        grid-column: 1 / span 3;
    }

</style>