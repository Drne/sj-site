import Content from "./Content";
import React from "react";

export default function HBO() {
    const networkImg = 'https://uc38d5470f5d366257ccf6cc3717.previews.dropboxusercontent.com/p/thumb/ABOSaYPkkj1Juj4hoLzMLb4NTCOhcnc0qYsHYut6tVP_-zRNIR9Xgjexyve33pDfrXKzFpZXM7gRFpMW2gW3n3voqWDibjYwWGhnEF4bUifTyaTYri0zrATQT50-FOnm9pLf9fwNuA36dCnuRkd7P1M5g7cERkGbScUtS5KtmmYxrfmDYY1Z5tJKjAi-NdjYryfhW3fcAdPuIx_ZN_q25AjuLt5gqRzqTn90dAQIarhjk8MU2cgXDQ585hsVkv5u00rkWRRzcp2m5BaF5FNthFuoOKSj09ZJfVaLSvIY2ajtm92MbK7ccWxAaxy77weaggwfRc6N7rMwfABdd1D-pGziRgVlRpX5P_3Gi6TlmlIsrg/p.jpeg?fv_content=true&size_mode=5'
    const images = ["https://i.ibb.co/k3BcTZK/hb01.jpg", "https://i.ibb.co/jLmnCdT/hbo2.jpg", "https://i.ibb.co/31FMqsY/hbo3.jpg", "https://i.ibb.co/NjKgNVP/hbo4.jpg", "https://i.ibb.co/Qv24534/hbo5.jpg"]
    const role = 'Art Director'
    const showName = 'HBO'

    return (
        <Content images={images} role={role} networkImg={networkImg} showName={showName} imagesTitle='Drone Study'/>
    )
}