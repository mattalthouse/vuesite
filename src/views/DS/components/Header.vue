<template>
    <header>
        <h3>{{title}}</h3>
    </header>
</template>

<script>


    export default {
        props: ['title', 'subtitle'],

    };
</script>

<style scoped>
    header {
        background-color:rgb(53, 106, 150);
        padding: 5px;
    }

    h1, h3 {
        font-family:'Trebuchet MS';
        color: white;
        text-align: left;
    }
</style>
