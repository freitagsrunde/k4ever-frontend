<template>
    <div class="product">
        <h3>{{ name }}</h3>
        <span>{{ price }}</span>
        <span v-if="deposit">{{ deposit }}</span>
        <button v-on:click="buyProduct">Kaufen</button>
    </div>
</template>

<script>
    import {productProps} from '../../models/product'

    export default {
        name: "Product",
        props: productProps,
        methods: {
            buyProduct() {
                this.$http.post(`/products/${this.id}/buy/`, {amount: 1})
                    .then(() => alert("Purchase successful"))
                    .then(() => {return this.$store.dispatch('updateUser')})
                    .catch(console.error)
            }
        }
    }
</script>

<style scoped lang="scss">
.product span {
    margin: 0 0 0 20px;

    &:after {
        margin: 0 20px 0 3px;
        content: "€";
    }

}
</style>