import React, { useRef, useState } from 'react';

function Audio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`audio ${isPlaying ? 'playing' : ''}`} onClick={handlePlay}>
      {isPlaying ? (
        <img src="../assets/icons/disc.svg" alt="" />
      ) : (
        <img src="../assets/icons/pause.svg" alt="" />
      )}
      <audio
        ref={audioRef}
        src="../assets/audio/my-love-medium.mp3"
        autoPlay
        loop
      ></audio>
    </div>
  );
}

export default Audio;
