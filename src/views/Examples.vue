<template>
  <div class="about">
    <h1>Example Projects</h1>
    <p>A couple of example projects created using Vue. Click the images to see more. </p>
    <div class = "row">
        <!-- <div class="column">
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
            <h3><a href="http://www.google.com/"><img class="icon-image" src="../img/excel.jpeg"></a></h3>
            <h3><a href="localhost:8080/views/3dengine/3dmain.html"><img class="icon-image" src="../img/cubebkg02.jpeg"></a></h3>
        </div>
          <div class="column">
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
        </div> -->
        <!-- <div class="column"> -->
            <!-- <h3><a href="localhost:8080/views/3dengine/3dmain.html">3d</a></h3> -->
            <router-link to="./examples/tableapp"><img class="icon-image" src="../img/excel.jpeg"></router-link>
            <h3>Data Tables</h3>
            <p>A data table app that takes a generic json string and converts it into a data table.</p>
            <p>adding or editing cells is only visual. Data is not retained if page is reloaded. </p>
            <br/><br/><br/>
            <router-link to="./examples/3dmain"><img class="icon-image" src="../img/ascii.jpeg"></router-link>
            <h3>3D Renderer</h3>
            <p>3D rendering using the 2D html 5 canvas. loads in obj files exported from blender.</p>
            <!-- <p><a href="https://github.com/robertdole/vuesite/tree/master/src/views/3dengine/monkey2.obj">test
               
            </a></p> -->
            <!-- <router-link to="./examples/testcanvas"><img class="icon-image" src="../img/computerrepair.jpg"></router-link> -->
        </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'examples',


}
</script>
<style>
.row{
      display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
    .icon-image {
    
        width: 200px;
        height: 160px;

    }
</style>

