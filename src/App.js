import './App.css';
import {Parallax} from 'react-parallax';
import {AppBar, Hidden, Tab, Tabs, Typography} from "@material-ui/core";
import React, {useEffect} from 'react';
import VideoContent from "./components/VideoContent";
import Fade from '@material-ui/core/Fade';
import RevealFade from 'react-reveal/Fade';
import BrandIcon from "./components/BrandIcon";

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-10%,-25%)"
};
const saraImage =
    "https://images.squarespace-cdn.com/content/v1/525204fde4b06a49dee7598a/1399656910449-CJWLXWDUXD4NT3ZKWKI7/ke17ZwdGBToddI8pDm48kNvRe6fowEbDGWYpl5s9BDN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm1f-vdiIa_Zt-ECATmVWrqzBNrKObOgxNP9LbpfAUyy-rvgFA55P8Xh5orIk9P3Pg/image-asset.png";

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
        fontFamily: 'inherit',
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
                        <h1 style={{fontFamily: 'inherit'}}>
                            SJ Colgin
                        </h1>
                    </RevealFade>
                </div>
            </div>
            <AppBar position="sticky" color={'default'} style={{flex: '0 1', flexDirection: 'row', background: 'white'}}>
                <Hidden smDown>
                    <div style={{padding: 5}}>
                        <Typography variant={"h4"}
                                    style={{
                                        fontSize: '2rem',
                                    }}>
                            SJ COLGIN
                        </Typography>
                        <Typography variant={"h6"}
                                    style={{
                                        fontSize: '1rem',
                                        textAlign: 'right',
                                    }}>
                            art director
                        </Typography>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <Typography variant={"h4"}
                                style={{
                                    padding: '5px',
                                    fontFamily: 'inherit',
                                    fontSize: '2rem'
                                }}>
                        SJ
                    </Typography>
                </Hidden>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <LinkTab label="Home" href="/about" {...a11yProps(0)} />
                    <LinkTab label="About" href="/work" {...a11yProps(1)} disabled/>
                </Tabs>
            </AppBar>
            <Parallax bgImage={saraImage} strength={500}>
                <div style={{height: '65vh', paddingTop: 50}}>
                    <div style={insideStyles}>
                        <h3>
                            SJ COLGIN IS A DESIGNER, A UNION TV ART DIRECTOR, AND A PRODUCTION DESIGNER. HER BACKGROUND
                            IS IN PHOTOGRAPHY, DECOR, STYLING, PROPS, DRAWING, AND STAINED-GLASS DESIGN.
                        </h3>

                        <h4>
                            THIS WEBSITE IS A COLLECTION OF WORK ALL SERVICED BY ART DIRECTOR SJ COLGIN
                        </h4>
                    </div>
                </div>
            </Parallax>
            {!textIn ?
                <div style={{display: 'flex', flexWrap: "wrap", width: '100vw', padding: '1rem'}}>
                    <BrandIcon
                        img={'https://uc2e8aefcf2e2019089f7cd26761.previews.dropboxusercontent.com/p/thumb/ABKSrslUq9rgxoGR9hMCEKdq2Vr_UedvqP4WCiQMVkIKeQxHEguyNAprb9gRQmsQreFdmggzhXFcswAm8swJgbx2kw6ZL9ztl-Uy6uMfEdehf8eX0FTsJcs1Pt7_5WmiV9bK5ouNC-KTaeddpy4n7O8094MeAzk8UClT4ZUb4_t4s-Un6TTbxPf0DJGdMFM2xREGz9cRamdjXQYMNQ3W93ZEGXKur-svcofXd4p7I6lts-h9oTleWCewG2zYhe7yx1ZbiEBTR7GIbLraEDs1vY7Yv-8tITTAr9fGftrocojKZgbVj-l_4E_TtCbhn7WC3XKAXGM7WSPY5XxeKNO5umnjq4B-ZiNpphxWGdS7Mt8-dA/p.jpeg?fv_content=true&size_mode=5'}
                        link={'showtime'}/>
                    <BrandIcon
                        img={'https://uc5129b6d201ba1dc82c7bcad7c5.previews.dropboxusercontent.com/p/thumb/ABKAgkSnVMyRshGY954tE1q8pQ52Q0poBRxaaSEgUdmehm3i4nj0Y-fgCS0lBuxUSm1rvMzDOHpGR3WdUq-t9rWcGY5tyJtsEHu5ZQRvH-5R1EfwW9xHoN9wuH5NC0jnpfJ4t4NAtr6bW7ibf0ascq7u1CEGKbyJijdiHFSYGKEDy8RhmwJIT-od6Eo6K9VoBSupkLzw5kHi5qEt3_pKzpsMSLyvsiJAIXlCqBPmHTHM39Sc-QJwOnQ41Of6qYt5NC-uVVlIeBO52MiAvt3on5jQtKc2JBKgfGSB6pjj2kjACHeFF85IaTxXkeZnk7r2Ua_5nWoNUhGG6zkulXvgWN49bRr9nMxqxt98sK8laE1Ojw/p.png?fv_content=true&size_mode=5'}
                        link={'goldenGlobes'}/>
                    <BrandIcon
                        img={'https://uc0998a89e7e71fc05524d47a83d.previews.dropboxusercontent.com/p/thumb/ABIte6is0ZjHrmjMMOuwbAEc9dMaBXI_WxdFb6fVlCi_DxABsTgEWCY_JA795U2lqrfpTuP9ICtbooePur0gSBGn257E6mtWCfnEl-IaoNSZxnZO1fJ2E6lAxxgcYGvunSSuAOCpwhqN0sGEzk2fAlj5-lTqDRzDOR7hpDcaKB_8aE0_VdtCSSJl3Aw-2C5Cu5jHnLAyUQPiALWWF75TmozIBWbyJjrYfV7QzwKYxu2iLpnwy1ZiOPKAb3MgSlVNyDbFkb1IDuJd6rXoIGEslDq9ilKU5t6PN3joS14VBPddbUVv7iY-cUqW-gpns49QHTxZykLOhqDs4lUekqlYo3FwlALG8x1rrJ9KwBoph5U5QQ/p.png?fv_content=true&size_mode=5'}
                        link={'ellen'}/>
                    <BrandIcon
                        img={'https://uc7b19d3783d59d1f5bab05d2428.previews.dropboxusercontent.com/p/thumb/ABLo04GD8z3K1_FZaSerWNfnKBQhxoUwT4E-hSIUkclcU5j8wWxPLGlx47-6f1IqUzKlaek6wtxbrs9QLWadVIAq6pgr1bAEiAIXhzj-cvil_munbyHOZXzEsKFfk88fDwooBWfRP0lQPDLDy5OfsVrHg6aZUrKuLMIsSj-Tf1-5eN2QQJbyVMz2xp70C9XiLxliS5NGRgwr2lbD-88g4S7NGCHw8apO8GYm0zcUpbKFXNnJq8OFuCY_1nrDukE6_331Cq5q3TtMM6wHkArn8pzrWewtJE0IecAubo9IZp1EzN-xTgqa7jA5l3T-AwakDz7rFrWeWP6-hwQcNYw8nHJdB-zs7fOqEE1Ktt5Zx6OXhw/p.jpeg?fv_content=true&size_mode=5'}
                        link={'bachelorette'}/>
                    <BrandIcon
                        img={'https://uc5636ef9494232e4af8ece09cee.previews.dropboxusercontent.com/p/thumb/ABKv2vlERm76Sd7xgRHqSnVTYAYMJfguNxJsFBp8AJTt5a7IBQszdldckwhDVBL-QjsDEJvWhEUxNJJ2Wbp_WSB3EBhHnCCoFkO-1eGb97zee264IlUiqYwgeyLQ9SBNYoPHdE5lJsMq-08gsBc4xy98xbu76EkSFsv-_0ayHFPzec7_Igec2uCtAJRbXoLPubJ-hxfg7Mt0azFrcbIvSkVOmKGmkuwPpbnOMtqTK3XCB8hECEORqNhQOZnDAIZSl7RGRzSCrJeKLzupGOBTlzLJ-SxLo_gPyUdYE-cng8zxJGQY-t0Z9eOLeWBgVyU0v4fzQijhMqIBC905NH5BGOv4feK2tQZ3oGttqoWciDJ02g/p.png?fv_content=true&size_mode=5'}
                        link={'nbc'}/>
                    <BrandIcon
                        img={'https://uc873605eee74db49165d5d8e0bc.previews.dropboxusercontent.com/p/thumb/ABIQouI_DG24N2rvfkRPm4PYP5kEB0nzSybpwVqulTMVB97VHi0lO3qgr0kRpeZa4_CRsU--2qrZTjqDyfq37i2vExuFTkSRXD1Y_83L3kqm1QaQoSWBRLUPGQ1RaA7ChuRTXOa6GDQfrIbh0br74OJGXZl7hbTlJE2CH4xth1i0c5CqEeCT7ilKosVG6iXgwRwLHD86yhAB6MjggzDL6BDPU_XoxTwvJGXhhwDdNSJFeqRy4EpGIDcXZvncl5725HeONqAfiaCmbji-LM62L9F4ROM0qnnTOYFVoW5VmHjJdQ9UKoPxn84yS9aIa1tv5rYcIVFGMCQziXbJAV9ngpHFi6rL9caotsfkd8cPLsuOuA/p.png?fv_content=true&size_mode=5'}
                        link={'entertainment-weekly'}/>
                    <BrandIcon
                        img={'https://uce93141ee1efa77f042d5ec67ad.previews.dropboxusercontent.com/p/thumb/ABLAQoX3jHnaV18q3Gc3QlyW7oGPttrAEZs0WpY5umLzDn3iC4B4azJsMrOsYBHTI-S3kEW-i5qXhTib4h3aYs2IvDzv1yDejpo-5Vwp4e0VPGzoGa9ElsF2WztQ91s0yv8gHdg0Vz4FAOXwa2LXhLZQCd3MRS5SH5wOq43Orr09JILDuw7avmgkd1imxwtWetu-8Z5d1vTfW9jZsWKVLOnYN1o4tJSu1Gfuk17_X3b0tZVwZPvO-aHFJMgKHYM0qsWkTssoazS3Cs_dnTbOxl92g_9gplKUR2dVBHg3O01uPBHdXCsgy7iUQwhIgDrhsAYLbvcn_2IynvI2rITw8vBKTEveZ1AXl2cC00-zryAx7A/p.png?fv_content=true&size_mode=5'}
                        link={'oscars'}/>
                    <BrandIcon
                        img={'https://uc7756d3c9e02d1c56580db0b631.previews.dropboxusercontent.com/p/thumb/ABJFKQTtTGjJlaNL1hP6gjXxBcFeid1HpXSwjL2YZ_o3Is4lmq-FN2VNbs-0K7IVH85mtH23o75taNmx95hq69OnN4vp7yU1VKUOHCrOCwNbhIrl4S_yowx3XZbr5mNCqVe1PvxRnSWPSRoXZ_MIVCfepXYCdNqRUuy8vkeDfoptKnKaexVt6WjVeV7GI625i-I9QvDx34C6hONJoID4uo6DFz7J27y9dP-fnE0sybErET2K09GHGkAMj0MYdetrapMgANH6nxHMeDjB3XuQQJAnP21XM2XJREzIlF1ahp5uV6KnEGUpHy8tPrXHZHwJxcV7lJJbzvPF70Xn0tC9ikBb_eqSmAPwlP4X1XvP-qy0VA/p.jpeg?fv_content=true&size_mode=5'}
                        link={'best-baker-in-america'}/>
                    <BrandIcon
                        img={'https://uc2e8aefcf2e2019089f7cd26761.previews.dropboxusercontent.com/p/thumb/ABKSrslUq9rgxoGR9hMCEKdq2Vr_UedvqP4WCiQMVkIKeQxHEguyNAprb9gRQmsQreFdmggzhXFcswAm8swJgbx2kw6ZL9ztl-Uy6uMfEdehf8eX0FTsJcs1Pt7_5WmiV9bK5ouNC-KTaeddpy4n7O8094MeAzk8UClT4ZUb4_t4s-Un6TTbxPf0DJGdMFM2xREGz9cRamdjXQYMNQ3W93ZEGXKur-svcofXd4p7I6lts-h9oTleWCewG2zYhe7yx1ZbiEBTR7GIbLraEDs1vY7Yv-8tITTAr9fGftrocojKZgbVj-l_4E_TtCbhn7WC3XKAXGM7WSPY5XxeKNO5umnjq4B-ZiNpphxWGdS7Mt8-dA/p.jpeg?fv_content=true&size_mode=5'}
                        link={'showtime'}/>
                    <BrandIcon
                        img={'https://uc5129b6d201ba1dc82c7bcad7c5.previews.dropboxusercontent.com/p/thumb/ABKAgkSnVMyRshGY954tE1q8pQ52Q0poBRxaaSEgUdmehm3i4nj0Y-fgCS0lBuxUSm1rvMzDOHpGR3WdUq-t9rWcGY5tyJtsEHu5ZQRvH-5R1EfwW9xHoN9wuH5NC0jnpfJ4t4NAtr6bW7ibf0ascq7u1CEGKbyJijdiHFSYGKEDy8RhmwJIT-od6Eo6K9VoBSupkLzw5kHi5qEt3_pKzpsMSLyvsiJAIXlCqBPmHTHM39Sc-QJwOnQ41Of6qYt5NC-uVVlIeBO52MiAvt3on5jQtKc2JBKgfGSB6pjj2kjACHeFF85IaTxXkeZnk7r2Ua_5nWoNUhGG6zkulXvgWN49bRr9nMxqxt98sK8laE1Ojw/p.png?fv_content=true&size_mode=5'}
                        link={'goldenGlobes'}/>
                    <BrandIcon
                        img={'https://uc0998a89e7e71fc05524d47a83d.previews.dropboxusercontent.com/p/thumb/ABIte6is0ZjHrmjMMOuwbAEc9dMaBXI_WxdFb6fVlCi_DxABsTgEWCY_JA795U2lqrfpTuP9ICtbooePur0gSBGn257E6mtWCfnEl-IaoNSZxnZO1fJ2E6lAxxgcYGvunSSuAOCpwhqN0sGEzk2fAlj5-lTqDRzDOR7hpDcaKB_8aE0_VdtCSSJl3Aw-2C5Cu5jHnLAyUQPiALWWF75TmozIBWbyJjrYfV7QzwKYxu2iLpnwy1ZiOPKAb3MgSlVNyDbFkb1IDuJd6rXoIGEslDq9ilKU5t6PN3joS14VBPddbUVv7iY-cUqW-gpns49QHTxZykLOhqDs4lUekqlYo3FwlALG8x1rrJ9KwBoph5U5QQ/p.png?fv_content=true&size_mode=5'}
                        link={'ellen'}/>
                    <BrandIcon
                        img={'https://uc7b19d3783d59d1f5bab05d2428.previews.dropboxusercontent.com/p/thumb/ABLo04GD8z3K1_FZaSerWNfnKBQhxoUwT4E-hSIUkclcU5j8wWxPLGlx47-6f1IqUzKlaek6wtxbrs9QLWadVIAq6pgr1bAEiAIXhzj-cvil_munbyHOZXzEsKFfk88fDwooBWfRP0lQPDLDy5OfsVrHg6aZUrKuLMIsSj-Tf1-5eN2QQJbyVMz2xp70C9XiLxliS5NGRgwr2lbD-88g4S7NGCHw8apO8GYm0zcUpbKFXNnJq8OFuCY_1nrDukE6_331Cq5q3TtMM6wHkArn8pzrWewtJE0IecAubo9IZp1EzN-xTgqa7jA5l3T-AwakDz7rFrWeWP6-hwQcNYw8nHJdB-zs7fOqEE1Ktt5Zx6OXhw/p.jpeg?fv_content=true&size_mode=5'}
                        link={'bachelorette'}/>
                    <BrandIcon
                        img={'https://uc5636ef9494232e4af8ece09cee.previews.dropboxusercontent.com/p/thumb/ABKv2vlERm76Sd7xgRHqSnVTYAYMJfguNxJsFBp8AJTt5a7IBQszdldckwhDVBL-QjsDEJvWhEUxNJJ2Wbp_WSB3EBhHnCCoFkO-1eGb97zee264IlUiqYwgeyLQ9SBNYoPHdE5lJsMq-08gsBc4xy98xbu76EkSFsv-_0ayHFPzec7_Igec2uCtAJRbXoLPubJ-hxfg7Mt0azFrcbIvSkVOmKGmkuwPpbnOMtqTK3XCB8hECEORqNhQOZnDAIZSl7RGRzSCrJeKLzupGOBTlzLJ-SxLo_gPyUdYE-cng8zxJGQY-t0Z9eOLeWBgVyU0v4fzQijhMqIBC905NH5BGOv4feK2tQZ3oGttqoWciDJ02g/p.png?fv_content=true&size_mode=5'}
                        link={'nbc'}/>
                    <BrandIcon
                        img={'https://uc873605eee74db49165d5d8e0bc.previews.dropboxusercontent.com/p/thumb/ABIQouI_DG24N2rvfkRPm4PYP5kEB0nzSybpwVqulTMVB97VHi0lO3qgr0kRpeZa4_CRsU--2qrZTjqDyfq37i2vExuFTkSRXD1Y_83L3kqm1QaQoSWBRLUPGQ1RaA7ChuRTXOa6GDQfrIbh0br74OJGXZl7hbTlJE2CH4xth1i0c5CqEeCT7ilKosVG6iXgwRwLHD86yhAB6MjggzDL6BDPU_XoxTwvJGXhhwDdNSJFeqRy4EpGIDcXZvncl5725HeONqAfiaCmbji-LM62L9F4ROM0qnnTOYFVoW5VmHjJdQ9UKoPxn84yS9aIa1tv5rYcIVFGMCQziXbJAV9ngpHFi6rL9caotsfkd8cPLsuOuA/p.png?fv_content=true&size_mode=5'}
                        link={'entertainment-weekly'}/>
                    <BrandIcon
                        img={'https://uce93141ee1efa77f042d5ec67ad.previews.dropboxusercontent.com/p/thumb/ABLAQoX3jHnaV18q3Gc3QlyW7oGPttrAEZs0WpY5umLzDn3iC4B4azJsMrOsYBHTI-S3kEW-i5qXhTib4h3aYs2IvDzv1yDejpo-5Vwp4e0VPGzoGa9ElsF2WztQ91s0yv8gHdg0Vz4FAOXwa2LXhLZQCd3MRS5SH5wOq43Orr09JILDuw7avmgkd1imxwtWetu-8Z5d1vTfW9jZsWKVLOnYN1o4tJSu1Gfuk17_X3b0tZVwZPvO-aHFJMgKHYM0qsWkTssoazS3Cs_dnTbOxl92g_9gplKUR2dVBHg3O01uPBHdXCsgy7iUQwhIgDrhsAYLbvcn_2IynvI2rITw8vBKTEveZ1AXl2cC00-zryAx7A/p.png?fv_content=true&size_mode=5'}
                        link={'oscars'}/>
                    <BrandIcon
                        img={'https://uc7756d3c9e02d1c56580db0b631.previews.dropboxusercontent.com/p/thumb/ABJFKQTtTGjJlaNL1hP6gjXxBcFeid1HpXSwjL2YZ_o3Is4lmq-FN2VNbs-0K7IVH85mtH23o75taNmx95hq69OnN4vp7yU1VKUOHCrOCwNbhIrl4S_yowx3XZbr5mNCqVe1PvxRnSWPSRoXZ_MIVCfepXYCdNqRUuy8vkeDfoptKnKaexVt6WjVeV7GI625i-I9QvDx34C6hONJoID4uo6DFz7J27y9dP-fnE0sybErET2K09GHGkAMj0MYdetrapMgANH6nxHMeDjB3XuQQJAnP21XM2XJREzIlF1ahp5uV6KnEGUpHy8tPrXHZHwJxcV7lJJbzvPF70Xn0tC9ikBb_eqSmAPwlP4X1XvP-qy0VA/p.jpeg?fv_content=true&size_mode=5'}
                        link={'best-baker-in-america'}/>
                </div>
                : ''}
        </div>
    );
}

export default App;
