<template>
  <div class="testcanvas">
    <h1>test canvas</h1>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'examples',
 		methods:{
 			canvasImage: function(){
 				var x = document.getElementById('canvas');
 				var canvas = x.getContext('2d');
 
 				var img = new Image();
                img.src = 'cubebkg02.jpg';
 				// img.addEventListener("load",function(){
 				// 	canvas.drawImage(img,0,0);
                 // },false);
                 canvas.drawImage(img,0,0);
                 canvas.fillRect(20,20,150,100);
                
 			}
 		},
 		mounted: function(){
 			this.canvasImage();
 		}

}
</script>