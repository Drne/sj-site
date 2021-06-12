import {Divider, Hidden, Typography} from "@material-ui/core";
import React from "react";
import ReactPlayer from 'react-player/vimeo'

export default function AccessHollywoodContent() {
    const nbcImg = 'https://uc693c497a1793f3764b859ece50.previews.dropboxusercontent.com/p/thumb/ABPYtBi6ejQjWGG_0MFQowQpGby6b1neFTGScLaYGj9hehN2Ty2FXfNHt1FrJ47ujEnBnJADEFNB1rDJnYv1iDVBxO11mGC461X06ctiRWY-SYzwKRXONk5mVehi9h-Um-TrPxV9EgyJD22uKIEkgSQIkTqKHkGGT5DnDWSLQ4Lr_sInCwo6kxit0OPJhufa1uBo13T0EdDIuQU-BOek2Ychwpw5HxM5iCzeL-7YjcXeVWlX45WuHxiUIWQ5ISZljTuOQk3OVRy2sjEKc6hKxXO7JgnWnBn-Xn5KL1ZqDHiHADOvK9-fLaE5oKRgfsFSQiBIUPYPj_dqzxxQPAMNP87uPW7zCg4HESlFjAtfeQi0Og/p.jpeg?size=2048x1536&size_mode=3'
    const accessHollywoodImg = 'https://uc869468d6c79cc0c321033ada62.previews.dropboxusercontent.com/p/thumb/ABOYZAU1D9UoGVbaZSozyEpJOeDvdjAZexNK6O7Nnn-2wY1yIwmG_dAFjiZzykzBlFz3FATxp59IS0S5--Xdy00OPOWp598xbaoFT8PiGPrZTig0IxEVZY-ulOyNvARtHmjwo1SlPF746TNCeTVOhmke7pkC47NIhYf-puzHHNg2q2o8_U0wgPuNlzkFtu_4LjKRFcRxpIr58rCVgPktRJBi4Nzsut04L_uE-3_S7ty-GzKrQaup3mpTuaD__8v9vRwgAfJdxb8gEwF76f6l-v6_xrcT3vM69zybJVksbd9tL_exNF0fykpC0FlTlTs2kCdtTPxt1iJjdFUh3Pz3uzYda8hRMwZZJblyd38BEW4IxQ/p.jpeg?fv_content=true&size_mode=5'
    return (
        <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <Hidden smDown>
            <div style={{width: 150, height: 150, margin: 10}}>
                <img src={nbcImg} alt={''} style={{height: '100%', width: '100%'}}/>
                <img src={accessHollywoodImg} alt={''} style={{height: '100%', width: '100%'}}/>
                <Typography>
                    Role: Art Director
                </Typography>
            </div>
            </Hidden>
            <Divider orientation={'vertical'} flexItem/>
            <div style={{overflow: 'scroll', flex: 1}}>
                <ReactPlayer url={'https://player.vimeo.com/video/168126878'} controls style={{}} width={'100%'}/>
            </div>
        </div>
    )
}