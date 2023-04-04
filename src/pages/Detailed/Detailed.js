import React from 'react';
import { DetailedSection } from '../../components/';
import { homeObjOne } from './Data';

function Detailed() {
  return (
    <>
      <DetailedSection {...homeObjOne} />
    </>
  );
}

export default Detailed;