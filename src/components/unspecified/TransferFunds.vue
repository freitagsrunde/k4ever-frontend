<template>
    <v-dialog v-model="overlay" max-width="500">
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Transfer Funds</v-btn>
        </template>
        <v-card>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Transfer Funds</v-toolbar-title>
                <v-spacer/>
                <v-btn @click="closeOverlay" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-form @submit.prevent="transferFunds" id="tf-form" class="pl-4 pr-4 pt-4">
                <UserInput v-model="username"/>

                <v-text-field label="Amount" name="amount" prepend-icon="euro" type="number" step="0.01"
                              v-model="amount"/>
            </v-form>
            <v-card-actions class="pr-4 pb-4">
                <v-spacer/>
                <v-btn color="primary" type="submit" form="tf-form">Transfer</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import UserInput from "../general/UserInput";

    export default {
        name: "TransferFunds",
        components: {UserInput},
        data: () => ({
            username: "",
            amount: 0,
            overlay: false,
        }),
        // computed: {
        //     overlay: function () {
        //         return this.$store.state.overlay === "transfer-funds"
        //     }
        // },
        methods: {
            transferFunds() {
                this.$http.put(`/users/${this.username}/transfer/`, {
                    amount: parseFloat(this.amount)
                })
                    .then(res => this.$toasted.show(`Successfully transferred ${res.data.total.toFixed(2)} € to "${res.data.recipient}"`))
                    .then(() => this.$store.dispatch('updateUser'))
                    .then(() => this.reset())
                    .catch(res => this.$toasted.error(`Error while transferring funds: ${res}`))
            },
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
            },
            closeOverlay() {
                this.overlay = false
            }
        }
    }
</script>

<style scoped>
    .transferFunds {
        display: grid;
        grid-template-columns: 1fr;
    }
</style>
