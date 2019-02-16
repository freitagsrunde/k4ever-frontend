<template>
    <div class="user-info">
        <div>{{ user.display_name }}</div>
        <div class="balance">{{ user.balance.toFixed(2) }}</div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        // props: {
        //     display_name: String,
        //     balance: Number,
        // },
        computed: {
            user: function() {
                return this.$store.state.user
            }
        }
    }
</script>

<style scoped lang="scss">
    .user-info .balance {
        &:after {
            margin-left: 3px;
            content: "€";
        }
    }
</style>