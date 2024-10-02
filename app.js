if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function kalkulacka() {
    var select = document.getElementById('znamenka').value;
    var hodnota1 = document.getElementById('pole1').value;
    var hodnota2 = document.getElementById('pole2').value;
    

    var cislo1 = parseInt(hodnota1, 10);
    var cislo2 = parseInt(hodnota2, 10);
    

    if (select === '+')
    {
        vysledek = cislo1 + cislo2;
        document.getElementById('text').innerText = vysledek;
    }
    else{
        if (select === '-'){
            vysledek = cislo1 - cislo2;
            document.getElementById('text').innerText = vysledek;
        }
        else{
            if (select === '*'){
                vysledek = cislo1 * cislo2;
                document.getElementById('text').innerText = vysledek;
            }
            else{
                if (select === '/'){
                    if (cislo2 === 0){
                        document.getElementById('text').innerText = 'Nulou se nedá dělit';
                    }
                    else{
                        vysledek = cislo1 / cislo2;
                        document.getElementById('text').innerText = vysledek;
                    }
                }
            }
        }
    }
    
}