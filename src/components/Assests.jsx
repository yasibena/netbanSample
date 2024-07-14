import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios, { all } from 'axios';
import EachAssest from './EachAssest';
import { AppContext } from '../context/AppContext';

export default function Assests() {
  const { allData, filterType, setFilterType } = useContext(AppContext);

  const [filtedData, setFilteredData] = useState([]);

  return (
    <div className="bg-[#1d1e2c] w-[64rem]  rounded-[10px] mt-[2rem] ">
      <div className="mb-[3rem]">
        <h1 className="p-2 text-[#fff]"> Assests</h1>
      </div>

      <div className="w-[64rem] flex flex-col gap-[1rem] rounded-[1px] m-auto ">
        <div className="grid  grid-cols-8 bg-[#464660] p-1 rounded-[5px] font-bold text-[#fff]">
          <div className="">Grade</div>
          <div className="">Name</div>
          <div className="col-span-4  text-center">Total Vulneribiliteis</div>
          <div className="col-span-2 text-center">Last Seen</div>
        </div>

        <div className="">
          <div className=" gap-[1rem] bg-[#1d1e2c]  rounded-[5px] font-bold text-[#fff]">
            {filtedData.map((each) => (
              <EachAssest each={each} />
            ))}
            {/* {
                        allData.assets.map(each=>(
                            <EachAssest each={each} />
                        ))
                    } */}
            {filterType.length > 0
              ? allData.assets
                  .filter((d) => d.type == filterType)
                  .map((each) => <EachAssest each={each} />)
              : allData.assets.map((each) => <EachAssest each={each} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
