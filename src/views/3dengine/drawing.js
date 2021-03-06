import {normalizeNumber, getMaxOfArray, getMinOfArray, precise } from './calculations';

export function drawLine(obj, context, clipPlane) {
    
    for (var i = 0; i < obj.lines.length; i++){
            var p = obj.points[obj.lines[i][0]];
            if (p.z > clipPlane) {

                context.moveTo(p.sx, p.sy);
                for (var j = 0; j < obj.lines[i].length; j++) {
                    var nextpoint = j + 1;
                    //var np;
                    if (nextpoint < obj.lines[i].length) {
                        var p = obj.points[obj.lines[i][nextpoint]]
                        //console.log("np index: " + points[i][nextpoint])
                        //console.log(p);
                        context.lineTo(p.sx, p.sy);
                    }

                }
            }
        //}

    };
    // context.strokeStyle = '#111111';
    // context.lineWidth = 0.2;
    // context.stroke();
}

export function drawNormLine(obj, context, clipPlane) {
    //debugger;
    for(var i=0; i<obj.polyNormalPoints.length;i++){
        var n = obj.polyNormalPoints[i];
        var p = obj.centroids[i];

        if (n.z > clipPlane) {

            context.beginPath();
            context.moveTo(p.sx, p.sy);
            context.lineTo(n.sx, n.sy);

            context.strokeStyle = "#005588";
            context.stroke();
        }
    };
}

export function drawPoly(polyobjs, obj, context, clipPlane, useLightPoint) {
    var max = getMaxOfArray(obj.dotProdPoints);
    var min = getMinOfArray(obj.dotProdPoints);
    //getFullPolyObj();
    polyobjs.sort(sortZ);
    
    for (var i = 0; i < polyobjs.length; i++){

        if(polyobjs[i].dotProdPoint < 0){
            var p = polyobjs[i].points[0];
            if (p.z > clipPlane) {
                context.beginPath();
                context.moveTo(p.sx, p.sy);
                for (var j = 0; j < polyobjs[i].points.length; j++) {

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
                if(useLightPoint){
                //var tempDot = Math.round(normalizeNumber(polyobjs[i].lightingPoint, min, max) * 10)
                var tempDot = Math.round(normalizeNumber(polyobjs[i].lightingPoint, min, max) * 200)
                }
                else{
                    //use camera as light
                //var tempDot = Math.round(normalizeNumber(polyobjs[i].dotProdPoint, min, max) * 10)
                var tempDot = Math.round(normalizeNumber(polyobjs[i].dotProdPoint, min, max) * 200) //set scalar to 10 for rough shading, 200 for smooth
                }
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

export function drawPoints(obj, context, clipPlane){

    var p  = obj.points;
    for (var i = 0; i < obj.points.length; i++){
        //scale = fl / (fl + p[i].z + centerZ);
        if (p[i].z > clipPlane) {
            
            //var text = precise(p[i].x) + ", " + precise(p[i].y) + ", " + precise(p[i].z);
            //var text = i;
            context.fillRect(p[i].sx, p[i].sy, 3, 3);
            //context.font = "12px Arial";
            context.fillStyle = "#111111";
            //context.fillText(text, p[i].sx, p[i].sy);
        }
    }
}

export function drawLightPoint(light, context){
    var lightarray = [light];
    //project(lightarray);
    var textdata = ("light: " + light.x + "," + light.y + "," + light.z)
    context.fillRect(light.sx, light.sy, 5, 5);
    context.font = "12px Arial";
    context.fillStyle = "#111111";
    context.fillText(textdata, 100, 30); 
    //console.log(light.x + ","+ light.y+"," + light.z+","+light.sx+","+light.sy);
}

export function drawFPS(context, text){
    context.font = "12px Arial";
    context.fillStyle = "#000000";
    context.fillText(text, 100, 30);
}

function sortZ(a,b) {
    if (a.centroid.z < b.centroid.z)
        return 1;
    if (a.centroid.z > b.centroid.z)
        return -1;
    return 0;
}

