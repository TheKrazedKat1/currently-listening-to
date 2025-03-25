const apiUrl = "https://61d77998-0da5-4199-8489-75edb7e2333e-00-1wpbje87vuexw.picard.repl.co/now-playing"; // Your Replit API URL

async function getNowPlaying() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.song !== "Not playing anything right now.") {
            // Ensure album art is set
            const albumArt = data.albumArt || "default.png";
            document.getElementById("album-art").src = albumArt;
            document.getElementById("song-info").innerText = `${data.song} - ${data.artist}`;
        } else {
            document.getElementById("song-info").innerText = "Not playing anything right now.";
            document.getElementById("album-art").src = "default.png"; // Fallback image
        }
    } catch (error) {
        console.error("Error fetching data from Replit:", error);
        document.getElementById("song-info").innerText = "Error fetching song data.";
        document.getElementById("album-art").src = "default.png"; // Fallback image
    }
}

// Refresh every 10 seconds
setInterval(getNowPlaying, 10000); 
getNowPlaying();
