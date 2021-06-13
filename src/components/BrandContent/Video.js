import ReactPlayer from "react-player";
import React from "react";

export default function VideoSection({videoLink}) {

    return (
        <div style={{overflow: 'scroll', flex: 1, marginTop: 5}}>
            <ReactPlayer url={videoLink} controls width={'100%'}/>
        </div>
    )
}