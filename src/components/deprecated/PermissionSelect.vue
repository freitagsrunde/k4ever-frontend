<template>
    <div class="permissionSelect">
        <select id="permissions" name="permissions" v-model="selectedPermission" disabled>
            <option disabled value="">Please select one</option>
            <option v-for="p in permissions" :key="p.id" :value="p.id"> {{ p.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "PermissionSelect",
        props: ['value'],
        data() {
            return {
                selectedPermission: this.value,
                permissions: []
            }
        },
        watch: {
            selectedPermission(val) {
                this.$emit('input', val);
            }
        },
        mounted() {
            this.$http.get(`/permissions/`)
                .then(res => this.permissions = res.data)
                .catch(console.error)
        }
    }
</script>

<style scoped>

</style>
