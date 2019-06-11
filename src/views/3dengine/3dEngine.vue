<template>
  <div class="testcanvas">
    <h3>test canvas</h3>
		<p>This is a test software renderer I made to explore the mathematic concepts behind rendering in 3D. parses basic obj files exported from blender.</p>
		<p>If you do not have a working .obj file handy, click to link below to download a file to use with this renderer.</p>
	    <p><a href="./blender-monkey-hi.obj" download="blender-monkey-hi.obj">Click to download sample .obj</a></p>
		<!-- <button @click="needsUpdate = true">Update</button> -->
		<input type="number" v-model="modelScale" width="30px"> Model Scale (Reload to change)
		<button @click="populateModel">Load Model</button>
		<input type="file" v-on:change="readFile">
				<br/>
		<input type="range" min="0" max="0.5" step="0.01" v-model="spinRateX"> Spin Rate X
		<input type="range" min="0" max="0.5" step="0.01" v-model="spinRateY"> Spin Rate Y
		<input type="range" min="0" max="0.5" step="0.01" v-model="spinRateZ"> Spin Rate Z
				<br/>
		<input type="checkbox" @click="renderPoints = !renderPoints"> Draw Points
		<input type="checkbox" @click="renderLines = !renderLines"> Draw Lines
		<input type="checkbox" @click="renderNorms = !renderNorms"> Draw Normals
		<input type="checkbox" @click="renderPolys = !renderPolys"> Draw Polys
		<input type="checkbox" @click="renderFPS = !renderFPS"> Show FPS
		<input type="color" v-model="lineColor"> Line Color
				<br/>
    <canvas id="canvas" width=800 height=600></canvas>
  </div>
</template>

<script>
import { readFile } from 'fs';
import { loadVerts, loadNorms, loadLines, getFullPolyObj } from './modelLoading';
import { project, dotProduct, dotProductInit, calcNormPts } from './calculations';
import { drawPoints, drawLine, drawNormLine, drawPoly, drawFPS } from './drawing';
import { translateModel, rotateX, rotateY, rotateZ } from './movement';
//import './modelLoading';
export default {
	name: 'examples',
	data: function(){
		return {
			fl: 800,
			clipPlane: -2000,
			modelScale: 1,
			canvW: 3840,
			canvH: 2160,
			cam: {x: 0, y: 0, z:-2000},
			testx: 50,
			spinRateX: 0.0,
			spinRateY: 0.2,
			spinRateZ: 0.0,
			centerZ: 1500,
			modelLoaded: false,
			needsUpdate: false,
			renderPoints: false,
			renderLines: false,
			renderNorms: false,
			renderPolys: false,
			renderFPS: false,
			lineColor: '#111111',
			fileStr: "",
			//modelObj: [{}],
			//polyObjs: []
		}
	},
 		methods:{
			update: function(){
				var t0 = performance.now();
				var x = document.getElementById('canvas');
				var canvas = x.getContext('2d');
				canvas.clearRect(0, 0, 800, 600);
				if(this.modelLoaded){
					rotateY(this.spinRateY, this.modelObj, this.needsUpdate);
					rotateX(this.spinRateX, this.modelObj, this.needsUpdate);
					rotateZ(this.spinRateZ, this.modelObj, this.needsUpdate);
					if(this.needsUpdate){
						//canvas.clearRect(0, 0, 800, 600);
						canvas.beginPath();

						project(this.modelObj.points, this.fl, this.centerZ);
						project(this.modelObj.centroids, this.fl, this.centerZ);
						project(this.modelObj.polyNormalPoints, this.fl, this.centerZ);

						if(this.renderPolys){
							dotProduct(this.polyObjs, this.cam)
							drawPoly(this.polyObjs, this.modelObj, canvas, this.clipPlane)
						}
						if(this.renderPoints)
							drawPoints(this.modelObj, canvas, this.clipPlane);
						if(this.renderLines){
							drawLine(this.modelObj, canvas, this.clipPlane);
							canvas.strokeStyle = this.lineColor;
							canvas.lineWidth = 0.2;
							canvas.stroke();
						}
						if(this.renderNorms)
							drawNormLine(this.modelObj, canvas, this.clipPlane)


					}
					//canvas.fillRect(this.testx,50,5,6);
					//this.needsUpdate = false;
					
				}
				var t1 = performance.now();
				if(this.renderFPS)
					drawFPS(canvas, 1/((t1-t0)/1000));

				window.requestAnimationFrame(this.update);
			},

			readFile: function(ev){
				var self = this;
				const file = ev.target.files[0];
				const reader = new FileReader();
				console.log(file);
				reader.onload = function(e){
					self.fileStr = e.target.result.split('\n');
				};				 
				reader.readAsText(file);

			},

			populateModel: function(){
				this.modelObj = [{}];
				this.polyObjs = [];
				//this.modelObj.points = [];
				this.modelObj.polyNormalIndex = [];
				this.modelObj.polyNormalPoints = [];
				this.modelObj.centroids = [];
				this.modelObj.points = loadVerts(this.fileStr, this.modelScale);
				this.modelObj.normals = loadNorms(this.fileStr);
				this.modelObj.lines = loadLines(this.fileStr, this.modelObj);
				calcNormPts(this.modelObj);
				this.modelObj.dotProdPoints = dotProductInit(this.modelObj, this.cam);
				this.polyObjs = getFullPolyObj(this.modelObj);
				this.modelLoaded = true;
				this.needsUpdate = true;
			}

 		},
 		mounted: function(){
			 //this.canvasImage();
			 this.update();
 		}

}
</script>