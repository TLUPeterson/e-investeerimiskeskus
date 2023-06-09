import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    NavIcon
} from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';


const  Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    console.log(window.location.pathname);
    if(window.location.pathname==='/'){
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        <NavIcon alt='Logo' src='images/logotest.svg' />
                            Eesti Investeerimiskeskus
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            {/* <NavLinks to='/' onClick={closeMobileMenu}> */}
                            <NavLinks to='/' onClick={(e)=>{closeMobileMenu;e.preventDefault;
                                                        window.scrollTo({
                                                            top: document.querySelector("#home").offsetTop,
                                                            behavior: "smooth",
                                                        });}}>
                                                        
                                Tutvustus
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={(e)=>{closeMobileMenu;e.preventDefault;
                                                        window.scrollTo({
                                                            top: document.querySelector("#desc").offsetTop,
                                                            behavior: "smooth",
                                                        });}}>
                                                        
                                Investorile
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={(e)=>{closeMobileMenu;e.preventDefault;
                                                        window.scrollTo({
                                                            top: document.querySelector("#about").offsetTop,
                                                            behavior: "smooth",
                                                        });}}>
                                                        
                                Meist
                            </NavLinks>
                        </NavItem>
                        
                    
                    
                        {/* <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                Teenused
                            </NavLinks>
                        </NavItem> */}
                    

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/contact'>
                                    <Button primary>Kontakt</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/contact'>
                                    <Button onClick={closeMobileMenu} fontBig primary>Kontakt</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )}else{return(
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        {/* <img alt='Logo' style={{maxHeight: '8vh'}} src='images/investlogomin.svg'></img> */}
                        {/* <NavIcon /> */}
                            Eesti Investeerimiskeskus
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            {/* <NavLinks to='/' onClick={closeMobileMenu}> */}
                            <NavLinks to='/' onClick={(e)=>{closeMobileMenu;}}>
                                Avaleht
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={(e)=>{closeMobileMenu;;}}>
                                                        
                                Investorile
                            </NavLinks>
                        </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={(e)=>{closeMobileMenu;;}}>
                                Meist
                            </NavLinks>
                        </NavItem>
                    
                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/contact'>
                                    <Button primary>Kontakt</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/contact'>
                                    <Button onClick={closeMobileMenu} fontBig primary>Kontakt</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>)
    }
}

export default Navbar
