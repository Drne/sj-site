import Content from "./Content";
import React from "react";

export default function HomeSweetHome() {
    const networkImg = 'https://uc693c497a1793f3764b859ece50.previews.dropboxusercontent.com/p/thumb/ABPYtBi6ejQjWGG_0MFQowQpGby6b1neFTGScLaYGj9hehN2Ty2FXfNHt1FrJ47ujEnBnJADEFNB1rDJnYv1iDVBxO11mGC461X06ctiRWY-SYzwKRXONk5mVehi9h-Um-TrPxV9EgyJD22uKIEkgSQIkTqKHkGGT5DnDWSLQ4Lr_sInCwo6kxit0OPJhufa1uBo13T0EdDIuQU-BOek2Ychwpw5HxM5iCzeL-7YjcXeVWlX45WuHxiUIWQ5ISZljTuOQk3OVRy2sjEKc6hKxXO7JgnWnBn-Xn5KL1ZqDHiHADOvK9-fLaE5oKRgfsFSQiBIUPYPj_dqzxxQPAMNP87uPW7zCg4HESlFjAtfeQi0Og/p.jpeg?size=2048x1536&size_mode=3'
    const showImg = 'https://uc64b804792268d31c4dc07e03f7.previews.dropboxusercontent.com/p/thumb/ABPh89QqI4UqfOpFWe8sy4E4pEwDG75ZKeNVryP3QLvB-tV-Dkj5FFu_hiMhxpmyGJp6eCoAY7llMA28OhYkAQXxydla0ms_1iSDytGx5REoi-5j2xk84Ycm1T_cJasm83I23z-nyM5uLWfK-sXZalsBsGsfwCGGgkPyt4quoF4NlK0zR90L0goUtcO2-fO72p09HXjqp4ageSQkrBhVf17qm2EOjXoYPA-SoxLkdY1cM30k8mgYtBBTLt57TAPH9_FqqXUlYoi3pOfNVdDsf6Pl91Q48JQSVlsTd7Mxw87QvCnRIKVJoYsvsVevH_exuVJidBC0Q_Pfp7PpaPGlwk5cEUeq3MQY7EC36GFLeJyY_A/p.png?fv_content=true&size_mode=5'
    const images = ["https://i.ibb.co/JcFyYpn/hsh1.png", "https://i.ibb.co/TPy7q3s/hsh2.png"]
    const role = 'Art Director'
    const showName = 'Home Sweet Home'

    return (
        <Content images={images} role={role} showImg={showImg} networkImg={networkImg} showName={showName}/>
    )
}