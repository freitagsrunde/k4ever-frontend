<template>
    <div class="storepage">
        <ProductSearch/>
        <h1>Storefront</h1>
        <div class="most-bought-items">
            <h2>Most bought Items</h2>
            <ProductList :limit="5" :sort_by="times_bought" :order="desc"></ProductList>
        </div>
    </div>
</template>

<script>
    import ProductSearch from "../productSearch/ProductSearch";
    import ProductList from "../allProducts/ProductList";

    export default {
        components: {
            ProductList,
            ProductSearch,

        }
    };
</script>


<style scoped lang="scss">

</style>
