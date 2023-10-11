const statusElement = document.getElementById("status");

function checkInternetConnection() {
    if (navigator.onLine) {
        statusElement.textContent = "You are online.";
        statusElement.style.cssText="background-color:#ee7f6d5; color:#689f38";
    } else {
        statusElement.textContent = "You are offline.";
        statusElement.style.cssText="background-color:#ffde0; color:#d32f2f";
    }
}

// Initial check when the page loads
checkInternetConnection();

// Check the internet connection every 5 seconds
setInterval(checkInternetConnection, 5000);
