<template>
    <v-dialog v-model="overlay" max-width="500">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">Add Product</v-btn>
        </template>
        <v-card>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer/>
                <v-btn @click="closeOverlay" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-form @submit.prevent="addProduct" id="ap-form" class="pl-4 pr-4 pt-4">
                <v-text-field label="EAN" name="ean" type="text" v-model="ean"/>
                <v-text-field label="Product Name" name="productName" type="text" v-model="productName"/>
                <v-text-field label="Price" name="price" prepend-icon="euro" type="number" step="0.01"
                              v-model="price"/>
                <v-text-field label="Deposit" name="deposit" prepend-icon="euro" type="number" step="0.01"
                              v-model="deposit"/>
                <v-textarea label="Description" name="description" v-model="description"/>
                <v-file-input label="File Input"/>
            </v-form>
            <v-card-actions class="pr-4 pb-4">
                <v-spacer/>
                <v-btn color="primary" type="submit" form="ap-form">{{title}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "AddProduct",
        // props: {initId: Number},
        data: () => ({
            ean: '',
            productName: '',
            price: 0,
            deposit: 0,
            description: '',
            image: '',
            overlay: false,
            title: 'Add Product'
        }),
        mounted() {
            this.ean = '';
            this.productName = '';
            this.price = 0;
            this.deposit = 0;
            this.description = '';
        },
        methods: {
            initWithProduct(initId) {
                if (initId) {
                    this.title = "Edit Product";

                    this.$http.get(`/products/${initId}/`)
                        .then(res => {
                            this.ean = res.data.barcode;
                            this.productName = res.data.name;
                            this.price = res.data.price;
                            this.deposit = res.data.deposit;
                            this.description = res.data.description;
                        })
                        .catch(() => this.$toasted.error(`Unable to load Product with Id ${initId}`))
                }
            },
            addProduct() {
                this.$http.post(
                    `/products/`, {
                        barcode: this.ean,
                        name: this.productName,
                        price: parseFloat(this.price),
                        deposit: parseFloat(this.deposit),
                        description: this.description,
                        image: this.image,
                    })
                    .then(res => {
                        if (res.status === 201)
                            this.$toasted.show(`Successfully added Product "${res.data.name}"`);
                        else if (res.status === 200)
                            this.$toasted.error(`Product already exists`);
                        else
                            this.$toasted.error(`This should not have happened`);
                    })
                    .then(() => this.reset())
                    .catch(err => this.$toasted.error(`Error while creating new product`))

                this.$emit("refreshProducts")

            },
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
            },
            closeOverlay() {
                this.overlay = false;

                this.ean = '';
                this.productName = '';
                this.price = 0;
                this.deposit = 0;
                this.description = '';
            }
        },
        watch: {
            overlay() {
                this.ean = '';
                this.productName = '';
                this.price = 0;
                this.deposit = 0;
                this.description = '';

                this.title = "Add Product";
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

    .addProduct {
        margin: 20px;
    }
</style>
