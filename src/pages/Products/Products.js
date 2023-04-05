import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;