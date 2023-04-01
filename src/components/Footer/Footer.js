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

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Võta meiega ühendust!
          </FooterSubHeading>
            <Form>
              <FormInput name='email' type='email' placeholder='Email' />
              <Button fontBig>Saada</Button>
            </Form>
        </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Eesti Investeerimiskeskus</FooterLinkTitle>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems> */}
          <FooterLinkItems>
            <FooterLinkTitle>Meie lehel</FooterLinkTitle>
            <FooterLink to='/'>Avaleht</FooterLink>
            <FooterLink to='/contact'>Kontakt</FooterLink>

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
            {/* <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink> */}
            {/* <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink> */}
            {/* <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink> */}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;