import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

const Footer = () => {

  const date = new Date();

  if(window.innerWidth<580){
    return (
      <FooterContainer>
        <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>Teave</FooterLinkTitle>
              <FooterLink to='/'>Reg. nr. 16688180</FooterLink>
              <FooterLink to='/'>IBAN: EE502200221081247030</FooterLink>
              <FooterLink to='/'>SWIFT: HABAEE2X</FooterLink>
            </FooterLinkItems>
          
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
              <FooterLink to='/'>Nr1: +372 56 352 952  </FooterLink>
              <FooterLink to='/'>Nr2: +372 53 230 888  </FooterLink>
              <FooterLink to='/'>eesti.investeerimiskeskus@gmail.com</FooterLink>
              <FooterLink to='/'>info@e-investeerimiskeskus.ee</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
  
            <WebsiteRights>Eesti Investeerimiskeskus OÜ © {date.getFullYear()} </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/profile.php?id=100090454841097' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/investeerimiskeskus/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    );
  }else{
    return (
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Meie lehel</FooterLinkTitle>
              <FooterLink to='/'>Avaleht</FooterLink>
              <FooterLink to='/contact'>Kontakt</FooterLink>
              <FooterLink to='/detailed'>Tutvustus</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>Teave</FooterLinkTitle>
              <FooterLink to='/'>Reg. nr. 16688180</FooterLink>
              <FooterLink to='/'>IBAN: EE502200221081247030</FooterLink>
              <FooterLink to='/'>SWIFT: HABAEE2X</FooterLink>
            </FooterLinkItems>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
              <FooterLink to='/'>Nr1: +372 56 352 952  </FooterLink>
              <FooterLink to='/'>Nr2: +372 53 230 888  </FooterLink>
              <FooterLink to='/'>eesti.investeerimiskeskus@gmail.com</FooterLink>
              <FooterLink to='/'>info@e-investeerimiskeskus.ee</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>Eesti Investeerimiskeskus OÜ © {date.getFullYear()} </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/profile.php?id=100090454841097' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/investeerimiskeskus/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    );
  }
  
}

export default Footer;