<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col class="display-1 font-weight-medium text-center">Purchase History</v-col>
            </v-row>
            <v-row justify="center">
                <!--                        <Purchase v-for="purchase in purchases"-->
                <!--                                  v-bind:key="purchase.id"-->
                <!--                                  v-bind="purchase">-->
                <!--                        </Purchase>-->
                <v-data-table :headers="header" :items="purchases" :expanded.sync="expanded" item-key="id"
                              show-expand>
                    <template v-slot:expanded-item="{ headers }">
                        <td :colspan="headers.length">Peek-a-boo!</td>
                    </template>
                </v-data-table>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import Purchase from "./Purchase";

    export default {
        name: "History",
        components: {Purchase},
        data: () => {
            return {
                expanded: [],
                purchases: [],
                header: [
                    {
                        text: 'Id',
                        value: 'id',
                        sortable: true
                    }, {
                        text: 'Purchased at',
                        value: 'updated_at',
                        sortable: true
                    }, {
                        text: 'Total',
                        value: 'total',
                        sortable: true
                    }, {
                        text: 'Type',
                        value: 'type',
                        sortable: true
                    }, {
                        text: '',
                        value: 'data-table-expand'
                    }
                ]
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
