import './App.css';
import {Parallax} from 'react-parallax';
import {AppBar, Hidden, Tab, Tabs, Typography} from "@material-ui/core";
import React, {useEffect} from 'react';
import VideoContent from "./components/VideoContent";
import Fade from '@material-ui/core/Fade';
import RevealFade from 'react-reveal/Fade';

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
const saraImage =
    "https://images.squarespace-cdn.com/content/v1/525204fde4b06a49dee7598a/1399656910449-CJWLXWDUXD4NT3ZKWKI7/ke17ZwdGBToddI8pDm48kNvRe6fowEbDGWYpl5s9BDN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm1f-vdiIa_Zt-ECATmVWrqzBNrKObOgxNP9LbpfAUyy-rvgFA55P8Xh5orIk9P3Pg/image-asset.png";

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

function App() {
    const [value, setValue] = React.useState(0);
    const [onOpen, setOnOpen] = React.useState(true)
    const [textIn, textOut] = React.useState(false)

    useEffect(() => {
        setTimeout(() => textOut(true), 500)
        setTimeout(() => textOut(false), 2500)
    }, [])

    useEffect(() => {
        if (onOpen) {
            setTimeout(() => setOnOpen(false), 2000)
        }
    }, [onOpen])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App">
            <div style={{position: 'absolute', zIndex: 999999}}>
                <Fade in={onOpen} timeout={{appear: 1, exit: 5000}} unmountOnExit>
                    <div
                        style={{
                            height: '100vh',
                            width: '100vw',
                            background: 'white',
                            position: 'absolute',
                        }}/>
                </Fade>
                <div style={{
                    'position': 'absolute',
                    top: "50vh",
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    width: 300
                }}>
                    <RevealFade opposite cascade when={textIn} bottom>
                        <h1>
                            Sara Jane
                        </h1>
                    </RevealFade>
                </div>
            </div>
            <div>
                <AppBar position="sticky" color={'default'}>
                    <Hidden smDown>
                        <Typography variant={"h4"}
                                    style={{
                                        color: 'black',
                                        position: "absolute",
                                        padding: '5px',
                                        fontFamily: ['Leckerli One', 'cursive'],
                                        fontSize: '2rem'
                                    }}>
                            Sara Jane
                        </Typography>
                    </Hidden>
                    <Hidden mdUp>
                        <Typography variant={"h4"}
                                    style={{
                                        position: "absolute",
                                        padding: '5px',
                                        fontFamily: ['Leckerli One', 'cursive'],
                                        fontSize: '2rem'
                                    }}>
                            SJ
                        </Typography>
                    </Hidden>
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="About" href="/about" {...a11yProps(0)} />
                        <LinkTab label="Work" href="/work" {...a11yProps(1)} disabled/>
                        <LinkTab label="Contact" href="/contact" {...a11yProps(2)} disabled/>
                    </Tabs>
                </AppBar>
                <Parallax bgImage={saraImage} strength={500}>
                    <div style={{height: '65vh', paddingTop: 50}}>
                        <div style={insideStyles}>She's kinda great</div>
                    </div>
                </Parallax>
                {!textIn ?
                    <div style={{display: 'flex', flexWrap: "wrap", width: '100vw'}}>
                        <VideoContent img="https://pngimg.com/uploads/dog/dog_PNG50348.png" youtubeVideoId="uzkD5SeuwzM"
                                      text={"This is a text description of whatever has been put here! It can be anything!"}/>
                        <VideoContent img="https://pngimg.com/uploads/dog/dog_PNG50348.png" youtubeVideoId="uzkD5SeuwzM"
                                      text={"This is a text description of whatever has been put here! It can be anything!"}/>
                        <VideoContent img="https://pngimg.com/uploads/dog/dog_PNG50348.png" youtubeVideoId="uzkD5SeuwzM"
                                      text={"This is a text description of whatever has been put here! It can be anything!"}/>
                        <VideoContent img="https://pngimg.com/uploads/dog/dog_PNG50348.png" youtubeVideoId="uzkD5SeuwzM"
                                      text={"This is a text description of whatever has been put here! It can be anything!"}/>
                        <VideoContent img="https://pngimg.com/uploads/dog/dog_PNG50348.png" youtubeVideoId="uzkD5SeuwzM"
                                      text={"This is a text description of whatever has been put here! It can be anything!"}/>
                        <VideoContent img="https://pngimg.com/uploads/dog/dog_PNG50348.png" youtubeVideoId="uzkD5SeuwzM"
                                      text={"This is a text description of whatever has been put here! It can be anything!"}/>
                    </div>
                    : ''}
            </div>
        </div>
    );
}

export default App;
