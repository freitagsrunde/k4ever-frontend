<template>
    <div class="purchase">
        <Product v-for="product in products"
                 v-bind:key="product.id"
                 v-bind="product"></Product>
    </div>
</template>

<script>
    export default {
        name: "Purchase",
        props: [],
        mounted() {

        }
    }
</script>

<style scoped>

</style>