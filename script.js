const apiUrl = "https://61d77998-0da5-4199-8489-75edb7e2333e-00-1wpbje87vuexw.picard.repl.co:8080/now-playing"; // Your Replit API URL

async function getNowPlaying() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.song !== "Not playing anything right now.") {
        document.getElementById("album-art").src = data.albumArt || "default.png";
        document.getElementById("song-info").innerText = `${data.song} - ${data.artist}`;
    } else {
        document.getElementById("song-info").innerText = "Not playing anything right now.";
    }
}

// Refresh every 10 seconds
setInterval(getNowPlaying, 10000); 
getNowPlaying();
