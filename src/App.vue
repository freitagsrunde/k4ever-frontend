<template>
    <div id="app">
        <last-bought-items></last-bought-items>
        <most-bought-items></most-bought-items>
        <login></login>
    </div>
</template>

<script>
    import LastBoughtItems from "../storepage/last-bought-items";
    import MostBoughtItems from "../storepage/most-bought-items/most-bought-items";
    import Login from "../login/login";

    export default {
        name: 'app',
        components: {
            Login,
            MostBoughtItems,
            LastBoughtItems,
        },
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
