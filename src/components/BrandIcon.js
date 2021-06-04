import React from "react";

export default function BrandIcon({img, link}) {

    return (
        <div style={{width: 150, height: 150, padding: 10}}>
            <img src={img} alt={''} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
        </div>
    )
}