document.addEventListener('DOMContentLoaded', function () {
    renderHexagon(265); // wartość początkowa dla długości boku
});

function getPointsByWidth(edgeLength) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;

    var gorny_lewy = {x: marginX, y: centerY - height / 2}; // górny lewy
    var gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2}; // górny prawy
    var dolny_prawy = {x: marginX + edgeLength, y: centerY + height / 2}; // dolny prawy
    var dolny_lewy = {x: marginX, y: centerY + height / 2}; // dolny lewy
    var lewy = {x: marginX - edgeLength / 2, y: centerY}; // lewy górny wierzchołek
    var prawy = {x: marginX + edgeLength * 1.5, y: centerY}; // prawy górny wierzchołek

    return [lewy, gorny_lewy, gorny_prawy, prawy, dolny_prawy, dolny_lewy];
}

function getCrossByEdge(edgeLength) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;

    var gorny_lewy = {x: marginX, y: centerY - height / 2}; // górny lewy
    var gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2}; // górny prawy
    var dolny_prawy = {x: marginX + edgeLength, y: centerY + height / 2}; // dolny prawy
    var dolny_lewy = {x: marginX, y: centerY + height / 2}; // dolny lewy

    return [gorny_lewy, dolny_prawy, gorny_prawy, dolny_lewy];
}


function getLogicByEdge(edgeLength, margin = 1) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    //const width = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;
    //const centerX = edgeLength / 2 + edgeLength / 2;
    var center = {x: marginX + edgeLength / 2, y: centerY + margin}; // górny prawy
    var dolny_prawy = {x: marginX + edgeLength - margin, y: centerY + height / 2 - margin}; // dolny prawy
    var dolny_lewy = {x: marginX + margin, y: centerY + height / 2 - margin}; // dolny lewy

    return [dolny_lewy, dolny_prawy, center];
}

function getDataByEdge(edgeLength, margin = 1) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    //const width = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;
    //const centerX = edgeLength / 2 + edgeLength / 2;
    var center = {x: marginX + edgeLength / 2, y: centerY - margin}; // górny prawy
    var gorny_lewy = {x: marginX + margin, y: centerY - height / 2 + margin}; // górny lewy
    var gorny_prawy = {x: marginX + edgeLength - margin, y: centerY - height / 2 + margin}; // górny prawy

    return [gorny_lewy, gorny_prawy, center];
}

function getInDiamondByEdge(edgeLength, margin = 1) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;

    var lewy = {x: marginX - edgeLength / 2 + margin, y: centerY}; // lewy górny wierzchołek
    var gorny_lewy = {x: marginX, y: centerY - height / 2 + margin}; // górny lewy
    var center = {x: marginX + edgeLength / 2 - margin, y: centerY}; // górny prawy
    var dolny_lewy = {x: marginX, y: centerY + height / 2 - margin}; // dolny lewy

    return [lewy, gorny_lewy, center, dolny_lewy];
}

function getOutDiamondByEdge(edgeLength, margin = 1) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;

    var prawy = {x: marginX + edgeLength * 1.5 - margin, y: centerY}; // prawy górny wierzchołek
    var dolny_prawy = {x: marginX + edgeLength , y: centerY + height / 2 - margin}; // dolny prawy
    var center = {x: marginX + edgeLength / 2 + margin, y: centerY}; // górny prawy
    var gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2 + margin}; // górny prawy

    return [center, gorny_prawy, prawy, dolny_prawy];
}

function getDiamondByPoints(points) {
    // Połącz współrzędne w string dla atrybutu 'points' w SVG
    return points.map(p => `${Math.round(p.x)},${Math.round(p.y)}`).join(' ');
}

function getHexagonByPoints(points) {
    // Połącz współrzędne w string dla atrybutu 'points' w SVG
    return points.map(p => `${Math.round(p.x)},${Math.round(p.y)}`).join(' ');
}

function getTriangleByPoints(points) {
    // Połącz współrzędne w string dla atrybutu 'points' w SVG
    return points.map(p => `${Math.round(p.x)},${Math.round(p.y)}`).join(' ');
}


function renderHexagon(edgeLength) {
    const hexagonPoints = getHexagonByPoints(getPointsByWidth(edgeLength));
    const height = Math.sqrt(3) * edgeLength;
    const width = edgeLength * 3;
    const viewBox = `0 0 ${width} ${height + edgeLength}`; // Ustaw viewBox do obejmowania całego sześciokąta
    const centerY = height / 2 + edgeLength / 2;
    const marginX = edgeLength / 2 + 1;

    var gorny_lewy = {x: marginX, y: centerY - height / 2}; // górny lewy
    var gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2}; // górny prawy
    var dolny_prawy = {x: marginX + edgeLength, y: centerY + height / 2}; // dolny prawy
    var dolny_lewy = {x: marginX, y: centerY + height / 2}; // dolny lewy
    var lewy = {x: marginX - edgeLength / 2, y: centerY}; // lewy górny wierzchołek
    var prawy = {x: marginX + edgeLength * 1.5, y: centerY}; // prawy górny wierzchołek
    var center = {x: marginX + edgeLength / 2, y: centerY}; // górny prawy

    const borderColor = "white";
    const fontColor = "white";
    const fontSize = Math.round(edgeLength / 5);
    const fontSizeMarginX = Math.round(edgeLength / 10);
    const fontSizeMarginY = Math.round(edgeLength / 20);

    var leftCenter = {x: lewy['x'] + fontSizeMarginX, y: centerY + fontSizeMarginY}
    var rightCenter = {x: prawy['x'] - fontSizeMarginX, y: centerY + fontSizeMarginY}
    var topLeftCenter = {x: center['x'], y: gorny_lewy['y'] + fontSize}
    var bottomLeftCenter = {x: center['x'] , y: dolny_lewy['y'] - fontSizeMarginY}

    var crossPoints = getCrossByEdge(edgeLength)
    var dataPoints = getTriangleByPoints(getDataByEdge(edgeLength));
    var logicPoints = getTriangleByPoints(getLogicByEdge(edgeLength));

    var inPoints = getDiamondByPoints(getInDiamondByEdge(edgeLength));
    var outPoints = getDiamondByPoints(getOutDiamondByEdge(edgeLength));


    document.getElementById('svg-container').innerHTML = `
    <svg width="${width}px" height="${height + edgeLength}px" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${hexagonPoints}" fill="none" stroke="${borderColor}" />
        
            <!-- Linie przekątnych -->  
            <line x1="${crossPoints[0]['x']}" y1="${crossPoints[0]['y']}" x2="${crossPoints[1]['x']}" y2="${crossPoints[1]['y']}" stroke="${borderColor}" />
            <line x1="${crossPoints[2]['x']}" y1="${crossPoints[2]['y']}" x2="${crossPoints[3]['x']}" y2="${crossPoints[3]['y']}" stroke="${borderColor}" />
            
            <!-- Górny zielony trójkąt -->               
            <polygon points="${dataPoints}" fill="blue" />
            <text x="${topLeftCenter['x']}" y="${topLeftCenter['y']}" font-size="${fontSize}" fill="${fontColor}" text-anchor="middle">DANE</text>
            
            <!-- Dolny niebieski trójkąt -->
            <polygon points="${logicPoints}" fill="green" />
            <text x="${bottomLeftCenter['x']}" y="${bottomLeftCenter['y']}" font-size="${fontSize}" fill="${fontColor}" text-anchor="middle">LOGIKA</text>
            
            
            
            <!-- Lewy żółty romb  -->
            <polygon points="${inPoints}" fill="pink" />
             <text x="${leftCenter['x']}" y="${leftCenter['y']}" font-size="${fontSize}" fill="${fontColor}">wejście</text>
             
            <!-- Prawy pomarańczowy romb -->
            <polygon points="${outPoints}" fill="orange" /> 
            <text x="${rightCenter['x']}" y="${rightCenter['y']}" font-size="${fontSize}" fill="${fontColor}" text-anchor="end">wyjście</text>
      
      
    </svg>
    `;
}

function updateHexagon(newEdgeLength) {
    const edgeLength = newEdgeLength || document.getElementById('edge-length').value;
    renderHexagon(edgeLength);
}
