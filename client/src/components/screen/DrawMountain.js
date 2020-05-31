import React,{useState} from 'react';
import styled,{ThemeProvider,css} from "styled-components";
import {rgba,darken, transitions} from 'polished';


const transitionDuration = "0.35s";

const Card = styled.div`
     background:${props=>props.theme.colorGround};
     transition:background ${transitionDuration};
     `;

const Sky = styled.div`
    background:${props=>props.theme.colorSky};
    transition:background ${transitionDuration};
    `;

const Button = styled.button`
    background:${props=>rgba(props.theme.colorMountain,0.45)};
    transition:background ${transitionDuration};
    `;

const MountainBackground = styled.div`
    background:${props=>props.theme.colorMountain};
    transition:background ${transitionDuration};
    `;

const MountainBlocker = styled.div`
    background:${props=>props.theme.colorGround};
    transition:background ${transitionDuration};
    `;

const createMountainShadow =
    (isDark,shadowColor,themeSetting)=>css`
        background: ${shadowColor}
            linier-gradient(
                to bottom,${darken(0.05,shadowColor)} 40%,
                ${shadowColor} 100%
             );
        opacity :${themeSetting === "dark" 
           ? (isDark ? 1:0)
           : (isDark ? 0:1)};
        transition :opacity ${transitionDuration};
        `;

const MountainShadow = styled("div")`
    &:: before {
        ${props => createMountainShadow(
            false,
            props.lightShadowColor,
            props.themeSetting
        )}
    }
    &:: after {
        ${props => createMountainShadow(
            true,
            props.darkShadowColor,
            props.themeSetting
        )}
    }
    `;

const DrawMountains = props =>{
    const [mountains] = useState (
        [
            {mountainSize :"120px",zIndex:1,shiftLeft:"0"},
            {mountainSize :"90px",zIndex:0,shiftLeft:"-50px"}
        ]
    );
    let [theme,setTheme]= useState("dark");

    const [darkTheme]= useState({
        colorSky:'#1a143c',
        colorGround:'#e3e0fb',
        colorMountain:'#cbcefe'
    });

    const [lightTheme]=useState({
        colorSky:'#399dfb',
        colorGround:'#ffffff',
        colorMountain:'#cbe6fe'
    });

    const CardTitle = styled.div`
        background:${props=>props.theme.colorSky};
        transition:background ${transitionDuration};
        `;
    
    const CardDescription = styled.div`
        background:${props=>props.theme.colorSky};
        transition:background ${transitionDuration};
        `;
    
    const Footer = styled.div `
        background:${props=>props.theme.colorSky};
        transition:background ${transitionDuration};
        `;
    const FooterMountains = styled.div`
        background:${props=>props.theme.colorGround};
        transition:background ${transitionDuration};
        `;

    const MountainStage = styled.div`
        background:${props=>props.theme.colorGround};
        transition:background ${transitionDuration};
        `;

    const MountainWrapper = styled.div`
        background:${props=>props.theme.colorMountain};
        transition:background ${transitionDuration};
        `;
            

    return(
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Card onClick={()=> theme === 'dark' ? setTheme('light'): setTheme('dark') }>
                <Sky>
                    <CardTitle>CSS Mountain</CardTitle>
                    <CardDescription>The ultimate Tutorial</CardDescription>
                    <Button>Get Started</Button>
                </Sky>
                <Footer>
                    <FooterMountains>
                        {mountains.map(m=>(
                            <MountainStage
                                mountainSize={m.mountainSize}
                                zIndex ={m.zIndex}
                                shiftLeft ={m.shiftLeft}>
                                    <MountainWrapper mountainSize={m.mountainSize}>
                                        <MountainBackground mountainSize={m.mountainSize}>
                                            <MountainShadow  
                                                themeSetting={theme}
                                                lightShadowColor={lightTheme.colorMountain}
                                                darkShadowColor={darkTheme.colorMountain}/>
                                        </MountainBackground>
                                    </MountainWrapper>

                            </MountainStage>
                        ))}
                    </FooterMountains>
                </Footer>
            </Card>
        </ThemeProvider>
    );
};

export default DrawMountains;




