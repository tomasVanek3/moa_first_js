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

var select = document.getElementById('znamenka').value;
 
function kalkulacka() {
    if (select === '+')
    {
        document.getElementById('text').innerText = 'plus';
    }
    
}