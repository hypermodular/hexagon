document.addEventListener('DOMContentLoaded', function() {
    renderHexagon(50); // wartość początkowa dla długości boku
});

function getHexagonPoints(edgeLength) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
    const width = Math.sqrt(3) * edgeLength;
    const centerY = height / 2 + edgeLength / 2;
    const centerX = width / 2 + edgeLength / 2;

    // Oblicz współrzędne wierzchołków
    const points = [
        //{ x: edgeLength / 2, y: centerY }, // lewy górny wierzchołek
        { x: edgeLength / 2, y: centerY }, // lewy górny wierzchołek
        { x: 0, y: centerY - height / 2 }, // górny lewy
        { x: edgeLength, y: centerY - height / 2 }, // górny prawy
        { x: edgeLength * 1.5, y: centerY }, // prawy górny wierzchołek
        { x: edgeLength, y: centerY + height / 2 }, // dolny prawy
        { x: edgeLength, y: centerY + height / 2 }, // dolny lewy
        //{ x: 0, y: centerY + height / 2 }, // dolny lewy
    ];

    // Połącz współrzędne w string dla atrybutu 'points' w SVG
    return points.map(p => `${ Math.round(p.x + 'e+2') },${ Math.round(p.y + 'e+2') }`).join(' ');
}

function renderHexagon(edgeLength) {
    const hexagonPoints = getHexagonPoints(edgeLength);
    const height = Math.sqrt(3) * edgeLength;
    const width = edgeLength * 2;
    const viewBox = `0 0 ${width} ${height + edgeLength}`; // Ustaw viewBox do obejmowania całego sześciokąta

    document.getElementById('svg-container').innerHTML = `
    <svg width="${width}px" height="${height + edgeLength}px" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${hexagonPoints}" fill="none" stroke="black" />
        <!-- Reszta figury zgodnie z podanymi współrzędnymi i właściwościami -->
    </svg>
    `;
}

function updateHexagon(newEdgeLength) {
    const edgeLength = newEdgeLength || document.getElementById('edge-length').value;
    renderHexagon(edgeLength);
}