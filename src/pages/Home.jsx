import React from "react";

import GraphicCard from "../components/GraphicCard";
//import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page.</p>

            <div className="card-container">
                <div className="px-4 py-5 my-5 text-center">
                    <GraphicCard />
                </div>
                {/* <VideoPlayer /> */}
            </div>
        </div>
    );
}
