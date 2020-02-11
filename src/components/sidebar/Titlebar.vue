<template>
    <v-app-bar app color="purple" dark>
        <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')"/>
        <v-toolbar-title>k4frontend</v-toolbar-title>
<!--        <v-spacer/>-->
<!--        <ProductSearch/>-->
        <v-spacer/>
        <v-menu left bottom offset-y>
            <template v-slot:activator="{ on }">
                <v-card v-on="on" color="indigo" max-width="250" class="shrink">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                {{user.display_name}}
                            </v-list-item-title>
                            <v-list-item-subtitle class="balance">
                                {{user.balance.toFixed(2)}}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile>
                            <v-icon>
                                keyboard_arrow_down
                            </v-icon>
                        </v-list-item-avatar>
                    </v-list-item>
                    <!--<span class="font-weight-medium">{{user.display_name}}</span> • <span>{{user.balance.toFixed(2)}}</span>-->
                </v-card>
            </template>

            <UserInfo v-on="$listeners"/>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import ProductSearch from "../productSearch/ProductSearch";
    import UserInfo from "./UserInfo";

    export default {
        name: "Titlebar",
        components: {UserInfo, ProductSearch},
        computed: {
            user: function() {
                return this.$store.state.user
            }
        },
        // data: () => ({
        //     user: null
        // }),
        // created() {
        //     this.user = this.$store.getters.getUser;
        // },
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
