import React from 'react';
import { InfoSection } from '../../components';
import { InfoSectionLogo } from '../../components/';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

const Home = () => {
    return (
        <>
            <InfoSectionLogo {...homeObjOne}/>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home;