import {Divider, Typography} from "@material-ui/core";
import ImageViewer from "react-simple-image-viewer";
import React, {useCallback, useState} from "react";

export default function Images({images, title="Concept Art"}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            <div style={{marginTop: 15, width: 'fit-content'}}>
                <Typography variant={'h4'}>
                    {title}
                </Typography>

                <Divider/>
            </div>

            {images.map((imageLink) => (<img src={imageLink} alt="hsh1" border="0" style={{width: '100%'}} onClick={() => setIsViewerOpen(true)}/>))}
            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                />
            )}
        </>
    )
}