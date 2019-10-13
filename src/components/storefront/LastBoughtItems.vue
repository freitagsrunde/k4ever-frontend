<template>
    <div class="last-bought-items">

        <h2>Last bought Items</h2>
        <Product v-for="product in products"
                 v-bind:key="product.ID"
                 v-bind="product">
        </Product>
    </div>
</template>

<script>
    import Product from "../general/Product";

    export default {
        name: "last-bought-items",
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
    }
</script>

<style scoped lang="scss">

</style>