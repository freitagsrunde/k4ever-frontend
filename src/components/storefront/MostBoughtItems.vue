<template>
    <div class="most-bought-items">
        <!--<pre v-text="$attrs"/>-->
        <h2>Most bought Items</h2>
        <Product v-for="product in products"
                 v-bind:key="product.id"
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
            this.products = [
                {id: 1, ean: "123", name: "Fritz Limo", price: 0.8, deposit: 0.2},
                {id: 2, ean: "456", name: "Fritz Cola", price: 0.8, deposit: 0.2},
                {id: 3, ean: "789", name: "Fritz Rhabarber", price: 0.9, deposit: 0.2},
            ]
        }
    };
</script>


<style scoped lang="scss">

</style>