<template>
    <div class="addUser">
        <h2>Add User</h2>
        <form id="addUserForm" @submit.prevent="addUser">
            <label for="username">Name: </label><input id="username" type="text" v-model="username"
                                                       placeholder="Username" required>
            <label for="displayname">Display Name: </label><input id="displayname" type="text" v-model="display_name"
                                                          placeholder="Displayed Name">
            <label for="password">Password: </label><input id="password" type="password" v-model="password"
                                                       placeholder="Password" required>
            <button type="submit">Add User</button>
        </form>
    </div>
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
                    .catch(res => this.$toasted.error(`Error while creating new User`))

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