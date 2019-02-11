<template>
    <div class="product">
        <h3>{{ name }}</h3>
        <span>{{ price }}</span>
        <span>{{ deposit }}</span>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props: {
            id: Number,
            ean: String,
            name: String,
            price: Number,
            deposit: Number
        },
    }
</script>

<style scoped lang="scss">

</style>