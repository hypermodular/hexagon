document.addEventListener('DOMContentLoaded', function () {
    renderHexagon(150); // wartość początkowa dla długości boku
});

function getPointsByWidth(edgeLength, marginX, centerY) {
    // Oblicz wysokość sześciokąta
    let height = Math.sqrt(3) * edgeLength;

    let gorny_lewy = {x: marginX, y: centerY - height / 2}; // górny lewy
    let gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2}; // górny prawy
    let dolny_prawy = {x: marginX + edgeLength, y: centerY + height / 2}; // dolny prawy
    let dolny_lewy = {x: marginX, y: centerY + height / 2}; // dolny lewy
    let lewy = {x: marginX - edgeLength / 2, y: centerY}; // lewy górny wierzchołek
    let prawy = {x: marginX + edgeLength * 1.5, y: centerY}; // prawy górny wierzchołek

    return [lewy, gorny_lewy, gorny_prawy, prawy, dolny_prawy, dolny_lewy];
}

function getCrossByEdge(edgeLength, marginX, centerY) {
    // Oblicz wysokość sześciokąta
    let height = Math.sqrt(3) * edgeLength;

    let gorny_lewy = {x: marginX, y: centerY - height / 2}; // górny lewy
    let gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2}; // górny prawy
    let dolny_prawy = {x: marginX + edgeLength, y: centerY + height / 2}; // dolny prawy
    let dolny_lewy = {x: marginX, y: centerY + height / 2}; // dolny lewy

    return [gorny_lewy, dolny_prawy, gorny_prawy, dolny_lewy];
}


function getLogicByEdge(edgeLength, margin = 1, marginX, centerY) {
    // Oblicz wysokość sześciokąta
    let height = Math.sqrt(3) * edgeLength;
    let center = {x: marginX + edgeLength / 2, y: centerY + margin}; // górny prawy
    let dolny_prawy = {x: marginX + edgeLength - margin, y: centerY + height / 2 - margin}; // dolny prawy
    let dolny_lewy = {x: marginX + margin, y: centerY + height / 2 - margin}; // dolny lewy

    return [dolny_lewy, dolny_prawy, center];
}

function getDataByEdge(edgeLength, margin = 1, marginX, centerY) {
    // Oblicz wysokość sześciokąta
    let height = Math.sqrt(3) * edgeLength;
    let center = {x: marginX + edgeLength / 2, y: centerY - margin}; // górny prawy
    let gorny_lewy = {x: marginX + margin, y: centerY - height / 2 + margin}; // górny lewy
    let gorny_prawy = {x: marginX + edgeLength - margin, y: centerY - height / 2 + margin}; // górny prawy

    return [gorny_lewy, gorny_prawy, center];
}

function getInDiamondByEdge(edgeLength, margin = 1, marginX, centerY) {
    // Oblicz wysokość sześciokąta
    let height = Math.sqrt(3) * edgeLength;

    let lewy = {x: marginX - edgeLength / 2 + margin, y: centerY}; // lewy górny wierzchołek
    let gorny_lewy = {x: marginX, y: centerY - height / 2 + margin}; // górny lewy
    let center = {x: marginX + edgeLength / 2 - margin, y: centerY}; // górny prawy
    let dolny_lewy = {x: marginX, y: centerY + height / 2 - margin}; // dolny lewy

    return [lewy, gorny_lewy, center, dolny_lewy];
}

function getOutDiamondByEdge(edgeLength, margin = 1, marginX, centerY) {
    // Oblicz wysokość sześciokąta
    let height = Math.sqrt(3) * edgeLength;

    let prawy = {x: marginX + edgeLength * 1.5 - margin, y: centerY}; // prawy górny wierzchołek
    let dolny_prawy = {x: marginX + edgeLength , y: centerY + height / 2 - margin}; // dolny prawy
    let center = {x: marginX + edgeLength / 2 + margin, y: centerY}; // górny prawy
    let gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2 + margin}; // górny prawy

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


function renderHexagon(edgeLength = 50) {
    let height = Math.sqrt(3) * edgeLength;
    let width = edgeLength * 3;
    let viewBox = `0 0 ${width} ${height + edgeLength}`; // Ustaw viewBox do obejmowania całego sześciokąta
    let centerY = height / 2 + edgeLength / 2;
    let marginX = Math.round( height / 2  );

    let gorny_lewy = {x: marginX, y: centerY - height / 2}; // górny lewy
    let gorny_prawy = {x: marginX + edgeLength, y: centerY - height / 2}; // górny prawy
    let dolny_prawy = {x: marginX + edgeLength, y: centerY + height / 2}; // dolny prawy
    let dolny_lewy = {x: marginX, y: centerY + height / 2}; // dolny lewy
    let lewy = {x: marginX - edgeLength / 2, y: centerY}; // lewy górny wierzchołek
    let prawy = {x: marginX + edgeLength * 1.5, y: centerY}; // prawy górny wierzchołek
    let center = {x: marginX + edgeLength / 2, y: centerY}; // górny prawy

    let borderColor = "white";
    let fontColor = "white";
    let fontSize = Math.round(edgeLength / 5);
    let fontSizeMarginX = Math.round(edgeLength / 10);
    let fontSizeMarginY = Math.round(edgeLength / 20);

    let leftCenter = {x: lewy['x'] + fontSizeMarginX, y: centerY + fontSizeMarginY}
    let rightCenter = {x: prawy['x'] - fontSizeMarginX, y: centerY + fontSizeMarginY}
    let topLeftCenter = {x: center['x'], y: gorny_lewy['y'] + fontSize}
    let bottomLeftCenter = {x: center['x'] , y: dolny_lewy['y'] - fontSizeMarginY}

    let margin = 3;


    let hexagonPoints = getHexagonByPoints(getPointsByWidth(edgeLength, marginX, centerY));


    let crossPoints = getCrossByEdge(edgeLength, marginX, centerY)
    let dataPoints = getTriangleByPoints(getDataByEdge(edgeLength, margin, marginX, centerY));
    let logicPoints = getTriangleByPoints(getLogicByEdge(edgeLength, margin, marginX, centerY));

    let inPoints = getDiamondByPoints(getInDiamondByEdge(edgeLength, margin, marginX, centerY));
    let outPoints = getDiamondByPoints(getOutDiamondByEdge(edgeLength, margin, marginX, centerY));


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
    //let edgeLength = newEdgeLength || document.getElementById('edge').value;
    let edgeLength = document.getElementById('edge').value;
    renderHexagon(edgeLength);
}
