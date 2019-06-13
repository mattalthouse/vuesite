export function translateModel(x, y, z) {
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

export function translateLight(x, y, z, light) {
    light.x += x;
    light.y += y;
    light.z += z;
}

export function rotateX(angle, obj, needsUpdate) {
    var cos = Math.cos(angle),
        sin = Math.sin(angle);

    for(var i = 0; i < obj.points.length; i++) {
        var p = obj.points[i],
            y = p.y * cos - p.z * sin,
            z = p.z * cos + p.y * sin;
        p.y = y;
        p.z = z;
    }
    for(var i = 0; i < obj.polyNormalPoints.length; i++) {
        var p = obj.polyNormalPoints[i],
            y = p.y * cos - p.z * sin,
            z = p.z * cos + p.y * sin;
        p.y = y;
        p.z = z;
    }
    for(var i = 0; i < obj.centroids.length; i++) {
        var p = obj.centroids[i],
            y = p.y * cos - p.z * sin,
            z = p.z * cos + p.y * sin;
        p.y = y;
        p.z = z;
    }
    needsUpdate = true;
}

export function rotateY(angle, obj, needsUpdate) {
    var cos = Math.cos(angle),
        sin = Math.sin(angle);

    for(var i = 0; i < obj.points.length; i++) {
        var p = obj.points[i],
            x = p.x * cos - p.z * sin,
            z = p.z * cos + p.x * sin;
        p.x = x;
        p.z = z;
    }
    for(var i = 0; i < obj.polyNormalPoints.length; i++) {
        var p = obj.polyNormalPoints[i],
            x = p.x * cos - p.z * sin,
            z = p.z * cos + p.x * sin;
        p.x = x;
        p.z = z;
    }
    for(var i = 0; i < obj.centroids.length; i++) {
        var p = obj.centroids[i],
            x = p.x * cos - p.z * sin,
            z = p.z * cos + p.x * sin;
        p.x = x;
        p.z = z;
    }
    needsUpdate = true;
    
}

export function rotateZ(angle, obj, needsUpdate) {
    var cos = Math.cos(angle),
        sin = Math.sin(angle);

    for(var i = 0; i < obj.points.length; i++) {
        var p = obj.points[i],
            x = p.x * cos - p.y * sin,
            y = p.y * cos + p.x * sin;
        p.x = x;
        p.y = y;
    }
    for(var i = 0; i < obj.polyNormalPoints.length; i++) {
        var p = obj.polyNormalPoints[i],
            x = p.x * cos - p.y * sin,
            y = p.y * cos + p.x * sin;
        p.x = x;
        p.y = y;
    }
    for(var i = 0; i < obj.centroids.length; i++) {
        var p = obj.centroids[i],
            x = p.x * cos - p.y * sin,
            y = p.y * cos + p.x * sin;
        p.x = x;
        p.y = y;
    }
    needsUpdate = true;
}