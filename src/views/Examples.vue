<template>
  <div class="about">
    <h1>Sample Text</h1>
    <div class = "row">
        <div class="column">
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
            <h3><a href="http://www.google.com/"><img class="icon-image" src="../img/excel.jpeg"></a></h3>
            <h3><a href="localhost:8080/views/3dengine/3dmain.html"><img class="icon-image" src="../img/cubebkg02.jpeg"></a></h3>
        </div>
          <div class="column">
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
            <h3><img class="icon-image" src="../img/computerrepair.jpg"></h3>
        </div>
        <div class="column">
            <!-- <h3><a href="localhost:8080/views/3dengine/3dmain.html">3d</a></h3> -->
            <router-link to="./examples/tableapp"><img class="icon-image" src="../img/excel.jpeg"></router-link>
            <router-link to="./examples/3dmain"><img class="icon-image" src="../img/ascii.jpeg"></router-link>
            <router-link to="./examples/testcanvas"><img class="icon-image" src="../img/computerrepair.jpg"></router-link>
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
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
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
    
        width: 130px;
        height: 96px;

    }
</style>

