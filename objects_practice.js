// Step 1: Create the music object
let music = {};

// Step 2: Add a new playlist array called myPlaylist
music.myPlaylist = [
  "Bohemian Rhapsody - Queen",
  "Blinding Lights - The Weeknd"
];

// Step 3: Print myPlaylist to the console
console.log("My Playlist:", music.myPlaylist);

// Step 4: Delete the myPlaylist property
delete music.myPlaylist;

// Step 5: Print the music object to confirm deletion
console.log("Music object after deletion:", music);
