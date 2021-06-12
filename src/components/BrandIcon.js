import React, {useState} from "react";
import {IconButton, Modal, Paper} from "@material-ui/core";
import RevealFade from 'react-reveal/Fade';
import CloseIcon from '@material-ui/icons/Close';

export default function BrandIcon({img, link, contents}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
        <div style={{width: 150, height: 150, padding: 10, cursor: 'pointer'}} className={'img-wrapper'} onClick={() => setIsModalOpen(true)}>
            <img src={img} alt={link} style={{objectFit: 'cover', width: '100%', height: '100%'}} className={'hover-zoom'}/>
        </div>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} style={{overflow: 'scroll', userSelect: 'none'}}>
                <RevealFade bottom style={{pointerEvents: 'none'}}>
                    <Paper style={{margin: '5%'}}>
                        <IconButton style={{float: 'right'}} onClick={() => setIsModalOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                        {contents}
                    </Paper>
                </RevealFade>
            </Modal>
        </>
    )
}