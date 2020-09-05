window.onload = () => {
    lastSong();
}

function lastSong()
{
    const lastfm = blog.fm.apiPath + '?method=user.getrecenttracks&user=f7701&api_key=' + blog.fm.apiKey + blog.fm.apiFormat;
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200) {
            let song = JSON.parse(request.responseText).recenttracks.track[0];
            
            updateSong(song);
        }
    }

    request.open('GET', lastfm, true);
    request.send(null);
}

function updateSong(song)
{
    let tagSong = document.getElementById('#songname');
    let tagArtist = document.getElementById('#songartist');

    tagSong.innerHTML = song.name;
    tagArtist.innerHTML = song.artist['#text'];
}
