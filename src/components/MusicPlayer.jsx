import React, { useRef, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log(
            "Trình duyệt đã chặn tự động phát. Hãy click để bắt đầu."
          );
        });
      }
    };

    // Phát nhạc sau lần click đầu tiên
    window.addEventListener("click", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/mynhac.mp3" loop />;
};

export default MusicPlayer;
