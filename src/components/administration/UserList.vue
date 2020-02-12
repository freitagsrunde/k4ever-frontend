<template>
    <v-content>
        <v-container>
            <v-row>
                <v-data-table :headers="header" :items="users" :items-per-page="10" item-key="id">
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Users</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <AddUser ref="userForm" @push-user="pushUser"/>
                        </v-toolbar>
                    </template>

                    <template v-slot:item.action="{ item }">
                        <v-icon small class="mr-2" @click="editUser(item)">
                            edit
                        </v-icon>
                        <v-icon small @click="deleteUser(item)" disabled>
                            delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import AddUser from "./AddUser";

    export default {
        name: "UserList",
        components: {AddUser},
        data: () => {
            return {
                users: [],
                header: [
                    {
                        text: 'Id',
                        value: 'id',
                        sortable: true
                    }, {
                        text: 'Displayed Name',
                        value: 'display_name',
                        sortable: true
                    }, {
                        text: 'Username',
                        value: 'name',
                        sortable: 'true'
                    }, {
                        text: 'Balance',
                        value: 'balance',
                        sortable: true
                    }, {
                        text: 'Role',
                        value: 'role',
                        sortable: true
                    }, {
                        text: 'Actions',
                        value: 'action',
                        sortable: false
                    },
                ]
            }
        },
        created() {
            this.$http.get(`/users/`)
                .then(res => this.users = res.data)
                .catch(console.error)
        },
        methods: {
            editUser(user) {
                this.$refs.userForm.overlay = true;
                this.$refs.userForm.initWithUser(user.name);
            },
            pushUser(user) {
                this.users.push(user)
            }
        }
    }
</script>

<style scoped>

</style>
