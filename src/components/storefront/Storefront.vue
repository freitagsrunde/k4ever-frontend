<template>
    <div class="storepage">
        <ProductSearch/>
        <h1>Storefront</h1>
        <!--<last-bought-items></last-bought-items>-->
        <most-bought-items></most-bought-items>
    </div>
</template>

<script>
    import LastBoughtItems from "./LastBoughtItems"
    import MostBoughtItems from "./MostBoughtItems";
    import ProductSearch from "../productSearch/ProductSearch";

    export default {
        components: {
            ProductSearch,
            LastBoughtItems,
            MostBoughtItems
        }
    };
</script>


<style scoped lang="scss">

</style>