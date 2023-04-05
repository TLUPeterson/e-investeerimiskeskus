import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSectionLogo.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'


const InfoSectionLogo = ({ 
    id,
    primary,
    linkto,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    if(window.innerWidth<480){
        return (
            <>
                <InfoSec lightBg={lightBg} id={id}>
                    <Container>
                        {/* IMAGE CONTAINER */}
                        
                            <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                            </InfoColumn>

                            <InfoRow imgStart={imgStart}>
                            <InfoColumn>
                                <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>Tere tulemast Eesti</Heading>
                                <Heading lightText={lightText}> Investeerimiskeskusesse</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to={linkto}>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                                </Link>
                                </TextWrapper>
                            </InfoColumn>

                        </InfoRow>
                    </Container>
                </InfoSec>
            </>
        )
    }else{
        return (
            <>
                <InfoSec lightBg={lightBg} id={id}>
                    <Container>
                        <InfoRow imgStart={imgStart}>
                            <InfoColumn>
                                <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>Tere tulemast Eesti</Heading>
                                <Heading lightText={lightText}></Heading>
                                <Heading lightText={lightText}> Investeerimiskeskusesse</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to={linkto}>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                                </Link>
                                </TextWrapper>
                            </InfoColumn>
                            <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </>
        )
    }
    
}

export default InfoSectionLogo;