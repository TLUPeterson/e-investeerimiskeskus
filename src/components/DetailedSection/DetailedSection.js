import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './DetailedSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import './Detailed.css';

 const DetailedSection = ({ 
    id,
    primary,
    lightBg,
    linkto,
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
    return (
        <>
            <InfoSec lightBg={lightBg} id={id}>
                <Container>


                <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            
                            <Heading lightText={lightText}>Tutvustus</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
 
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} style={{paddingBottom: "1.5vh"}}/>
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>

                <TopLine style={{paddingTop: '4vh'}} lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Accordion id="Accordion" defaultActiveKey="-1" flush >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Millega me tegeleme?</Accordion.Header>
                                    <Accordion.Body>
                                    Aitame maaomanikel saada parimat tulu oma kinnistu majandamisel või müügil. Me aitame ostjatel oma äri kasvatada ja võimaldame neil tegeleda oma põhitegevusega - olgu selleks metsa- või põllumajandus.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Miks me seda teeme?</Accordion.Header>
                                    <Accordion.Body>
                                    Me usume, et metsa- ja põllutehingud peavad olema läbimõeldud, läbipaistvad ja kasumlikud kõigile osapooltele.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Kuidas me seda teeme?</Accordion.Header>
                                    <Accordion.Body>
                                    Meie koostööpartnerid on ennekõike oma enda Eesti suur ettevõtjad, fondid ja investorid. Samuti kaasame ka vajadusel välisinvestoreid ja ettevõtjaid sõltuvalt tehingust ja eesmärgist.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Mis on meie eelised?</Accordion.Header>
                                    <Accordion.Body>
                                    Võimalus müüa parimatel tingimustel kinnistuid, raieõigust, kui ka põllumaa renti;

                                    Võimalus müüa ka osa kinnistust;
                                    Juristide poolt kontrollitud ja seadustele vastavad lepingud;
                                    Hea koostöö notaritega, kellega oleme vormistanud sadu edukaid tehinguid!

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                </Container>
            </InfoSec>
        </>
    )
}

export default DetailedSection;