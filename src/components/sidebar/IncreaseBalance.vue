<template>
    <v-dialog v-model="overlay" dark=false max-width="500">
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Increase Balance</v-btn>
        </template>
        <v-card>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Increase Balance</v-toolbar-title>
                <v-spacer/>
                <v-btn @click="closeOverlay" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-form @submit.prevent="addBalance" id="tf-form" class="pl-4 pr-4 pt-4">
                <!--                <v-text-field label="To" name="login" prepend-icon="person" type="text" v-model="username"/>-->
                <v-radio-group v-model="transferType" label="Transfer Type:" row>
                    <v-radio label="Direct" value="direct"/>
                    <v-radio label="Wire Transfer" value="wire"/>
                </v-radio-group>
                <v-text-field label="Amount" name="amount" prepend-icon="euro" type="number" step="0.01"
                              v-model="amount"/>
            </v-form>
            <v-card-subtitle v-if="transferType === 'wire'">
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                        <tr>
                            <th>Owner</th>
                            <td>fopen</td>
                        </tr>
                        <tr>
                            <th>IBAN</th>
                            <td><span class="ibansec">DE86</span>
                                <span class="ibansec">8306</span>
                                <span class="ibansec">5408</span>
                                <span class="ibansec">0004</span>
                                <span class="ibansec">0104</span>
                                <span class="ibansec">18</span></td>
                        </tr>
                        <tr>
                            <th>BIC</th>
                            <td>GENODEF1SLR</td>
                        </tr>
                        <tr>
                            <th>Subject</th>
                            <td>k4ever <span>{{username}}</span></td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-subtitle>
            <v-card-actions class="pr-4 pb-4">
                <v-spacer/>
                <v-btn color="primary" type="submit" form="tf-form">Add to Balance</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "IncreaseFunds",
        data: () => ({
            transferType: "",
            incrAmount: 0,
            username: "",
            overlay: false,
        }),
        methods: {
            addBalance() {
                const user = this.$store.state.user;
                this.$http.put(
                    `/users/${user.name}/balance/`,
                    {Amount: parseFloat(this.incrAmount)}
                ).then(() => {
                    return this.$store.dispatch('updateUser')
                }).catch(console.error)

            },
            closeOverlay() {
                this.overlay = false
            }
        },
        created() {
            this.username = this.$store.getters.getUser.name;
        }
    }

</script>

<style scoped>
    .ibansec {
        margin-right: 0.4em;
    }
</style>
