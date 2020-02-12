<template>
    <v-container>
        <v-row>
            <v-data-table :headers="header" :items="products" :search="search" :items-per-page="10" item-key="id">
                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>Products</v-toolbar-title>
                        <AddProduct ref="productForm" @push-product="pushProduct"/>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details/>
                    </v-toolbar>
                </template>

                <template v-slot:item.action="{ item }">
                    <v-icon small class="mr-2" @click="editProduct(item)">
                        edit
                    </v-icon>
                    <v-icon small @click="deleteProduct(item)" disabled>
                        delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-row>
    </v-container>
</template>

<script>
    import AddProduct from "./AddProduct";

    export default {
        name: "ProductManager",
        components: {AddProduct},
        data: () => {
            return {
                search: '',
                products: [],
                header: [
                    {
                        text: 'Id',
                        value: 'id',
                        sortable: true
                    }, {
                        text: 'Name',
                        value: 'name',
                        sortable: true
                    }, {
                        text: 'Price',
                        value: 'price',
                        sortable: true
                    }, {
                        text: 'Deposit',
                        value: 'deposit',
                        sortable: true
                    }, {
                        text: 'EAN',
                        value: 'barcode',
                        sortable: true
                    }, {
                        text: 'disabled',
                        value: 'disabled',
                        sortable: false
                    }, {
                        text: 'Times bought',
                        value: 'times_bought_total',
                        sortable: true
                    }, {
                        text: 'Description',
                        value: 'description',
                        sortable: false
                    }, {
                        text: 'Actions',
                        value: 'action',
                        sortable: false
                    },
                ]
            }
        },
        created() {
            this.$http.get(`/products/`)
                .then(res => this.products = res.data)
                .catch(console.error)
        },
        methods: {
            editProduct(item) {
                this.$refs.productForm.overlay = true;
                this.$refs.productForm.initWithProduct(item.id);
            },
            pushProduct(product) {
                this.products.push(product)
            },
        }
    }
</script>

<style scoped>

</style>
