import React from 'react';
import { InfoSection } from '../../components';
import { serviceObjOne } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...serviceObjOne} />
    </>
  );
}

export default Products;