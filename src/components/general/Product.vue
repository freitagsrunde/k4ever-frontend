<template>
    <div class="product">
        <h3>{{ name }}</h3>
        <span v-if="price">{{ price.toFixed(2) }}</span>
        <span v-if="deposit">{{ deposit.toFixed(2) }}</span>
        <button v-on:click="buyProduct" v-if="showPurchaseBtn">Kaufen</button>
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
                    .then(() => this.$toasted.info("purchase successful"))
                    .then(() => {
                        return this.$store.dispatch('updateUser')
                    })
                    .catch(() => this.$toasted)
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