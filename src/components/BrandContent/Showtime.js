import Content from "./Content";
import React from "react";

export default function Showtime() {
    const networkImg = 'https://ucce8949a4874fb6e637968fb5cc.previews.dropboxusercontent.com/p/thumb/ABO8dN-Y51AGhS_sWKYNdpdLgwZo6n4Yd2ynhYTrHvFVsbaNlimo8XvwUVjYMrxGf2ZNltakxc8Okw8gf-3AsyNd6rWLxi4XSiMg5bOXg5aivjYuEk4c8IPzBJZ-pKNIbVMu38LBpq7UG3xL73dTQpcfHXgm2VPfzxURfaiNGNAqu9MrN8tvx2424s-CIKPW_FNuzX1Cc8zi9vejTR18YTZX2Tp10NE7wUe2tS3T0zBbYa8fUa6ZVBbgIM2sVWEIs9xNM_9lCStge0g8PMPxolXrY4xEmO9_gj-VBTudkwM8cFQmJh9lQ696dykEf1aHjlZmcoOJUJB-PYSPeLh7RalBDUI6dstBcRjq2U6PWFDKzg/p.jpeg?fv_content=true&size_mode=5'
    const role = 'Art Director'
    const showName = 'Showtime'
    const videoLink = 'https://www.youtube.com/watch?v=7sB8K-vUHTo'

    return (
        <Content videoLink={videoLink} role={role} networkImg={networkImg} showName={showName}/>
    )
}