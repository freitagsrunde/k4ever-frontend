<template>
    <div class="product-search">
        <input type="text" v-model="searchString" id="searchInput">
        <div id="search-results" v-show="searchString !== ''">
            <Product v-for="product in searchedProducts"
                     v-bind:key="product.id"
                     v-bind="product" showPurchaseBtn/>
        </div>
    </div>
</template>

<script> //TODO integrate ProductList into this component
    import Product from "../general/Product";

    export default {
        name: "ProductSearch",
        components: {
            Product
        },
        data() {
            return {
                products: [],
                searchString: ""
            }
        },
        mounted() {
            this.$http.get('/products/')
                .then(res => this.products = res.data)
                .catch(console.error)
        },
        computed: {
            searchedProducts() {
                if (this.searchString === "")
                    return [];
                return this.products.filter(p => p.name.toLowerCase().includes(this.searchString.toLowerCase())
                    || p.barcode.toLowerCase().includes(this.searchString.toLowerCase()))
            }
        }
    }
</script>

<style scoped lang="scss">
    .product-search {
        input {
           font-size: x-large;
        }
    }

    #search-results {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1000px;
        border: 1px solid black;
        position: absolute;
        background: white;
        margin: 0 auto;
        left: 0;
        right: 0;
    }
</style>
