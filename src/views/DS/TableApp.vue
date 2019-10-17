<template>
    
    <div id="tableapp">
        <!--<h2 style="position:fixed;">All of the Tables</h2>-->
        <p> A datatable that takes in any json and makes a table from it. Data randomly generated using <a href="https://mockaroo.com/">Mockaroo</a></p>
        <p>Any new data entered is temporary to the browser session. It is not saved in any database, and will be erased if the page is refreshed.</p>
        
        
        <app-table appTitle="Table 1" jsonSource="https://api.myjson.com/bins/t5x0u"></app-table>
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
