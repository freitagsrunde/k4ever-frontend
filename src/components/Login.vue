<template>
    <!--    <div id="login">-->
    <!--        <form class="loginForm" @submit.prevent="login">-->
    <!--            &lt;!&ndash;<pre v-text="$attrs"/>&ndash;&gt;-->
    <!--            <input required v-model="username" type="text" placeholder="username">-->
    <!--            <input required v-model="password" type="password" placeholder="password">-->
    <!--            <button type="submit">Login</button>-->
    <!--        </form>-->
    <!--    </div>-->
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12"
                           sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>k4ever-Login</v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="login" id="login-form">
                                    <v-text-field label="Login" name="login" prepend-icon="person" type="text"
                                                  v-model="username"/>
                                    <v-text-field id="password" label="Password" name="password" prepend-icon="lock"
                                                  type="password" v-model="password"/>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="primary" type="submit" form="login-form">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                let name = this.username;
                let password = this.password;
                this.$store.dispatch('login', {name, password})
                    .then(() => {
                        return this.$store.dispatch('updateUser')
                    })
                    .then(() => this.$router.push('/'))
                    .catch(err => this.$toasted.error(`Login failed! Error: ${err}`, {}));
            }
        },
    };
</script>

<style scoped lang="scss">
    #inspire {
        grid-column: 1 / span 2;
    }
</style>
