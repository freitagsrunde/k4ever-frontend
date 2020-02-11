<template>
    <v-autocomplete :items="users" v-model="selectedUser" prepend-icon="person" label="Username"/>
</template>

<script>
    export default {
        name: "UserInput",
        props: ['value'],
        data() {
            return {
                selectedUser: this.value,
                users: []
            }
        },
        watch: {
            selectedUser(val) {
                this.$emit('input', val);
            }
        },
        created() {
            this.$http.get('/users/')
                .then(res => this.users = res.data.map(user => user.name)) //TODO probably use display_name instead of username
                .catch(console.error)
        }
    }
</script>

<style scoped>

</style>
