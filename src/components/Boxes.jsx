import { useEffect, useLayoutEffect, useState, useContext } from 'react';
import EachBox from './EachBox';
import {AppContext} from '../context/AppContext'

function Boxes() {

  const {allData}=useContext(AppContext)

  return (
    <div className="flex gap-[2rem] items-center justify-center mt-[2rem]">
      <EachBox e={allData?.domain} />
      <EachBox e={allData?.ip} />
      <EachBox e={allData?.cloud} />
    </div>
  );
}

export default Boxes;
