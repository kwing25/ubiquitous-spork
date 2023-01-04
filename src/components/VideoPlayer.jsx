import React, { useEffect, useRef } from 'react';
// import mux from 'mux-embed';
// import MuxPlayer from "@mux/mux-player-react";
import MuxVideo from '@mux/mux-video-react';

export default function VideoPlayer() {

    // const MuxVideo = require('@mux/mux-video-react');
    // const videoRef = useRef(null);

    // useEffect(() => {
    //     if (videoRef.current) {
    //         const initTime = Date.now();

    //         mux.monitor(videoRef.current, {
    //             debug: false,
    //             data: {
    //                 env_key: 'ENV_KEY', // required
    //                 // Metadata fields
    //                 player_name: 'Main Player', // any arbitrary string you want to use to identify this player
    //                 player_init_time: initTime,
    //                 // ...
    //             }
    //         });
    //     }
    // }, [videoRef]);

    return (
        <div>

            {/* <mux-player stream-type="on-demand" playback-id="sVioQ5sdfJhbVpaITC00RgLCiYd3Z5ORJ00ohyuhcuYnE" metadata-video-title="Test video title" metadata-viewer-user-id="user-id-007" /> */}

            {/* <video
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="https://stream.mux.com/UJXJuPBQbMFytGSeb01nagmPItV1VoVpJCXqb2g7502hM0/medium.mp4"
                ref={videoRef}
            /> */}
            {/* <MuxPlayer
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                streamType="on-demand"
                playbackId="https://stream.mux.com/sVioQ5sdfJhbVpaITC00RgLCiYd3Z5ORJ00ohyuhcuYnE.m3u8"
                metadata={{
                    video_id: "video-id-54321",
                    video_title: "Test video title",
                    viewer_user_id: "user-id-007",
                }}
            /> */}

            <div>
                <h1>Simple MuxVideo Example</h1>
                <MuxVideo
                    style={{ height: '100%', maxWidth: '100%' }}
                    playbackId="dTYC1A2qxZb8MTviIsIbvPNRDU4E5My3XZNybENQBoE"
                    metadata={{
                        video_id: 'video-id-123456',
                        video_title: 'Super Interesting Video',
                        viewer_user_id: 'user-id-bc-789',
                    }}
                    streamType="on-demand"
                    controls
                    autoPlay
                    muted
                />
            </div>
        </div>
    );
}