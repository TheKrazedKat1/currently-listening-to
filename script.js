const username = "YOUR_LASTFM_USERNAME";
const apiKey = "YOUR_LASTFM_API_KEY";
const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;

async function getNowPlaying() {
    const response = await fetch(url);
    const data = await response.json();
    const track = data.recenttracks.track[0];

    if (track && track['@attr'] && track['@attr'].nowplaying === "true") {
        document.getElementById("album-art").src = track.image[3]['#text'] || "default.png";
        document.getElementById("song-info").innerText = `${track.name} - ${track.artist['#text']}`;
    } else {
        document.getElementById("song-info").innerText = "Not playing anything right now.";
    }
}

setInterval(getNowPlaying, 10000); // Refresh every 10 seconds
getNowPlaying();
