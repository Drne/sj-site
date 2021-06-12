import {Divider, Hidden, Typography} from "@material-ui/core";
import React, {useCallback, useState} from "react";
import ImageViewer from "react-simple-image-viewer";

export default function HomeSweetHomeContent() {
    const nbcImg = 'https://uc693c497a1793f3764b859ece50.previews.dropboxusercontent.com/p/thumb/ABPYtBi6ejQjWGG_0MFQowQpGby6b1neFTGScLaYGj9hehN2Ty2FXfNHt1FrJ47ujEnBnJADEFNB1rDJnYv1iDVBxO11mGC461X06ctiRWY-SYzwKRXONk5mVehi9h-Um-TrPxV9EgyJD22uKIEkgSQIkTqKHkGGT5DnDWSLQ4Lr_sInCwo6kxit0OPJhufa1uBo13T0EdDIuQU-BOek2Ychwpw5HxM5iCzeL-7YjcXeVWlX45WuHxiUIWQ5ISZljTuOQk3OVRy2sjEKc6hKxXO7JgnWnBn-Xn5KL1ZqDHiHADOvK9-fLaE5oKRgfsFSQiBIUPYPj_dqzxxQPAMNP87uPW7zCg4HESlFjAtfeQi0Og/p.jpeg?size=2048x1536&size_mode=3'
    const homeSweetHomeImg = 'https://uc64b804792268d31c4dc07e03f7.previews.dropboxusercontent.com/p/thumb/ABPh89QqI4UqfOpFWe8sy4E4pEwDG75ZKeNVryP3QLvB-tV-Dkj5FFu_hiMhxpmyGJp6eCoAY7llMA28OhYkAQXxydla0ms_1iSDytGx5REoi-5j2xk84Ycm1T_cJasm83I23z-nyM5uLWfK-sXZalsBsGsfwCGGgkPyt4quoF4NlK0zR90L0goUtcO2-fO72p09HXjqp4ageSQkrBhVf17qm2EOjXoYPA-SoxLkdY1cM30k8mgYtBBTLt57TAPH9_FqqXUlYoi3pOfNVdDsf6Pl91Q48JQSVlsTd7Mxw87QvCnRIKVJoYsvsVevH_exuVJidBC0Q_Pfp7PpaPGlwk5cEUeq3MQY7EC36GFLeJyY_A/p.png?fv_content=true&size_mode=5'

    const images = ["https://i.ibb.co/JcFyYpn/hsh1.png", "https://i.ibb.co/TPy7q3s/hsh2.png"]
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
        <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <Hidden smDown>
            <div style={{width: 150, height: '100%', margin: 10}}>
                <img src={nbcImg} alt={''} style={{height: 150, width: '100%'}}/>
                <img src={homeSweetHomeImg} alt={''} style={{height: 150, width: '100%'}}/>
                <Typography>
                    Role: Art Director
                </Typography>
            </div>
            </Hidden>
            <Divider orientation={'vertical'} flexItem/>
            <div style={{overflow: 'scroll'}}>
                <div>
                    <Typography variant={'h2'}>
                        Home Sweet Home
                    </Typography>

                    <Divider />
                </div>
                <div style={{marginTop: 15, width: 'fit-content'}}>
                    <Typography variant={'h4'}>
                        Concept Art
                    </Typography>

                    <Divider/>
                </div>
                <img src="https://i.ibb.co/JcFyYpn/hsh1.png" alt="hsh1" border="0" style={{width: '100%'}} onClick={() => setIsViewerOpen(true)}/>
                <img src="https://i.ibb.co/TPy7q3s/hsh2.png" alt="hsh2" border="0" style={{width: '100%'}} onClick={() => setIsViewerOpen(true)}/>
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
            </div>
        </div>
    )
}