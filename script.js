document.getElementById('promedioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const C1 = parseFloat(document.getElementById('C1').value);
    const C2 = parseFloat(document.getElementById('C2').value);
    const promedio = (C1 + C2) / 2;
    
    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-info" role="alert">
            El promedio es: ${promedio.toFixed(2)}
        </div>
    `;
});
