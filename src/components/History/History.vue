<template>
    <div class="history">
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
            this.$http.get(`/users/${user}/purchases/`)
                .then(res => this.products = res.data)
                .catch(console.error)
        }
    }
</script>

<style scoped lang="scss">

</style>