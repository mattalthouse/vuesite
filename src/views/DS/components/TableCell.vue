<template>
    <span id="TableCell">
        <slot name="app-cell">
            {{value}}
        </slot>

    </span>
</template>

<script>
    export default {
        name: 'TableCell',
        props: {
            column: {
                type: String,
                //required: false,
            },
            hoverActive: {
                type: Boolean,
   
            },
            value: {
                //type: String,
                //required: false,
            },
            header: {
                type: Boolean,
                //required: false,
            },
            objID: {
                type: Number,
                //required: false,
            },
            colID: {
                type: Number,
            },
            searchInclude: {
                type: Boolean,
            },
            isEditable: {
                type: Boolean
            }
        },
        data() {
            return {

            }
        },
        methods: {
            //showModal: function () {
            //    this.$emit('showModalCell', true)
            //},
        }

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>