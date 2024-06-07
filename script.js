const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumCover = document.getElementById('album-cover');
const progressBar = document.getElementById('progress-bar');
const volumeSlider = document.getElementById('volume-slider');
const playlistList = document.getElementById('playlist-list');


const musicLibrary = [
    {
        title: "Flute Music",
        artist: "Artist",
        cover: "./marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg",
        source: "C:/Users/Suhaina Fathima M/Downloads/dj-sonu-dj-kantik-rington-53712.mp3"
    },
    {
        title: "Sparrow Music",
        artist: "Artist",
        cover: "./marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg",
        source: "C:/Users/Suhaina Fathima M/Downloads/wakeup-alarm-tone-21497.mp3"
    }
];

let currentTrackIndex = 0; 


function updateSongInfo() {
    const currentTrack = musicLibrary[currentTrackIndex];
    songTitle.textContent = currentTrack.title;
    artistName.textContent = currentTrack.artist;
    albumCover.src = currentTrack.cover;
    audioPlayer.src = currentTrack.source;
}


playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playBtn.textContent = "Play";
    }
});


prevBtn.addEventListener('click', () => {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = musicLibrary.length - 1;
    }
    updateSongInfo();
    audioPlayer.play();
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex++;
    if (currentTrackIndex >= musicLibrary.length) {
        currentTrackIndex = 0;
    }
    updateSongInfo();
    audioPlayer.play();
});


audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
});


volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});


function createPlaylistItems() {
    musicLibrary.forEach((track, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = track.title;
        listItem.dataset.trackIndex = index; // Store track index
        listItem.addEventListener('click', () => {
            currentTrackIndex = index;
            updateSongInfo();
            audioPlayer.play();
        });
        playlistList.appendChild(listItem);
    });
}


updateSongInfo();
createPlaylistItems();