import React from "react";

import GraphicCard from "../components/GraphicCard";

export default function Home() {
    return (
        <div>
            <div className="card-container">
                <div className="px-4 py-5 my-5 text-center">
                    <GraphicCard />
                </div> 
            </div>
        </div>
    );
}
