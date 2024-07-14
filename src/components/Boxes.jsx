import { useEffect, useLayoutEffect, useState, useContext } from 'react';
import axios, { all } from 'axios';
import dashboard from '../assets/dashboard.png';
import domin from '../assets/domin.png';
import arrowtop from '../assets/arrowtop.png';
import ips from '../assets/ips.png';
import bug from '../assets/bug.png';
import port from '../assets/port.png';
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
