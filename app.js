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

    if (select === '+')
    {
        document.getElementById('text').innerText = 'plus';
    }
    else{
        if (select === '-'){
            document.getElementById('text').innerText = 'minus';
        }
        else{
            if (select === '*'){
                document.getElementById('text').innerText = 'krát';
            }
            else{
                if (select === '/'){
                    document.getElementById('text').innerText = 'děleno';
                }
            }
        }
    }
    
}