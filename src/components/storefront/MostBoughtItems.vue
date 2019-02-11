<template>
    <div class="most-bought-items">
        <!--<pre v-text="$attrs"/>-->
        <h2>Most bought Items</h2>
        <Product v-for="product in products"
                 v-bind:key="product.ID"
                 v-bind="product"></Product>
    </div>
</template>

<script>
    import Product from "./Product"

    export default {
        name: "most-bought-items",
        components: {
            Product
        },
        data: () => {
            return {
                products: []
            }
        },
        mounted() {
            this.$http.get('http://localhost:8080/api/v1/products/')
                .then(res => this.products = res.data.Products)
                .catch(console.error)
        }
    };
</script>


<style scoped lang="scss">

</style>