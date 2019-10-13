<template>
    <div class="transferFunds">
        <form id="addUserForm" @submit.prevent="transferFunds">

            <input type="number" class="transferAmount" name="transferAmount" v-model="amount">
            <UserInput v-model="username" :value="0"/>
            <button type="submit">Send Funds</button>
        </form>
    </div>
</template>

<script>
    import UserInput from "../general/UserInput";

    export default {
        name: "TransferFunds",
        components: {UserInput},
        data: () => {
            return {
                username: "",
                amount: 0
            }
        },
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
