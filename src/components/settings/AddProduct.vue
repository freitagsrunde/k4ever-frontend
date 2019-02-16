<template>
    <div id="addProduct">
        <form id="addProductForm" @submit.prevent="addProduct">
            <label for="name">Name: </label><input id="name" type="text" v-model="name" placeholder="name" required>
            <label for="price">Price: </label><input id="price" type="number" v-model="price" placeholder="price"
                                                     step="0.01" required>
            <label for="deposit">Deposit: </label><input id="deposit" type="number" v-model="deposit"
                                                         placeholder="deposit" step="0.01" required>
            <label for="ean">Barcode: </label><input id="ean" type="text" v-model="ean" placeholder="EAN">
            <label for="description">Description</label><textarea name="description" id="description" cols="50"
                                                                  rows="10"></textarea>
            <button type="submit">Add Product</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddProduct",
        data() {
            return {
                ean: '',
                name: '',
                price: 0,
                deposit: 0,
                description: '',
                image: '',
            };
        },
        methods: {
            addProduct() {
                this.$http.post(
                    `/products/`, {
                        barcode: this.ean,
                        name: this.name,
                        price: parseFloat(this.price),
                        deposit: parseFloat(this.deposit),
                        description: this.description,
                        image: this.image,
                    })
                    .then(res => {
                        alert(`Successfully added Product ${res.data.Product.name}`)
                    })
                    .catch(console.error)

            }
        }
    }
</script>

<style scoped>
    #addProductForm {
        display: grid;
        grid-template-columns: 200px auto;
    }

    #addProductForm button {
        grid-column: 1 / span 2;
    }
</style>