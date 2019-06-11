export function loadVerts(fileStr, modelScale) {
		var points = [];
        //tempPoints = [];

        for (var i = 0; i < fileStr.length; i++) {
            var tempLine = [];
            var test = fileStr[i][0];
            if (fileStr[i][0] === 'v' && fileStr[i][1] === ' ') {
                tempLine.push(fileStr[i].split(' '))
                //console.log(tempLine[0][1]);
            }
            for (var j = 0; j < tempLine.length; j++) {
                points.push({ x: Math.round(tempLine[j][1] * modelScale), y: Math.round(tempLine[j][2] * modelScale), z: Math.round(tempLine[j][3] * modelScale) })
            }
            
        }
    //console.log(points);
    return points;

}



export function loadLines(fileStr, obj) {
    var lines = [];
    var tempLines = [];
    var polyNormalIndex = [];
    for (var i = 0; i < fileStr.length; i++) {
        var tempLine = [];
        if (fileStr[i][0] === 'f' && fileStr[i][1] === ' ') {
            tempLine.push(fileStr[i].split(' '))
            //console.log(tempLine[0][1][0] + tempLine[0][2][0] + tempLine[0][3][0] + tempLine[0][4][0])
            tempLines.push(tempLine[0]);
        }

    }
    //console.log(tempLines);
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
        obj.polyNormalIndex.push(pushNorm);
        // console.log("tline: " + tline);
        lines.push(tline);
    }
    return lines;
    //console.log(lines);
}



export function loadNorms(fileStr){
    var polyNormals = [];
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
    return polyNormals;
}

export function getFullPolyObj(obj) {
    var polyobjs = [];
    for(var i=0; i < obj.lines.length; i++){
        var tempPolyobj = {};
        tempPolyobj.lines = obj.lines[i];
        tempPolyobj.points = [];
            for(var j=0; j<obj.lines[i].length; j++){
                tempPolyobj.points.push(obj.points[obj.lines[i][j]])
            }
        tempPolyobj.polyNormal = obj.normals[i];
        tempPolyobj.polyNormalPoint = obj.polyNormalPoints[i];
        tempPolyobj.polyNormalIndex = obj.polyNormalIndex[i];
        tempPolyobj.dotProdPoint = obj.dotProdPoints[i];
        tempPolyobj.centroid = obj.centroids[i];
        
        polyobjs.push(tempPolyobj);
    }
    return polyobjs;
}
