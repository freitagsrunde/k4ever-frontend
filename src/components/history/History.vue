<template>
    <div class="history">
        <h2>Purchase History</h2>
        <Purchase v-for="purchase in purchases"
                        v-bind:key="purchase.id"
                        v-bind="purchase">
        </Purchase>
    </div>
</template>

<script>
    import Purchase from "./Purchase";

    export default {
        name: "History",
        components: {Purchase},
        data: () => {
            return {
                purchases: []
            }
        },
        mounted() {
            const user = this.$store.state.user;
            this.$http.get(`/users/${user.name}/purchases/`)
                .then(res => this.purchases = res.data)
                .catch(console.error)
        }
    }
</script>

<style scoped lang="scss">
    .history {
        .purchase:nth-child(2n+1) {
            background: lightgray;
        }
    }
</style>