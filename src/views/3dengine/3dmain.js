window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight
        fl = 800,
        clipPlane = -2000,
        modelScale = 1,
		light = {x: -500, y: -500, z:-500},
		points = [],
		lines = [],
		normaltemp = [{}],
		polyNormals = [],
		polyNormalIndex = [],
		polyNormalPoints = [],
		dotProdPoints = [],
		lightingPoints = [],
		centroids = [],
		polyobjs = [],
		needsUpdate = true,
		loadModel = false,
		loadScale = false,
		renderPoints = false,
		renderLines = false,
		renderPolys = false,
		renderNorms = false,
		centerZ = 1500,
		fileLoaded = false,
		lineColor = "#affffa",
		lc = document.getElementById("lineColor"),
		lineWidth = 0.1,
		lw = document.getElementById("lineWidth"),
		fileObj = "",
		filePath = "http://localhost:8080/monkey2.obj",
		fp = document.getElementById("fileOBJ"),
		ms = document.getElementById("modelScale");
		
		

	context.translate(width / 2, height / 2);

	  // points[0] = { x: -500, y: -500, z: 500 };
	  // points[1] = { x:  500, y: -500, z: 500 };
	  // points[2] = { x:  500, y: -500, z: -500 };
	  // points[3] = { x: -500, y: -500, z: -500 };
	  // points[4] = { x: -500, y: 500, z: 500 };
	  // points[5] = { x:  500, y: 500, z: 500 };
	  // points[6] = { x:  500, y: 500, z: -500 };
	  // points[7] = { x: -500, y: 500, z: -500 };
	
	function normalizeNumber(val, max, min) { return (val - min) / (max - min); }
	
	function getMaxOfArray(numArray) {
		  return Math.max.apply(null, numArray);
	}
	function getMinOfArray(numArray) {
		  return Math.min.apply(null, numArray);
	}
	function precise(x) {
		  return Number.parseFloat(x.toFixed(2));
	}
	
	
	function project(pointsList) {
		for(var i = 0; i < pointsList.length; i++) {
			var p = pointsList[i],
                scale = fl / (fl + p.z + centerZ);
				//nscale = fl/ (fl + p.nz + centerZ);

			p.sx = p.x * scale;
			p.sy = p.y * scale;
			// p.nsx = p.nx * nscale;
			// p.nsy = p.ny * nscale;
        }
        //console.log("scale: " + scale + "z " + points[176].z);
	}
	
	function dotProduct(){
		//debugger;
		dotProdPoints = [];
		var cam = {x: 0, y: 0, z:-2000};

		
		for(i=0; i<centroids.length; i++){
			var polyVec = {x: centroids[i].x - polyNormalPoints[i].x,
						   y: centroids[i].y - polyNormalPoints[i].y,
						   z: centroids[i].z - polyNormalPoints[i].z}
						   
			var camVec =  {x: cam.x - centroids[i].x,
						   y: cam.y - centroids[i].y,
						   z: cam.z - centroids[i].z}
						   
			dot = (polyVec.x * camVec.x) + (polyVec.y * camVec.y) + (polyVec.z * camVec.z);
			dotProdPoints.push(dot);
		}
	}
	
	function lightingCalc(cam){
		//debugger;
		lightingPoints = [];
		//var cam = {x: 0, y: 0, z:-2000};

		
		for(i=0; i<centroids.length; i++){
			var polyVec = {x: centroids[i].x - polyNormalPoints[i].x,
							y: centroids[i].y - polyNormalPoints[i].y,
							z: centroids[i].z - polyNormalPoints[i].z}
							
			var camVec =  {x: cam.x - centroids[i].x,
							y: cam.y - centroids[i].y,
							z: cam.z - centroids[i].z}
							
			dot = (polyVec.x * camVec.x) + (polyVec.y * camVec.y) + (polyVec.z * camVec.z);
			lightingPoints.push(dot);
		}
	}
	
	function crossProduct(){
		polyNormals = [];
		for(i=0; i< lines.length; i++){
			var p0 = points[lines[i][0]];
			var p1 = points[lines[i][1]];
			var p2 = points[lines[i][2]];
			
			var v1 = {};
			v1.x = (p1.x - p0.x)
			v1.y = (p1.y - p0.y)
			v1.z = (p1.z - p0.z)
			
			var v2 = {};
			v2.x = (p2.x - p0.x)
			v2.y = (p2.y - p0.y)
			v2.z = (p2.z - p0.z) 
			
			var n = {};
			n.x = v1.x * v2.x;
			n.y = v1.y * v2.y;
			n.z = v1.z * v2.z;
			
			var a = {}; //normalized vector
			a.x = n.x/(n.x + n.y + n.z);
			a.y = n.y/(n.x + n.y + n.z);
			a.z = n.z/(n.x + n.y + n.z);
			
			polyNormals.push(a);
			
			
			//debugger;
		}
		
	}
	
	function calcNormPts(){
		//debugger;
		polyNormalPoints = [];
		centroids = [];
		for(i=0; i < lines.length; i++){
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
			polyNormalPoints.push(tempP);
			centroids.push(centroid);
			//debugger;
		}
	}

	// function calcNormal(){
		
		// for	(i = 0; i < lines.length; i++){
			
			// //var n = []
			// for (j = 0; j < lines[i].length; j++) {
				// var p = points[lines[i][j]];
				// var nextpoint = j + i
				// if(nextpoint < lines[i].length){
					// //crossProduct();
					// var np = points[lines[i][nextpoint]];
					// p.nx = (p.y * np.z) - (p.z * np.y);
					// p.ny = (p.z * np.x) - (p.x * np.z);
					// p.nz = (p.x * np.y) - (p.y * np.x);
					// normaltemp.push({x:p.nx, y:p.ny, z:p.nz});
				// }
			// }
			
		// }
		// console.log(normaltemp);
	// }
	
    function drawLine() {
		context.beginPath();
        for (i = 0; i < lines.length; i++){
			if(dotProdPoints[i] < 0){
				//debugger;
				var p = points[lines[i][0]];
				//scale = fl / (fl + p.z + centerZ);
				if (p.z > clipPlane) {
					//console.log("drawline: " + lines[i])
					//console.log(lines[i][0])
					//console.log(p)

					context.moveTo(p.sx, p.sy);
					for (j = 0; j < lines[i].length; j++) {

						//console.log("p index: " + lines[i][j]);


						var nextpoint = j + 1;
						//var np;
						if (nextpoint < lines[i].length) {
							var p = points[lines[i][nextpoint]]
							//console.log("np index: " + points[i][nextpoint])
							//console.log(p);
							context.lineTo(p.sx, p.sy);
						}

					}
				}
			}

		};
		context.lineWidth = lineWidth;
		context.strokeStyle = lineColor;
		context.stroke();
	}
	function drawNormLine() {
			//debugger;
			for(i=0; i<polyNormalPoints.length;i++){
				var n = polyNormalPoints[i];
				var p = centroids[i];
				//scale = fl / (fl + p.z + centerZ);
				if (n.z > clipPlane) {
					//console.log("drawline: " + lines[i])
					//console.log(lines[i][0])
					//console.log(p)
					context.beginPath();
					context.moveTo(p.sx, p.sy);
					context.lineTo(n.sx, n.sy);

					context.strokeStyle = "#00FFFF";
					context.stroke();
			}
		};
	}
		// points = [],
		// lines = [],
		// polyNormals = [],
		// polyNormalIndex = [],
		// polyNormalPoints = [],
		// dotProdPoints = [],
		// centroids = [],
	function getFullPolyObj() {
		polyobjs = [];
		for(i=0; i < lines.length; i++){
			var tempPolyobj = {};
			tempPolyobj.lines = lines[i];
			tempPolyobj.points = [];
				for(j=0; j<lines[i].length; j++){
					tempPolyobj.points.push(points[lines[i][j]])
				}
			tempPolyobj.polyNormal = polyNormals[i];
			tempPolyobj.polyNormalPoint = polyNormalPoints[i];
			tempPolyobj.polyNormalIndex = polyNormalIndex[i];
			tempPolyobj.dotProdPoint = dotProdPoints[i];
			tempPolyobj.centroid = centroids[i];
			tempPolyobj.lightingPoint = lightingPoints[i];
			
			polyobjs.push(tempPolyobj);
		}
	}
	
	function sortZ(a,b) {
		if (a.centroid.z < b.centroid.z)
			return 1;
		if (a.centroid.z > b.centroid.z)
			return -1;
		return 0;
	}
	
	function drawPoly() {
		var max = getMaxOfArray(dotProdPoints);
		var min = getMinOfArray(dotProdPoints);
		getFullPolyObj();
		polyobjs.sort(sortZ);
		
        for (i = 0; i < polyobjs.length; i++){
            //debugger;
			if(polyobjs[i].dotProdPoint < 0){
				//var p = points[lines[i][0]];
				var p = polyobjs[i].points[0];
				//scale = fl / (fl + p.z + centerZ);
				if (p.z > clipPlane) {
					//console.log("drawline: " + lines[i])
					//console.log(lines[i][0])
					//console.log(p)
					context.beginPath();
					context.moveTo(p.sx, p.sy);
					for (j = 0; j < polyobjs[i].points.length; j++) {

						//console.log("p index: " + lines[i][j]);


						var nextpoint = j + 1;
						//var np;
						if (nextpoint < polyobjs[i].points.length) {
							var p = polyobjs[i].points[nextpoint]
							//console.log("np index: " + points[i][nextpoint])
							//console.log(p);
							context.lineTo(p.sx, p.sy);
						}

					}
					//debugger;

					//var tempDot = Math.round(normalizeNumber(polyobjs[i].dotProdPoint, min, max) * 10)
					var tempDot = Math.round(normalizeNumber(polyobjs[i].lightingPoint, min, max) * 200) //set scalar to 10 for rough shading, 200 for smooth
					tempDot = tempDot.toString(16);
					
					var fillPolyColor = "#" + tempDot + tempDot + tempDot;  //smooth shading
					//var fillPolyColor = "#"+ tempDot + tempDot + tempDot + tempDot + tempDot + tempDot;  //rough shading
					
					context.strokeStyle = fillPolyColor;
					context.fillStyle = fillPolyColor;
					
					context.lineWidth = 1;
					
					context.stroke();
					context.fill();
				}
			}
		};
	}

	function drawPoints(){

		var p  = points;
        for (var i = 0; i < points.length; i++){
            //scale = fl / (fl + p[i].z + centerZ);
            if (p[i].z > clipPlane) {
				
				var text = precise(p[i].x) + ", " + precise(p[i].y) + ", " + precise(p[i].z);
				var text = i;
                context.fillRect(p[i].sx, p[i].sy, 5, 5);
				context.font = "12px Arial";
				context.fillStyle = "#FFFFFF";
                context.fillText(text, p[i].sx, p[i].sy);
            }
		}
	}

	function drawLightPoint(){
		var lightarray = [light];
		project(lightarray);
		var textdata = ("light: " + light.x + "," + light.y + "," + light.z)
		context.fillRect(light.sx, light.sy, 5, 5);
		context.font = "12px Arial";
		context.fillStyle = "#FFFFFF";
		context.fillText(textdata, light.sx, light.sy); 
		//console.log(light.x + ","+ light.y+"," + light.z+","+light.sx+","+light.sy);
	}
	
	function drawNormLabel(){

		var p  = polyNormalPoints;
		var c = centroids;
        for (var i = 0; i < p.length; i++){
            //scale = fl / (fl + p[i].z + centerZ);
			var n = {x: c[i].x - p[i].x, y: c[i].y - p[i].y, z: c[i].z - p[i].z}; //current vector
			
			var a = {}; //normalized vector
			a.x = n.x/(n.x + n.y + n.z);
			a.y = n.y/(n.x + n.y + n.z);
			a.z = n.z/(n.x + n.y + n.z);
			
            if (p[i].z > clipPlane) {
				
				var text = a.x + ", " + a.y + ", " + a.z;
				context.font = "12px Arial";
				context.fillStyle = "#FFFFFF";
                context.fillText(text, p[i].sx, p[i].sy);
            }
		}
	}
	
		function translateLight(x, y, z) {
			light.x += x;
			light.y += y;
			light.z += z;
			needsUpdate = true;
		}



	function translateModel(x, y, z) {
		for(var i = 0; i < points.length; i++) {
			points[i].x += x;
			points[i].y += y;
			points[i].z += z;
		}
		for(var i = 0; i < polyNormalPoints.length; i++) {
			polyNormalPoints[i].x += x;
			polyNormalPoints[i].y += y;
			polyNormalPoints[i].z += z;
			
			centroids[i].x += x;
			centroids[i].y += y;
			centroids[i].z += z;
		}
		needsUpdate = true;
	}

	function rotateX(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);

		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				y = p.y * cos - p.z * sin,
				z = p.z * cos + p.y * sin;
			p.y = y;
			p.z = z;
		}
		for(var i = 0; i < polyNormalPoints.length; i++) {
			var p = polyNormalPoints[i],
				y = p.y * cos - p.z * sin,
				z = p.z * cos + p.y * sin;
			p.y = y;
			p.z = z;
		}
		for(var i = 0; i < centroids.length; i++) {
			var p = centroids[i],
				y = p.y * cos - p.z * sin,
				z = p.z * cos + p.y * sin;
			p.y = y;
			p.z = z;
		}
		needsUpdate = true;
	}

	function rotateY(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);

		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				x = p.x * cos - p.z * sin,
				z = p.z * cos + p.x * sin;
			p.x = x;
			p.z = z;
		}
		for(var i = 0; i < polyNormalPoints.length; i++) {
			var p = polyNormalPoints[i],
				x = p.x * cos - p.z * sin,
				z = p.z * cos + p.x * sin;
			p.x = x;
			p.z = z;
		}
		for(var i = 0; i < centroids.length; i++) {
			var p = centroids[i],
				x = p.x * cos - p.z * sin,
				z = p.z * cos + p.x * sin;
			p.x = x;
			p.z = z;
		}
		needsUpdate = true;
	}

	function rotateZ(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);

		for(var i = 0; i < points.length; i++) {
			var p = points[i],
				x = p.x * cos - p.z * sin,
				z = p.z * cos + p.x * sin;
			p.x = x;
			p.z = z;
		}
		for(var i = 0; i < polyNormalPoints.length; i++) {
			var p = polyNormalPoints[i],
				x = p.x * cos - p.y * sin,
				y = p.y * cos + p.x * sin;
			p.x = x;
			p.y = y;
		}
		for(var i = 0; i < centroids.length; i++) {
			var p = centroids[i],
				x = p.x * cos - p.y * sin,
				y = p.y * cos + p.x * sin;
			p.x = x;
			p.y = y;
		}
		needsUpdate = true;
	}

	document.body.addEventListener("keydown", function(event) {
		switch(event.keyCode) {
			case 37: // left
				if(event.ctrlKey) {
					rotateY(0.05);
				}
				else {
					translateModel(-20, 0, 0);
				}
				break;
			case 39: // right
				if(event.ctrlKey) {
					rotateY(-0.05);
				}
				else {
					translateModel(20, 0, 0);
				}
				break;
			case 38: // up
				if(event.shiftKey) {
					translateModel(0, 0, 20);
				}
				else if(event.ctrlKey) {
					rotateX(0.05);
				}
				else {
					translateModel(0, -20, 0);
				}
				break;
			case 40: // down
				if(event.shiftKey) {
					translateModel(0, 0, -20);
				}
				else if(event.ctrlKey) {
					rotateX(-0.05);
				}
				else {
					translateModel(0, 20, 0);
				}
				break;
			case 87://w
					if(event.shiftKey)
						translateLight(0, 50, 0);
					else
						translateLight(0, 0, 50);
				break;
			case 65: // a
					translateLight(-50, 0, 0);
				break;
			case 83: // s
					if(event.shiftKey)
						translateLight(0, -50, 0);
					else
						translateLight(0, 0, -50);
				break;
			case 68: // d
					translateLight(50, 0, 0);
				break;
		}
	});



	function readFile(file)
	{
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					var allText = rawFile.responseText;
					alert(allText);
                    fileObj = allText.split('\n');

                    console.log(fileObj);
				}
			}
		}
		rawFile.send(null);
		loadModel = false;
	}



    function loadVerts(fileStr) {
		points = [];
        //tempPoints = [];

        for (var i = 0; i < fileStr.length; i++) {
            var tempLine = [];
            if (fileStr[i][0] === 'v' && fileStr[i][1] === ' ') {
                tempLine.push(fileStr[i].split(' '))
                //console.log(tempLine[0][1]);
            }
            for (var j = 0; j < tempLine.length; j++) {
                points.push({ x: Math.round(tempLine[j][1] * modelScale), y: Math.round(tempLine[j][2] * modelScale), z: Math.round(tempLine[j][3] * modelScale) })
            }
            
        }
        console.log(points);

	}
	
	function loadNorms(fileStr){
		for (var i = 0; i < fileStr.length; i++) {
			var tempLine = [];

            if (fileStr[i][0] === 'v' && fileStr[i][1] === 'n') {
				//debugger;
                tempLine.push(fileStr[i].split(' '))
                //console.log(tempLine[0][1]);
            }

            for (var j = 0; j < tempLine.length; j++) {
                polyNormals.push({ x: tempLine[j][1], y: tempLine[j][2], z: tempLine[j][3] })
            } 
		}
		
	}

    function loadLines(fileStr) {
		lines = [];
        tempLines = [];
		polyNormalIndex = [];
        for (var i = 0; i < fileStr.length; i++) {
            var tempLine = [];
            if (fileStr[i][0] === 'f' && fileStr[i][1] === ' ') {
                tempLine.push(fileStr[i].split(' '))
                //console.log(tempLine[0][1][0] + tempLine[0][2][0] + tempLine[0][3][0] + tempLine[0][4][0])
                tempLines.push(tempLine[0]);
            }

        }
        console.log(tempLines);
        //debugger;
        for (var i = 0; i < tempLines.length; i++) {
            var tline = [];
            for (var j = 1; j < tempLines[i].length; j++) {
                var pushStr = tempLines[i][j];
                pushStr = pushStr.substring(0, pushStr.indexOf("/"));
                pushStr -= 1; //offset since obj index starts at 1 instead of 0
                tline.push(pushStr);
            }

			tline.push(tline[0]);

			var pushNorm = tempLines[i][1];
			pushNorm = pushNorm.substring(pushNorm.indexOf("//") + 2);
			pushNorm -= 1;
			polyNormalIndex.push(pushNorm);
			// console.log("tline: " + tline);
            lines.push(tline);
        }

        //console.log(lines);
    }
	
	function updateColor(color){
		this.lineColor = color.value;
		//console.log(color);
		//console.log(this.lineColor);
	}
	function updateWidth(width){

		this.lineWidth = width.value;
	}
	function updateScale(scale){

		this.modelScale = scale.value;
		loadVerts(fileObj);
		loadLines(fileObj);
		
		loadScale = false;
	}
	function updateModel(fp){

		//fp.setAttribute("type", "file")
		//filePath = "http://localhost:8080/monkey2.obj";
		filePath = fp.files[0].name;
		readFile(filePath);
		//console.log(fp)
		//console.log(filePath)
		loadVerts(fileObj);
		loadNorms(fileObj);
		loadLines(fileObj);
		calcNormPts();
		//fp.value = '';
	}
	// if(!fileLoaded){
		// readFile(filePath);
		// //processFile('file:///H:/Programs/programming/JS/games/3d_tutorial/cube.obj');
		// loadVerts(fileObj);
			
		// loadLines(fileObj);
		// //console.log(fileObj);
	// }
	modelScale = 1;
	renderPoints = false,
	renderNorms = false,
	update();

	function update() {

        if (needsUpdate) {
			lc.addEventListener("input", updateColor(lc));
			lw.addEventListener("input", updateWidth(lw));
			if(loadModel){
				fp.addEventListener("input", updateModel(fp));

			}
			if(loadScale)
				ms.addEventListener("input", updateScale(ms));
			// if(!fileLoaded){
				// readFile(filePath);

				// loadVerts(fileObj);
					
				// loadLines(fileObj);
				// fileLoaded = true;
				// //console.log(fileLoaded)
			// }
            context.clearRect(-width / 2, -height / 2, width, height);
			//calcNormal();
			//crossProduct();
					//calcNormPts();
								
								dotProduct();
								lightingCalc(light);
								drawLightPoint();
			project(points);
			project(polyNormalPoints);
			project(centroids);

            // context.beginPath();
			//drawLine(0, 4, 5, 1, 0);

			if(renderPolys){
				drawPoly();
			}
			if(renderLines){
				drawLine();
			}
			if(renderNorms){
				drawNormLine();
				//drawNormLabel();
			}
			if (renderPoints) {
                context.fillStyle = lineColor;
                drawPoints();
            }
			// context.lineWidth = lineWidth;
            // context.strokeStyle = lineColor;
			// context.stroke();

			// var imgData = context.getImageData(0, 0, width, height);
			// context.putImageData(imgData, 50, -100);
			needsUpdate = false;
		}
		requestAnimationFrame(update);
	}

};