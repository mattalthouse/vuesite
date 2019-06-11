<template>
    <div id="tableapp">
        <!--<h2 style="position:fixed;">All of the Tables</h2>-->
        
        
        
        <app-table appTitle="Table 1" jsonSource="https://api.myjson.com/bins/t5x0u"></app-table>
        <!-- <app-table appTitle="Table 2" jsonSource="https://api.myjson.com/bins/137p3s"></app-table> -->
        <app-table appTitle="animals" jsonSource="https://api.myjson.com/bins/vjahk"></app-table>




    </div>
</template>

<script>
    //require('./assets/tablestyle.css')
    //require('./assets/Main.css')
    import Table from './Table.vue';


    export default {
        components: {
            'app-table': Table,

        },
        name: 'app',
        data: function () {
            return {
                jsonPath: ""

            }
        },
            
    };
</script>

<style>
    h2{
        color: black;
        background-color:#808080;
    }
</style>
