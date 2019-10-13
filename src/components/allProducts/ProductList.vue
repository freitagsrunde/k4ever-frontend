<template>
    <div class="productList">
        <Product v-for="product in products"
                 v-bind:key="product.id"
                 v-bind="product" showPurchaseBtn></Product>
    </div>
</template>

<script>
    import Product from '../general/Product'

    export default {
        name: "ProductList",
        props: ['limit', 'sort_by', 'order', 'offset'],
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
