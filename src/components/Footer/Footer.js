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
            {/* <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink> */}
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Kontakt</FooterLinkTitle>
            <FooterLink to='/'>+372 123 456</FooterLink>
            <FooterLink to='/'>Aadress</FooterLink>
            <FooterLink to='/'>info@eestiinvesteerimiskeskus.ee</FooterLink>
          </FooterLinkItems>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>

          <WebsiteRights>Eesti Investeerimiskeskus © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;