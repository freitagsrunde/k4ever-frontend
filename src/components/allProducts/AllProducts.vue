<template>
    <div class="all-products">
        <h2>All Products</h2>
        <ProductList/>
    </div>
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
    .productList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1000px;
    }

    h2 {
        grid-column: 1 / span 3;
    }

</style>
