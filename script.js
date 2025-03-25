const apiUrl = "https://your-repl-name.YOUR-USERNAME.repl.co/now-playing"; // Replace with your Replit URL

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
