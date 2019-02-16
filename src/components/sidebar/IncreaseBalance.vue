<template>
    <div class="increase-funds">
        <form class="fundsForm" @submit.prevent="addBalance">
            <input type="number" v-model="incrAmount" placeholder="amount" step="0.01" required>
            <button type="submit">Add Balance</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "IncreaseFunds",
        data() {
            return {incrAmount: 0}
        },
        methods: {
            addBalance() {
                const user = this.$store.state.user;
                this.$http.put(
                    `/users/${user.name}/balance/`,
                    {Amount: parseFloat(this.incrAmount)}
                ).then(() => {
                    return this.$store.dispatch('updateUser')
                }).catch(console.error)

            }
        }
    }

</script>

<style scoped>

</style>