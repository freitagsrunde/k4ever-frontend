<template>
    <div class="storepage">
        <!--<pre v-text="$attrs"/>-->
        <h1>Storefront</h1  >
        <!--<last-bought-items></last-bought-items>-->
        <most-bought-items></most-bought-items>
    </div>
</template>

<script>
    import LastBoughtItems from "./LastBoughtItems"
    import MostBoughtItems from "./MostBoughtItems";

    export default {
        components: {
            LastBoughtItems,
            MostBoughtItems
        }
    };
</script>


<style scoped lang="scss">

</style>