import {Paper} from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import {useState} from "react";
import ModalVideo from 'react-modal-video'
import React from 'react'
import 'react-modal-video/scss/modal-video.scss'

export default function VideoContent({img, text, youtubeVideoId}) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div style={{flex: '.5 1', margin: 10, zIndex: "auto", minWidth: '40%', cursor: 'pointer'}}>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={youtubeVideoId}
                        onClose={() => setOpen(false)}/>
            <Fade bottom>
                <Paper variant="elevation" elevation={20}>
                    <div onClick={() => setOpen(true)}
                         style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={img} alt={''} style={{objectFit: 'scale-down', width: '50%'}}/>
                        {text}
                    </div>
                </Paper>
            </Fade>
        </div>
    )
}