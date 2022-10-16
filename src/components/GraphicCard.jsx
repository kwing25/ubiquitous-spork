import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";

function GraphicCard() {

    const [fact, setFact] = useState("");
    const fetchFact = () => {
        fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
            .then((data) => setFact(data.fact));
    }
    const handleClick = () => {
        fetchFact()
    }
    useEffect(() => {
        fetchFact()
    }, []);

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
            <h1>GraphicCard</h1>

            <div className="card w-100 h-screen bg-slate-300 mt-3 mb-5">
                <h2>Press the button for a random cat fact!</h2>

                <button className="bg-slate-500 rounded-full p-2" onClick={() => handleClick()}>Get Cat fact</button>
                <p>{fact}</p>
            </div>

            <h1>Autoplay example</h1>
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