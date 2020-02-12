<template>
    <v-card class="elevation-12" max-width="400">
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{user.display_name}}
                </v-list-item-title>
                <v-list-item-subtitle class="balance">
                    {{user.balance.toFixed(2)}}
                </v-list-item-subtitle>
                <v-card-actions>
                    <TransferFunds/>
                    <IncreaseFunds/>
                </v-card-actions>
                <v-divider/>
                <v-card-actions>
                    <v-btn text @click="logout">Log Out</v-btn>
                </v-card-actions>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
    import TransferFunds from "./TransferFunds";
    import IncreaseFunds from "./IncreaseBalance";

    export default {
        name: "UserInfo",
        components: {IncreaseFunds, TransferFunds},
        computed: {
            user: function () {
                return this.$store.state.user
            }
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            },
            showTransferFunds: function () {
                this.$refs.overlay.overlay = true;
            }
        },
    }
</script>

<style scoped lang="scss">
    .balance {
        &:after {
            margin-left: 3px;
            content: "€";
        }
    }
</style>
