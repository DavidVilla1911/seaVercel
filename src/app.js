// App.js - Gestione della connessione a Phantom Wallet
document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectButton');
    const statusDiv = document.getElementById('status');

    // Verifica se Phantom è disponibile
    if (window.solana && window.solana.isPhantom) {
        connectButton.addEventListener('click', connectPhantom);
    } else {
        statusDiv.textContent = 'Phantom Wallet non è installato.';
    }

    async function connectPhantom() {
        try {
            // Chiediamo il permesso per connettere il wallet
            const response = await window.solana.connect();
            statusDiv.textContent = `Wallet connesso! Indirizzo: ${response.publicKey.toString()}`;
            console.log('Public Key:', response.publicKey.toString());
        } catch (error) {
            console.error("Errore nella connessione al wallet Phantom:", error);
            statusDiv.textContent = 'Errore nella connessione al wallet.';
        }
    }
});
