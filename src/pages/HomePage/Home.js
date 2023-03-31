import React from 'react';
import { InfoSection } from '../../components';
import { InfoSectionLogo } from '../../components/';
import { homeObjOne, homeObjTwo} from './Data';

const Home = () => {
    return (
        <>
            <InfoSectionLogo {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        </>
    )
}

export default Home;