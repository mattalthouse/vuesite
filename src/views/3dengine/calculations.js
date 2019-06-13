export function normalizeNumber(val, max, min) { return (val - min) / (max - min); }
	
	export function getMaxOfArray(numArray) {
		  return Math.max.apply(null, numArray);
	}
	export function getMinOfArray(numArray) {
		  return Math.min.apply(null, numArray);
	}
	export function precise(x) {
		  return Number.parseFloat(x.toFixed(2));
	}
	
	
	export function project(points, fl, centerZ) {
		for(var i = 0; i < points.length; i++) {
			var p = points[i],
                scale = fl / (fl + p.z + centerZ);
				//nscale = fl/ (fl + p.nz + centerZ);

			p.sx = (p.x * scale) + 400;
			p.sy = (p.y * scale) + 300;
			// p.nsx = p.nx * nscale;
			// p.nsy = p.ny * nscale;
        }
        //console.log("scale: " + scale + "z " + points[176].z);
        //return points;
	}

	export function projectSingle(p, fl, centerZ) {
		var scale = fl / (fl + p.z + centerZ);

		p.sx = (p.x * scale) + 400;
		p.sy = (p.y * scale) + 300;

	}
	
	export function dotProductInit(obj, cam){
		//debugger;
		var dotProdPoints = [];
		//var cam = {x: 0, y: 0, z:-2000};
		
		for(var i=0; i<obj.centroids.length; i++){
			var polyVec = {x: obj.centroids[i].x - obj.polyNormalPoints[i].x,
						   y: obj.centroids[i].y - obj.polyNormalPoints[i].y,
						   z: obj.centroids[i].z - obj.polyNormalPoints[i].z}
						   
			var camVec =  {x: cam.x - obj.centroids[i].x,
						   y: cam.y - obj.centroids[i].y,
						   z: cam.z - obj.centroids[i].z}
						   
			var dot = (polyVec.x * camVec.x) + (polyVec.y * camVec.y) + (polyVec.z * camVec.z);
			dotProdPoints.push(dot);
        }
        
        return dotProdPoints;
    }

    export function dotProduct(objs, cam){
		//debugger;
		//var dotProdPoints = [];
		//var cam = {x: 0, y: 0, z:-2000};
		objs.forEach(obj => { 
        
            
            var polyVec = {x: obj.centroid.x - obj.polyNormalPoint.x,
                            y: obj.centroid.y - obj.polyNormalPoint.y,
                            z: obj.centroid.z - obj.polyNormalPoint.z}
                        
            var camVec =  {x: cam.x - obj.centroid.x,
                            y: cam.y - obj.centroid.y,
                            z: cam.z - obj.centroid.z}
                        
            var dot = (polyVec.x * camVec.x) + (polyVec.y * camVec.y) + (polyVec.z * camVec.z);
            obj.dotProdPoint = dot;
            

        });
        
        //return dotProdPoints;
	}
	
	export function lightingPointCalc(objs, cam){
		//debugger;
		//var dotProdPoints = [];
		//var cam = {x: 0, y: 0, z:-2000};
		objs.forEach(obj => { 
        
            
            var polyVec = {x: obj.centroid.x - obj.polyNormalPoint.x,
                            y: obj.centroid.y - obj.polyNormalPoint.y,
                            z: obj.centroid.z - obj.polyNormalPoint.z}
                        
            var camVec =  {x: cam.x - obj.centroid.x,
                            y: cam.y - obj.centroid.y,
                            z: cam.z - obj.centroid.z}
                        
            var dot = (polyVec.x * camVec.x) + (polyVec.y * camVec.y) + (polyVec.z * camVec.z);
            obj.lightingPoint = dot;
            

        });
        
        //return dotProdPoints;
    }
    
    export function calcNormPts(obj){
		//debugger;
		//var polyNormalPoints = [];
        //var centroids = [];
        var lines = obj.lines;
        var points = obj.points;
        var polyNormals = obj.normals;
        var polyNormalIndex = obj.polyNormalIndex;
		for(var i=0; i < lines.length; i++){
			var p1 = points[lines[i][0]];
			var p2 = points[lines[i][1]];
			var p3 = points[lines[i][2]];
			var pn = polyNormals[polyNormalIndex[i]];
			var tempP = {};
			var centroid = {};
			
			centroid.x = (p1.x + p2.x + p3.x)/3;
			centroid.y = (p1.y + p2.y + p3.y)/3;
			centroid.z = (p1.z + p2.z + p3.z)/3;
			
			tempP.x = centroid.x + pn.x * 100;
			tempP.y = centroid.y + pn.y * 100;
			tempP.z = centroid.z + pn.z * 100;
			
			// var tempNormObj = {};
			// tempNormObj.centroid = centroid;
			// tempNormObj.npoint = tempP;
			obj.polyNormalPoints.push(tempP);
			obj.centroids.push(centroid);
			//debugger;
		}
	}