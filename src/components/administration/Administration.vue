<template>
    <div id="administration">
        <AddProduct/>
        <AddUser/>
    </div>
</template>

<script>
    import AddProduct from "./AddProduct";
    import AddUser from "./AddUser";
    export default {
        name: "Administration",
        components: {AddUser, AddProduct}
    }
</script>

<style scoped lang="scss">

</style>