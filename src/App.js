import './App.css';
import {Parallax} from 'react-parallax';
import {AppBar, Hidden, Tab, Tabs, Typography} from "@material-ui/core";
import React, {useEffect} from 'react';
import Fade from '@material-ui/core/Fade';
import RevealFade from 'react-reveal/Fade';
import BrandIcon from "./components/BrandIcon";
import HomeSweetHome from "./components/BrandContent/HomeSweetHome";
import AccessHollywood from "./components/BrandContent/AccessHollywood";
import Showtime from "./components/BrandContent/Showtime";
import HBO from "./components/BrandContent/HBO";

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
                    <RevealFade bottom>
                    <BrandIcon
                        img={'https://ucce8949a4874fb6e637968fb5cc.previews.dropboxusercontent.com/p/thumb/ABO8dN-Y51AGhS_sWKYNdpdLgwZo6n4Yd2ynhYTrHvFVsbaNlimo8XvwUVjYMrxGf2ZNltakxc8Okw8gf-3AsyNd6rWLxi4XSiMg5bOXg5aivjYuEk4c8IPzBJZ-pKNIbVMu38LBpq7UG3xL73dTQpcfHXgm2VPfzxURfaiNGNAqu9MrN8tvx2424s-CIKPW_FNuzX1Cc8zi9vejTR18YTZX2Tp10NE7wUe2tS3T0zBbYa8fUa6ZVBbgIM2sVWEIs9xNM_9lCStge0g8PMPxolXrY4xEmO9_gj-VBTudkwM8cFQmJh9lQ696dykEf1aHjlZmcoOJUJB-PYSPeLh7RalBDUI6dstBcRjq2U6PWFDKzg/p.jpeg?fv_content=true&size_mode=5'}
                        link={'showtime'}
                        contents={<Showtime />}
                    />
                    <BrandIcon
                        img={'https://ucc3dbb492e8ceeacbc242016120.previews.dropboxusercontent.com/p/thumb/ABOyBVZDQNPEdRGvAFJ70sbijAj0eb8e97KWgr9-QbJ99W46mkzxYyyrQcgL_3P3EHK3yhtDhUhoKRh6ngL2WUOGxuFMSJ-tXYrFiIkaZXCiYkzRa7akcN3Zy1-mbYws_YzfG9Jl_4FdcZs5XZ6AZHCPN3kIFLL3OYts6SPMMxOGofQmhpLME0Cpd6WhMkbi3EUUq2EROpKKVqOBLgLo7TBd6i7SeuTz7trQSPfKD-kdU5HncHoR9NYmIfhhR4ftE64V2DFCYGZ7uxxtbNmorsgZDu9Rf6UXeR3dt4Cq-91-yjA_kr_IEU5lBpsgdkxAOumjYS-NwWowNHcgqiJwxXxcfuP2jxsJ7DOEsPB7V9S9NQUEcjltao08m3uRgJRolfcShqoSHVY6U74haglP4tbH/p.jpeg?fv_content=true&size_mode=5'}
                        link={'goldenGlobes'}/>
                    <BrandIcon
                        img={'https://uc8c2de0a234036c80c1af8bb535.previews.dropboxusercontent.com/p/thumb/ABPFH47p1nbGXg-VdSCLfmneEf8oaNXJFTgBieWspIHnVTjcVLGJJ9r7hlamUvqkfp83YfcwqWqN2OGPr48ITqQfMNHYOBRgdQu7px2shgUGUeAhJaS9NQ5te0t5fQJqwnUYoihF_pslGcojipsckWTTnXNPOcTlZZ_UREs4TG0ZKQvvg105GMes8F45ZfiTpeZLumn1xNOzNeDMq7yS712OrBDrEAQnxWVLLRjjmEPWQ9qTpRbZYaUEVumMff3f-WSc6dfF85d56agzs-jRhP0TOlafHjghjbwBJwiHZQna5m6QORic0ktYLOOWA4K7WAVpP-R8NcaSebB2wKsH-olRJoRxOInXrC1MWo5yw_Sf3w/p.jpeg?fv_content=true&size_mode=5'}
                        link={'ellen'}/>
                    <BrandIcon
                        img={'https://ucd9f457bade63eded874c99c6ec.previews.dropboxusercontent.com/p/thumb/ABM3iNH31vmiqh3M0E1Ik7vMh_uYuMO481PNz4AhGZmYcOfse7u84TssgfQY15cRLHTmqgKlKpNQ-gqEkKACwzq_tA-dUHb81r8IaPzeqGdDficBiEY8pTK_Lz18tQ-bLu5-UVrUV7VyNsPgpMnYX5b8gequ98X-31gFvof52W7000na2AApZ5iOIjDiNl3_4zEcYAW6a0Vsw0Bv83IhWaxOHwO4-zPeO9ZspDMB3UOOC2TeINY4Zo7bufZluytM_BDgcGXk1xIOJMSFKZyI5OGAh6x1qr5SzrqDO5dhXwmuaa1OcnbSs7Ck9QarsFJ-HXXP7AafYNRPRIkpdNIHQdNzOyUqvFlc5E3DpEo_6J7azQ/p.jpeg?size=2048x1536&size_mode=3'}
                        link={'bachelorette'}/>
                    <BrandIcon
                        img={'https://uc693c497a1793f3764b859ece50.previews.dropboxusercontent.com/p/thumb/ABPYtBi6ejQjWGG_0MFQowQpGby6b1neFTGScLaYGj9hehN2Ty2FXfNHt1FrJ47ujEnBnJADEFNB1rDJnYv1iDVBxO11mGC461X06ctiRWY-SYzwKRXONk5mVehi9h-Um-TrPxV9EgyJD22uKIEkgSQIkTqKHkGGT5DnDWSLQ4Lr_sInCwo6kxit0OPJhufa1uBo13T0EdDIuQU-BOek2Ychwpw5HxM5iCzeL-7YjcXeVWlX45WuHxiUIWQ5ISZljTuOQk3OVRy2sjEKc6hKxXO7JgnWnBn-Xn5KL1ZqDHiHADOvK9-fLaE5oKRgfsFSQiBIUPYPj_dqzxxQPAMNP87uPW7zCg4HESlFjAtfeQi0Og/p.jpeg?size=2048x1536&size_mode=3'}
                        link={'nbc'}
                    />
                    <BrandIcon
                        img={'https://ucc1e24068e926cd95e3688ab88e.previews.dropboxusercontent.com/p/thumb/ABNX0320lzbF7fe_e4k8O5XFlN8T4M2rdyUJmb0cUT2WUKE-3e8No9zpc5TCmRBiILnKyMHGd_qpRQwB02QTqVq7IQnm998NYipr5bbwmBE1EL2OunxFQoPTmGeXabv7qObvjlQcB4tmF9eBzUHH45dMzauVzT0uqdWnUZcXG2gVURY8Gx-6ieNkGPDWtwWNDMjKHaM7ioF25a_wKc4HzF31-k4tECM23pLYhDHEItFU4hOOGfp8SdIf0BbmPXxFED5d-yhv9JlMP4lfZIpk39ttABeXAWJS9k3W4HdhvJjJslutH8Hyr37Ere499Tn-cnrJSuz-JfHp4Xo0QXVep5yZqK78LYmgvPo0-sJJHmkI7g/p.jpeg?fv_content=true&size_mode=5'}
                        link={'entertainmentWeekly'}/>
                    <BrandIcon
                        img={'https://uc65c6bf7163d871ec6a1d234d70.previews.dropboxusercontent.com/p/thumb/ABMCYELbMYGt_RQnI3eIWI6GyOHo1exh58SUlQ0agOOgmR3YhIPViiIlEKIqm2U4uYXFAphAh48ALOmOYa91Gxin75imzsfbxLqUBEkf0KDQ_snYD7V29F8RPHUo21T8pVFBV_IKYJK47WGyDOhcLPi5LsOhz65tSOKXYkzmsCykH2isc_wbNDtxZiuGIvtrCWwQLZIGj4_RS_3UtO9rmZuFtKwOb5M-GF2iCjP8WEdsqDC0HjdullyRx9uLcJQmTfYeF_SWT1FRN1KjxTD7TCqGun4XsLZbEf9kB1lwXxSGdEYNqMoOJED4r9qc88HMjmBHs0sjoWFtpmKxHbxH5CS4cjnvzKmZ6XXJT2ilMNYYpQ/p.jpeg?fv_content=true&size_mode=5'}
                        link={'oscars'}/>
                    <BrandIcon
                        img={'https://ucfa1b0939d0f8f51060ae8fd5b9.previews.dropboxusercontent.com/p/thumb/ABP1GOCf64Uglip_r51g9q5DspDHLNT3x5N_0xgaz02rgsczzX30oX2bTWNspwA4yDVCEOSSGScJpG9CXlq-YdBZmxZ9OFdCM5DRcP-fCBsdmZYqBQFR6VAvXOzlPUw3KZ8guuQ6S7NWDvk_7EPFWw_2MJ2QIui8rzL0PlgmrAq1nVLRUwW57Ov1yuR-o5W4Ouc6PfW0KAgrel11QdpkrEDO2N8i5nI6d9L0IDzrDGSORoqsQmRaXTk5izseNVHl_HqW3yp6IkK4CWam0MdjF7rahh4x0-TH64pc8WVYnF2Te0lLF1dDY5hgKvG2Xy-g8OgRIg71CfsPFW4VqKai0Ba20y6JquOgBhM-PRm0EadG4g/p.jpeg?fv_content=true&size_mode=5'}
                        link={'best-baker-in-america'}/>
                    <BrandIcon
                        img={'https://ucfca472c79b5578e06289ba796f.previews.dropboxusercontent.com/p/thumb/ABMU7qQzjquQNnkJ1ObiuSf-NDN75blC6ZGfX7hSSYGNT6oC1FDzr5xCLUMU4ZrQrqvlC0eT7eJdYBB5n40Ps738pkwmK2usLLLP04AzT15vbYwV7JYI5ZrdnN16DBSj_LCeVjz8t-6LVdqXPzJUZpfXxeGDhLVGWXv9dn1ADqZMt6ROcTerbqnIfjFqdRGPDOUKvdkI7STXONCTNf7Mg2L6Xb9nDgKPiIx8YS_rHcWb4NVuZQ19lfqHP9c7939qEfdTf2oBguvR2nshzRIzsUxbPHJQfX96xuWUmXiyALfBpdIEDdABGxUI0qshaz4yIJKDzA30bHszyx0RnZPYC_XZfi5Ebm7KZxAzWew4Hyh6Tw/p.jpeg?fv_content=true&size_mode=5'}
                        link={'abc'}/>
                    <BrandIcon
                        img={'https://uc869468d6c79cc0c321033ada62.previews.dropboxusercontent.com/p/thumb/ABOYZAU1D9UoGVbaZSozyEpJOeDvdjAZexNK6O7Nnn-2wY1yIwmG_dAFjiZzykzBlFz3FATxp59IS0S5--Xdy00OPOWp598xbaoFT8PiGPrZTig0IxEVZY-ulOyNvARtHmjwo1SlPF746TNCeTVOhmke7pkC47NIhYf-puzHHNg2q2o8_U0wgPuNlzkFtu_4LjKRFcRxpIr58rCVgPktRJBi4Nzsut04L_uE-3_S7ty-GzKrQaup3mpTuaD__8v9vRwgAfJdxb8gEwF76f6l-v6_xrcT3vM69zybJVksbd9tL_exNF0fykpC0FlTlTs2kCdtTPxt1iJjdFUh3Pz3uzYda8hRMwZZJblyd38BEW4IxQ/p.jpeg?fv_content=true&size_mode=5'}
                        link={'accessHollywood'}
                        contents={<AccessHollywood />}
                    />
                    <BrandIcon
                        img={'https://uc5113d45e0a1a912f14c36c6e73.previews.dropboxusercontent.com/p/thumb/ABM2ydBMycSYItc5t9Nd2ZA7jKX2FFV9HzbZQVU2RWBDQOZKBvPTn133qRvfgt7zvvkrJUmMtTJaloBackSwQLTh4SSgNX3BmBJLA8q7F8VvtoE5bp1gv_AJz1gMBtaTLmolQjSNQESoDvD3oiqijRKVA8E_21o-DRNGvBDmP7lKaTRX2axm9TeSDKCwpo1sHEMItnO1AMjxNzqaWpnoRwP1bbRzwIgcHPX9wNeM4M-4D6QjVHQA8y3k385hnXbDRWZGZX6OqnqcPHB_hPpB92IQz3R72bUzzNo-B6aZZVkyGEoNjEGgmFfsEqY_LmJNBatv0d4cm6UOqfVTZ9Qmq4l2T5mJI3zOjx0zYPLQgNMsRA/p.png?fv_content=true&size_mode=5'}
                        link={'accessHollywoodLive'}/>
                    <BrandIcon
                        img={'https://uceded395c26de3d47a359b1754b.previews.dropboxusercontent.com/p/thumb/ABMAk4I89rjpqL3k1eiQ8UzqlDjD-dxsNMLhdOYzYZxlKOQdRfZ6HUTlDmC38fPS0S2o-5Zg_SGbH2TxOlIagjXlpO_grevaQmk0IeSPmsEj0tf2IY08Z_XX8fqlmPwGPlmDurGQmOr2MFzXFdTlPR1cApukpbTKRnp9L2h7g3idHWbmz_g67dkEf4ly_TMqFEndoSdTUPwuC3UtUddjgfWDoppm0QRHy16IBTJE9-n2dw4uJd6ML_fEER_NFA-XxMZN9nM50Uk32JzPo6dcOadhAU1Ib9irGLe-Kbr1Z0UM-FicvcQZHnfikY_6uTksHP57o3lGDJKUQJTB7WOY1Yid8Fs8utEzyFZ9ZY7np6Ae_w/p.jpeg?fv_content=true&size_mode=5'}
                        link={'bachlorPad'}/>
                    <BrandIcon
                        img={'https://ucf5edb575c1698de23ed79d3851.previews.dropboxusercontent.com/p/thumb/ABOKax-AK24K02L4zcqkY92NkwcqkwaGMvO3o1YP9QK9WmVmxQuwQ35agC7K8-BNnzAHpNpHNg2OAOOSWqDIlZ_DcEy--pZBSeGnUcqw_Xzr1OjgAPtYOnIlLgHJGt7FlP0P-PHofLnRWYrTzasIR_WBRoZUBiz3SkoB6I15-uSt_cpt3nhfjK4nv0uUiNGVenjynZUs0ZKJh5nf4bjMDgCSvXy7iN7JhuBUHxWaJgpX465kg6edQZu1BGU_QSFQK6llb21KZkEZeZijWNL4VqWK8KYE1hU_PDnbqUnFWKHorNkO1RQ04MxCF7rd3G4oEQwGSxT7PoUZCreplJUfjSheWWePehMzB_AfVaUpIuIzdA/p.jpeg?fv_content=true&size_mode=5'}
                        link={'bet'}/>
                    <BrandIcon
                        img={'https://uc90dbe3c1e651ca937ed4065875.previews.dropboxusercontent.com/p/thumb/ABN3Sm3vBhqDZPEh2WJLBLBVY9EDtxlsecdFl1Soln3gFuvACmZk29Ceyh-9WvmGLuHFOu31IeZD9toFZXvCiT1lxB4d6Zaq6tGu-G_9rrQm9jNL6E0oOQZNWLKhdnHK84BZUQ53MK2PXHDes9gW2-NCjXb_1zWY7WKCzgkODwqaRT5Qp0v1psIqVie4lYwdccyKVJI8m9B_At6CjX33S9R8pIBL693QjI8nAtDxZNMVxn82qeHMJnTYFDmkdXJMljZjJHwYCNWiiJggaZ79FvQyEpPSnjfSGnDJffd0kHIW_Y1AAe1DCDxeJHxuTW7zCQB6gCFusynlyWmedxn_a6sa6QAxb1RczjcI_bvvDp96vw/p.jpeg?fv_content=true&size_mode=5'}
                        link={'centralAve'}/>
                    <BrandIcon
                        img={'https://uc723bce8809eac94a7fd1c186d1.previews.dropboxusercontent.com/p/thumb/ABNDR6BFY-MS2TFxHFnktVWzdDBkoMdYeJu4Z9ac2wyWG4s03ex-mMbhjWWTE-uOdkGctw9yUPykcLWiFxOL1xFcujxXB9Dr52nVcsiyNox0QZtj3G9rtnoj8mlFHzK7U-ZhNVKk_1CY6kLmWVq1X_laRJZ-_8eK_2TWniQT1LFJrMC4LOhXWJVDEfUfm3VnI7OWxUrfFRN-nL1XaoG4tkuW7-Us6NU6dPguEtakOdRWicN5fV_hQ_RldAwAdcSsoRO9uFtmQSLtK_ArACFzAuIcOU5WNMw7gRrTZv8pCUd8Eht8D7V_ipftnaWsURCeScqGoH94bRuq7NXB3rtuO09y4TfmQI8s6eClIThdxKXjjg/p.jpeg?fv_content=true&size_mode=5'}
                        link={'deadline'}/>
                    <BrandIcon
                        img={'https://uc6e3f40c58ddb8eb9255a002beb.previews.dropboxusercontent.com/p/thumb/ABP7smZx7kx_W8n1IDk2Zkg7_UqzrquF5p_FDSJjoL4t0ndAvxQTMnEiw3EFufRwHoyAOVl_cZtSXdpTZjx4GjiUly5Cr8CyQkPovMffOLHJ9rGdrOzjUpoakDvUjhmi8CtLSaXQwBRej9K1Qve460GDn5ek49JOb_-ZPnFIKvFkwG10uzKZX9Z3w0o8zF3wdMj536v6xpVk9SNGkgOckTUKtNtLPms4If5seHtBL1tEMESKG7b64MN9UsPb3jxIug_rFl7G5NjMFmNohIOwvqSqJYZstFCQ0ND7Nk3xv6dbieFA9RGUQmR4orD_x6j31GrhL9tRYPKl2fAywPgWcD2KcK3hgroyeqwZ5OzHEZWNsOwxKLOlmsBZt-bPxT7g4N0C_kKuj4_4anWm1uUa-lVs/p.jpeg?size=2048x1536&size_mode=3'}
                        link={'redCarpet'}/>
                    <BrandIcon
                        img={'https://uc0388396f644afd724d28f6a91e.previews.dropboxusercontent.com/p/thumb/ABPNZooJWcYnfZIw83t0PsEp4cyvN-IgecFq1D1VFlXxk84l9eRVHq50mS1NDEIdFkxUvw_6q5PWyx0d_cHd6Xgp7bsGqDTU8lo5NcFTmOkGKoe-gk_ZSLurLpkLCdX5cyUZR1E5xX_4eiU4j-_JfsWKHepjJR_0dGK8GyV5JzAYeKm-TUoX5UyCLd7ksI2FeERdkPsoOBB0B5l8kelg0h7_pqdJ8S3FQ_AClagTjghQfwMSEVic-ZkqXhYJ_OXTIw9h2BtmHnTdZ4lIaP46R163OU9xA81p7qKKnCrftSmXNxlgKUck8jklnwNEPjMfoWNq-Lrn0UCqYwQRq-B2knaUfUdSlm7wKVM1Q62cifNdxA/p.jpeg?size=2048x1536&size_mode=3'}
                        link={'encore'}/>
                    <BrandIcon
                        img={'https://ucb3dc3a2e401cc26928e423f5fb.previews.dropboxusercontent.com/p/thumb/ABMrbjAnyYm1qKAa171jXN7LRkV_jBM2G2o4m4dfUe6W3fQOG6abHI5Yh8OM0euiFDvqovR7tsywPLNOzE61YGOIJ4KeWI1ASwhqmCiWpf4hakaX5-LV8MnfGHuHDLFj3egAZdbPaqdOatnreGwcALohJ8IrLz0eJPXs8INtdcr4CuGNr1UP7ckXNRCrgVEMaIjlnX_4NmXnt7TgHV31b6scp0ad7iZKo0nrj7NVf82JVl9kz7yNlJcHpwwIzLEt8fBv5-bgAtMUUNyGFgYWHxr9mqkRmCdkhjR68ST6Mg3JN4ZBx-xAhlfzXsygyrBYRLSnB6XQEj9pS8ylzMcUosrBC9KcMwkA6z1y1FLvVlM8Uw/p.jpeg?fv_content=true&size_mode=5'}
                        link={'eNews'}/>
                    <BrandIcon
                        img={'https://uc52a0923cd38139bf038418eb42.previews.dropboxusercontent.com/p/thumb/ABNZH9_fvfe8NDNDfLuMzwF88LVd-2HKsWh-4ti7z2fNsJPaDTE5DkaeqK9KFTbBD6p7Op6Ts8Gnxpgj5v5VLI2rNgzv9yLyAlU3B2T1ix0lPIRQYUt0whKVLRGDgIvPRtJtYyhuj_bX_KLNJtGPbG24_PJ-CbX6_IiZypIhv4Yb8Ux4g45r980kkItvTrEb5yRE3V3j92l3K6Ci0UPdrrKCagBk6Q22gW-NtwKt_6ac9CB1YsTKB5u2m0tEpIUGIHNDhUM_Nh9zWrHr0bNmROTuOIXCTy0cJpo9GF5rmgs210UtV5uPdE0c30NdKTT3SMrweTyLTX2278unt9zwKzsy9UxyWN8lrXIpSvV5gBsYpl6J_BxnylMTB5rjgm2_Qjol7csgodxBr44qyCleuX01/p.jpeg?fv_content=true&size_mode=5'}
                        link={'grammys'}/>
                    <BrandIcon
                        img={'https://uc38d5470f5d366257ccf6cc3717.previews.dropboxusercontent.com/p/thumb/ABOSaYPkkj1Juj4hoLzMLb4NTCOhcnc0qYsHYut6tVP_-zRNIR9Xgjexyve33pDfrXKzFpZXM7gRFpMW2gW3n3voqWDibjYwWGhnEF4bUifTyaTYri0zrATQT50-FOnm9pLf9fwNuA36dCnuRkd7P1M5g7cERkGbScUtS5KtmmYxrfmDYY1Z5tJKjAi-NdjYryfhW3fcAdPuIx_ZN_q25AjuLt5gqRzqTn90dAQIarhjk8MU2cgXDQ585hsVkv5u00rkWRRzcp2m5BaF5FNthFuoOKSj09ZJfVaLSvIY2ajtm92MbK7ccWxAaxy77weaggwfRc6N7rMwfABdd1D-pGziRgVlRpX5P_3Gi6TlmlIsrg/p.jpeg?fv_content=true&size_mode=5'}
                        link={'hbo'}
                        contents={<HBO />}
                    />
                    <BrandIcon
                        img={'https://uc64b804792268d31c4dc07e03f7.previews.dropboxusercontent.com/p/thumb/ABPh89QqI4UqfOpFWe8sy4E4pEwDG75ZKeNVryP3QLvB-tV-Dkj5FFu_hiMhxpmyGJp6eCoAY7llMA28OhYkAQXxydla0ms_1iSDytGx5REoi-5j2xk84Ycm1T_cJasm83I23z-nyM5uLWfK-sXZalsBsGsfwCGGgkPyt4quoF4NlK0zR90L0goUtcO2-fO72p09HXjqp4ageSQkrBhVf17qm2EOjXoYPA-SoxLkdY1cM30k8mgYtBBTLt57TAPH9_FqqXUlYoi3pOfNVdDsf6Pl91Q48JQSVlsTd7Mxw87QvCnRIKVJoYsvsVevH_exuVJidBC0Q_Pfp7PpaPGlwk5cEUeq3MQY7EC36GFLeJyY_A/p.png?fv_content=true&size_mode=5'}
                        link={'homeSweetHome'}
                        contents={<HomeSweetHome />}
                    />
                    <BrandIcon
                        img={'https://uc42e34f25169543bc76399f961d.previews.dropboxusercontent.com/p/thumb/ABNAT4eWvPsekBsXegRTHti_KI8Tc5P8IPlZeKb7X8KHDGyFZ6B5rY4EYCz1Np9F8LIpib5_zHjk75eQ7p4v-MwaSlfcluPN-MtV7n5GPkA4ttXu1WWA1eZwWMAC1OGtwUSi1MxAsfLPtB8Dl90-JHMJqozjmdbLWMOvc9RMg6cSfloeUimFHZr1TzuIAYnT6qdq8b_25IIeQqWGKrqeGEA7sBCoRSYizP1hJDBArzB-Nj9jrRFyQNaV2GhA8zzw9yU_k-AN0zo68KeXtB7_y3XGpbBc6lxT6YQMEU7Rcr9H2lg7Nxwm405T3wwRPmmdrSkEu3dwcFPAa4KzLH1jtrH7p1ORxme94UhmS-p9WmHcng/p.jpeg?fv_content=true&size_mode=5'}
                        link={'nab'}/>
                    <BrandIcon
                        img={'https://uc4202a57a1843a329c478d1adf1.previews.dropboxusercontent.com/p/thumb/ABOlw9uZujgDjouxJj-6_yxXUVcUQXApJDjo_vlyCw8QevZQiMv7AXhFkrdjQvc0gH9Hx1QqE0yp7sjeI6lSFm9ivbZA2n7NFXzwB3Zl8fziLZx3uSnwvN0uHRGUsiWCgf5v5r_UjPiGpoVE35R1uGB_HJ15ifR62d1_oEPu6d737SSlwSn1efIsEvfn5_QQVExz-cMqcHPA2eaNCIOxfIyRTnDta3DRy58HSS004cFEvxQi8vQY4-2RvKOK5dgfKwu0YDJo1e-dazS-F7rEct-3Sy59Hgtqg3Nb3jo5JMz7GCVAuUWZ-BFCCzPecB-IsUSY59pLNcKmmlJ8afkA9syvK0WpYvYJmhHqH-jJPchqDf4-3SQmOqeT-N9OSj9YGxjDUtcf_eSj4m4O5HG2dT_S/p.jpeg?fv_content=true&size_mode=5'}
                        link={'people'}/>
                    <BrandIcon
                        img={'https://uc664475f46e3bffba804992d6d1.previews.dropboxusercontent.com/p/thumb/ABPIy2ryf0otCjUhng_fzyvjCVLdNLr_Sc0LgHIv3TUf5et1wEH6CYhCtP9LyweaAYU3NxFh6jhyWCa2N66j7y25aO-iq8C4muQODbRvqeDaNYEPCaCaiW_Ne0u5GJVzeeQtvJ0U1odaLrEsJ6Ru3GyU7ZnQzTezyBroajwQOt9VLwZ5ImXGHrRtbhSfJ0BmXtPS7oAvWHjaoUiIxMXPjuPVzhzjUFXLOpiGUhcIN9xU0q-IHlIqkcAsUsB3SGWo-rXgnySpvzz0lh8gSsknUdeU_WHH503s4ukbAJGMILlpXG86rYckxqxFc0M3jypdnnAA6mLMlMImW7bOf1CNAtn8emo7RvBhPBBw6Ocgmdfk_g/p.jpeg?fv_content=true&size_mode=5'}
                        link={'guild'}/>
                    <BrandIcon
                        img={'https://ucc0f6b78bc0e37528843bab7a14.previews.dropboxusercontent.com/p/thumb/ABOAomTrOO56o0XpOgJ3QaFiC6vl233o5kwiJK0J7udHuborx3Y2ukB8sA5Rht3r0t8IeMu4dQmkSQsFZn-O1bWhM54o4oljIh8LFZpMvGTllpljBMjR_llTBzXL0Wven-3qhZSFibd8wtZPvmAKjud4rkilaJ1PS6jBmNDM8RQON3TwHUERyt6LUk-WYoz2ayEttDTetXogNNukyeazFvZfXFRvzZTzlZkSgf6bR7mkzjELlz03b1Exo5Rxognv2skN2Bf7R3VkdWicCWE0gP0biCoVFfqtdUHhrXP-s2TpEwHXHPn59m3DCKRIsaooa2wptf7DSZm5oesQeC6ymBmaELxSjlM6lF1OAmarzV60Hw/p.jpeg?fv_content=true&size_mode=5'}
                        link={'sportsIllustrated'}/>
                    <BrandIcon
                        img={'https://ucbf96261ac8c2aa99035c798666.previews.dropboxusercontent.com/p/thumb/ABO65AfzAn9-2OerXyF55aHOepr2J9UxPv7J7rpK39P29H-KY3we86sDiyK_Z1CBA4xv6JNHeODiVPYss29uz9YP55spON5uH3TP8n_xQZ_gtV2aJhzzTJFHe51zHfRlbVvuZa--lu_PFlvJfqnhKC7YN7zVuh_PqD0g2ZbKcJowe9PEinnv7H8BN_KzNCWCa7IkipDieKpzlRQOL_vrdGor16OMHQ0rP2FAzshegNYwaKFM5lXS96Kw3b1rFK88cjDX-XUTJEKUfT1UlWTNB8QvR6F8HO4XtItVBAHQr5Qfux6EJHezElit9DLmvX5zjn934lCpBqdfQPXTn8USj4EKCHcnXn5of8h1U6FEfsmCOA/p.jpeg?fv_content=true&size_mode=5'}
                        link={'snl'}/>
                    </RevealFade>
                </div>
                : ''}
        </div>
    );
}

export default App;
