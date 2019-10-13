<template>
    <div class="userInput">
        <input type="text" name="foreign-username" placeholder="username" v-model="selectedUser" list="usernames" step="0.01"
               required>
        <datalist id="usernames">
            <option v-for="u in users"
                    :key="u">{{ u }}</option>
        </datalist>
    </div>
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
