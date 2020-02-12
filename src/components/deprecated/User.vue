<template>
    <div class="user">
        <form id="editUserForm" @submit.prevent="editUser">
            <span id="id">{{ id }}</span>
            <input type="text" size="20" id="name" name="name" v-model="name" readonly>
            <input type="text" size="30" id="display_name" name="display_name" v-model="display_name" readonly>
            <span id="balance">{{ parseFloat(balance).toFixed(2) }} €</span>
            <select name="role" id="role" v-model="role" @change="updateRole">
                <option disabled value="">Please select one</option>
                <option value="0">Lowest</option>
                <option value="1">Lower</option>
                <option value="2">Middle</option>
                <option value="3">Higher</option>
                <option value="4">Highest</option>
            </select>
            <!--<PermissionSelect/>-->
        </form>
    </div>
</template>

<script>
    // import PermissionSelect from "./PermissionSelect";
    export default {
        name: "User",
        // components: {PermissionSelect},
        props: {
            id: Number,
            name: String,
            display_name: String,
            balance: Number,
            role: Number
            // permissions: Object
        },
        methods: {
            updateRole() {
                this.$http.put(`/users/${this.name}/role/`, {role: parseInt(this.role)})
                    .then(res => this.$toasted.info(`Updating role of user ${res.data.name} successful.`))
                    .catch(err => this.$toasted.error(`Updating failed: ${err}`))
            }
        }
    }
</script>

<style scoped>

</style>
