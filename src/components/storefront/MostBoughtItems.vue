<template>
    <div class="most-bought-items">
        <!--<pre v-text="$attrs"/>-->
        <h2>Most bought Items</h2>
        <Product v-for="product in products"
                 v-bind:key="product.id"
                 v-bind="product" showPurchaseBtn></Product>
    </div>
</template>

<script>
    import Product from "../general/Product"

    export default {
        name: "most-bought-items",
        props: ['limit'],
        components: {
            Product
        },
        data: () => {
            return {
                products: []
            }
        },
        mounted() {
            this.$http.get(`/products/?sort_by=times_bought&order=desc`)
                .then(res => this.products = res.data)
                .catch(console.error)
        }
    };
</script>


<style scoped lang="scss">

</style>
