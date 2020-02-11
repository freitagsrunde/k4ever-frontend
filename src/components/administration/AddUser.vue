<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col class="display-1 font-weight-medium text-center">Add user</v-col>
            </v-row>
            <v-row>
                <v-form @submit.prevent="addUser" id="au-form" class="pl-4 pr-4 pt-4">
                    <v-text-field label="Username" name="username" type="text" prepend-icon="person"
                                  v-model="username"/>
                    <v-text-field label="Displayed Name" name="displayname" type="text" prepend-icon="person"
                                  v-model="display_name"/>
                    <v-text-field id="password" label="Password" name="password" prepend-icon="lock"
                                  type="password" v-model="password"/>
                </v-form>
                <v-btn color="primary" type="submit" form="ap-form">Add User</v-btn>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "AddUser",
        data() {
            return {
                username: '',
                display_name: '',
                password: '',
            };
        },
        methods: {
            addUser() {
                this.$http.post(
                    `/users/`, {
                        name: this.username,
                        display_name: this.display_name,
                        password: this.password,
                    })
                    .then(res => this.$toasted.show(`Successfully added User "${res.data.display_name}"`))
                    .then(() => this.reset())
                    .catch(res => this.$toasted.error(`Error while creating new User: ${res}`))

            },
            reset() {
                Object.assign(this.$data, this.$options.data.call(this));
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
