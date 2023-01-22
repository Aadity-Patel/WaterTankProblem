function calculateWaterTrapped() {
    var input = document.getElementsByName('inputArray')[0].value;
    input = input.split(' ');
    var len = input.length;
    var buildingHeights = new Array(len);
    var maxLeft = new Array(len);
    var maxRight = new Array(len);
    var waterStored = 0;
    
    for (let i = 0; i < len; i++) {
        buildingHeights[i] = parseInt(input[i]);
        
    }

    maxLeft[0] = buildingHeights[0];
    maxRight[len - 1] = buildingHeights[len - 1];
 
    for (var i = 1; i < len; i++) {
        maxLeft[i] = Math.max(maxLeft[i-1], buildingHeights[i]);
    }

    for (var i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], buildingHeights[i]);
    }

    for(var i = 0; i < len; i++){
        buildingHeights[i] = Math.min(maxLeft[i], maxRight[i]) - buildingHeights[i];
        waterStored += buildingHeights[i];
    }
 
    document.getElementById("output").innerHTML = waterStored + 'Units';
}