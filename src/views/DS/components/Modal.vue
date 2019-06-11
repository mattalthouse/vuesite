<template>
    <transition name="modal">
        <div class="modal modal-mask" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <slot name="header"></slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    module.exports = {
        name: 'modal',
        props: ['list']
    }
</script>

<style>
    .modal-mask {
        position: center;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
    }
    .modal {
        padding: 20px;
        width: 300px;
        height: 300px;
        position: fixed;
        margin-left: 30%;
        margin-right: 50%;
        margin-top: 80px;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }
      .modal-header {
    padding: 0px;
    display: flex;
    margin-left:35%;
  }
    .modal-footer {
        padding: 0px;
        display: flex;
        margin-left: 40%;
    }
    .modal-body {
        position: relative;
        padding: 20px 10px;
        margin-left:5%;
    }
    input{
        font-size:1em;
        margin-left:5%;
        border-radius:3px;
        border-style:solid;
        border-color:#808080;
        border-width:1px;
    }


</style>