<template>
    <div class="purchase">
        <div>Total: {{ total }}</div>
        <Product v-for="product in items"
                 v-bind:key="product.id"
                 v-bind="product"></Product>
    </div>
</template>

<script>
    import Product from "../general/Product";

    export default {
        name: "Purchase",
        components: {Product},
        props: {
            id: Number,
            total: Number,
            items: Array
        },
        mounted() {
            // this.products = items
        }
    }
</script>

<style scoped>
    .purchase {
        display: grid;
        grid-template-columns: 200px auto;
        align-items: center;
        justify-items: left;
    }
</style>