document.addEventListener('DOMContentLoaded', function() {
    renderHexagon(50); // wartość początkowa dla długości boku
});

function getHexagonPoints(edgeLength) {
    // Oblicz wysokość sześciokąta
    const height = Math.sqrt(3) * edgeLength;
  
    // Oblicz współrzędne wierzchołków
    const points = [
        { x: 150 - edgeLength, y: 130 }, // lewy górny wierzchołek
        { x: 150 - edgeLength / 2, y: 130 - height / 2 }, // górny lewy
        { x: 150 + edgeLength / 2, y: 130 - height / 2 }, // górny prawy
        { x: 150 + edgeLength, y: 130 }, // prawy górny wierzchołek
        { x: 150 + edgeLength / 2, y: 130 + height / 2 }, // dolny prawy
        { x: 150 - edgeLength / 2, y: 130 + height / 2 }, // dolny lewy
    ];
  
    // Połącz współrzędne w string dla atrybutu 'points' w SVG
    return points.map(p => `${p.x},${p.y}`).join(' ');
}

function renderHexagon(edgeLength) {
    const hexagonPoints = getHexagonPoints(edgeLength);
  
    document.getElementById('svg-container').innerHTML = `
    <svg width="300px" height="260px" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${hexagonPoints}" fill="none" stroke="black" />
        <!-- Tutaj powinny zostać dodane pozostałe figury i tekst -->
    </svg>
    `;
}

function updateHexagon() {
    const edgeLength = document.getElementById('edge-length').value;
    renderHexagon(edgeLength);
}