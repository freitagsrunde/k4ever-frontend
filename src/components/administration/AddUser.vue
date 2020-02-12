<template>
    <v-dialog v-model="overlay" max-width="500">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on">Add User</v-btn>
        </template>
        <v-card>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer/>
                <v-btn @click="closeOverlay" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-form @submit.prevent="addUser" id="au-form" class="pl-4 pr-4 pt-4">
                <v-text-field label="Username" name="username" type="text" prepend-icon="person"
                              v-model="username" :disabled="updateMode"/>
                <v-text-field label="Displayed Name" name="displayname" type="text" prepend-icon="person"
                              v-model="display_name" :disabled="updateMode"/>
                <v-text-field id="password" label="Password" name="password" prepend-icon="lock"
                              type="password" v-model="password" v-show="!updateMode"/>
                <v-text-field id="balance" label="Balance" name="balance" prepend-icon="euro"
                              type="balance" v-model="balance" v-show="updateMode"/>
                <v-slider v-model="role" :tick-labels="roleLabels" :max="4" step="1" ticks="always" tick-size="4"
                          v-show="updateMode" @change="updateRole"/>
            </v-form>
            <v-card-actions class="pr-4 pb-4">
                <v-spacer/>
                <v-btn color="primary" type="submit" form="au-form">{{title}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "AddUser",
        data() {
            return {
                username: '',
                display_name: '',
                password: '',
                balance: 0,
                role: 0,
                overlay: false,
                title: 'Add User',
                updateMode: false,
                roleLabels: ['Lowest', 'Lower', 'Middle', 'Higher', 'Highest']
            };
        },
        methods: {
            initWithUser(initName) {
                if (initName) {
                    this.$http.get(`/users/${initName}/`)
                        .then(res => {
                            this.username = res.data.name;
                            this.display_name = res.data.display_name;
                            this.balance = res.data.balance;
                            this.role = res.data.role || 3;

                            this.title = "Edit User";
                            this.updateMode = true;
                        })
                        .catch(() => this.$toasted.error(`Unable to load User with Id ${initName}`))
                }
            },
            processUser() {
                if (this.updateMode)
                    this.addUser()
                else
                    this.editUser()
            },
            addUser() {
                this.$http.post(
                    `/users/`, {
                        name: this.username,
                        display_name: this.display_name,
                        password: this.password,
                    })
                    .then(res => {
                        this.$toasted.show(`Successfully added User "${res.data.display_name}"`);
                    })
                    .catch(res => this.$toasted.error(`Error while creating new User: ${res}`))

            },
            editUser() {

            },
            updateRole() {
                this.$http.put(`/users/${this.username}/role/`, {role: parseInt(this.role)})
                    .then(res => this.$toasted.info(`Updating role of user ${res.data.name} successful.`))
                    .catch(err => this.$toasted.error(`Updating failed: ${err}`))
            },
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
            },
            closeOverlay() {
                this.overlay = false;
            }
        },
        watch: {
            overlay(oldVal, newVal) {
                if (newVal === false) {
                    this.username = '';
                    this.password = '';
                    this.display_name = '';

                    this.title = "Add User";
                    this.updateMode = false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #addUserForm {
        display: grid;
        grid-template-columns: 200px auto;
    }

    #addUserForm button {
        grid-column: 1 / span 2;
    }

    .addUser {
        margin: 20px;
    }
</style>
