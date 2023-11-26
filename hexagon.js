// Inicjalizacja SVG przy ładowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    renderHexagon();
});

function renderHexagon(coords = "0,130 75,30 225,30 300,130 225,230 75,230") {
    // Pobierz kontener dla SVG
    const container = document.getElementById('svg-container');
  
    // Stwórz SVG za pomocą danych współrzędnych
    container.innerHTML = `
    <svg width="300px" height="260px" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${coords}" fill="none" stroke="black" />
        <!-- Reszta figury zgodnie z podanymi współrzędnymi i właściwościami -->
    </svg>
    `;
}

function updateHexagon() {
    // Pobierz nowe współrzędne z input
    const newCoords = document.getElementById('hexagon-coords').value;
  
    // Wyrenderuj sześciokąt z nowymi współrzędnymi
    renderHexagon(newCoords);
}