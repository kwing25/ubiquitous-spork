import React, { useEffect, useRef} from "react";
// import axios from "axios";
// import MuxPlayer from '@mux/mux-player-react';

function GraphicCard() {


    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <div>
            <h1 className="text-2xl bold">Example Video Player Mux</h1>


            <h1 className="italic">Autoplay example</h1>
            <div>
                <video
                    style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                    ref={videoEl}
                />
            </div>

        </div>

    );
};

export default GraphicCard;