import React from 'react';
import { DetailedSection } from '../../components/';
import { homeObjOne } from './Data';

const Detailed = () =>  {
  return (
    <>
      <DetailedSection {...homeObjOne} />
    </>
  );
}

export default Detailed;