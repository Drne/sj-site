import React from "react";
import {Divider, Hidden, Typography} from "@material-ui/core";
import Video from "./Video"
import Images from "./Images";
export default function Content({images, videoLink, networkImg, showImg, role, showName, imagesTitle}) {

    return (
        <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <Hidden smDown>
                <div style={{width: 150, height: '100%', margin: 10}}>
                    {networkImg && <img src={networkImg} alt={''} style={{height: 150, width: '100%'}}/>}
                    {showImg && <img src={showImg} alt={''} style={{height: 150, width: '100%'}}/>}
                    {role && <Typography>
                        Role: {role}
                    </Typography> }
                </div>
            </Hidden>
            <Divider orientation={'vertical'} flexItem/>
            <div style={{overflow: 'scroll', flex: 1}}>
                <div>
                    <Typography variant={'h2'}>
                        {showName}
                    </Typography>
                    <Divider />
                </div>

                {videoLink && <Video videoLink={videoLink}/> }
                {images && <Images images={images} title={imagesTitle} />}
            </div>
        </div>
    )
}