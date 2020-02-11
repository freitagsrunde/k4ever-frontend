<template>
    <v-card class="mx-auto" max-width="344">
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-3">Category</div>
                <v-list-item-title class="headline mb-1">
                    {{ name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    <span v-if="price" class="price">{{ price.toFixed(2) }}</span>
                    <span v-if="deposit" class="price">{{ deposit.toFixed(2) }}</span>
                </v-list-item-subtitle>
                <v-card-actions v-if="showPurchaseBtn">
                    <v-btn text @click="buyProduct">Purchase</v-btn>
                    <v-btn text disabled>With Deposit</v-btn>
                </v-card-actions>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        name: "Product",
        props: {
            id: Number,
            barcode: String,
            name: String,
            price: Number,
            deposit: Number,
            createdAt: String,
            updatedAt: String,
            deletedAt: String,
            description: String,
            image: String,
            showPurchaseBtn: Boolean
        },
        methods: {
            buyProduct() {
                this.$http.post(`/products/${this.id}/buy/`, {amount: 1})
                    .then(res => this.$toasted.info(`Purchase of product ${res.data.items[0].name} successful.`)) //TODO name the purchased product
                    .then(() => this.$store.dispatch('updateUser'))
                    .catch(err => this.$toasted.error(`Purchase failed: ${err}`))
            }
        }
    }
</script>

<style scoped lang="scss">
    span.price {
        margin: 0 0 0 20px;

        &:after {
            margin: 0 20px 0 3px;
            content: "€";
        }

    }

</style>
