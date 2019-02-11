<template>
    <div class="product">
        <h3>{{ name }}</h3>
        <span>{{ Price }}</span>
        <span>{{ Deposit }}</span>
        <button v-on:click="buyProduct">Kaufen</button>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props: {
            ID: Number,
            Barcode: String,
            name: String,
            Price: Number,
            Deposit: Number,
            CreatedAt: String,
            UpdatedAt: String,
            DeletedAt: String,
            Description: String,
            Image: String,
        },
        methods: {
            buyProduct() {
                this.$http.post(`http://localhost:8080/api/v1/products/${this.ID}/buy/`, {amount: 1})
                    .then(() => alert("Purchase successful"))
                    .catch(console.error)
            }
        }
    }
</script>

<style scoped lang="scss">
.product span {
    margin: 0 0 0 10px;

    &:after {
        margin-left: 3px;
        content: "€";
    }

}
</style>