import { useEffect, useState, useContext } from 'react';
import { TiWorldOutline } from 'react-icons/ti';
import { FiArrowUpRight } from 'react-icons/fi';
import axios, { all } from 'axios';
import dashboard from '../assets/dashboard.png'
import domin from '../assets/domin.png'
import arrowtop from '../assets/arrowtop.png'
import ips from '../assets/ips.png'
import bug from '../assets/bug.png'
import port from '../assets/port.png'
import clouds from '../assets/clouds.png'
import { AppContext } from '../context/AppContext';



export default function EachBox({ e }) {
const{filterType,setFilterType}=useContext(AppContext)
var type='';
    var name = ''
    var iconsTag;
    var iconsColor = '';
    if (e?.total == 4) {
        name = 'Cloud Accounts'
        iconsTag = clouds;
        iconsColor = '#D1B003'
        type='cloud'

    }
    if (e?.total == 300) {
        name = 'Domains'
        iconsTag = domin
        iconsColor = '#DF6710'
        type='domain'
    }
    if (e?.total == 200) {
        name = 'Ip Address'
        iconsTag = domin
        iconsColor = '#565392'
        type='ip'
    }

    return (

        <div className="flex flex-col w-[20rem] p-3 cursor-pointer h-[18rem] rounded-[10px] bg-[#1D2229] " onClick={()=>setFilterType(type)}>
            <div className="flex justify-between">
                <div className=" w-[5rem] p-2 rounded ">
                    <div className='rounded-t-xl flex items-center justify-center'
                        style={{ background: iconsColor }}
                    > <img src={iconsTag} className='h-[2.5rem]' /></div>
                    <div className='bg-[#fff] flex items-center rounded-b-xl justify-center '><span className=" text-[0.9rem] font-bold  ">{e?.total}</span></div>
                </div>
                <div>
                    <img src={arrowtop} alt="" className='h-[1.5rem] rotate-180 m-2' />
                </div>
            </div>
            <h1 className='text-[#fff] my-[1rem] font-bold'>{name}</h1>
            <hr />
            <div className='flex h-[4rem]'>
                <div className='flex justify-around items-center text-[#fff]  w-[50%]'>
                    <div className=''>
                        <h4 className='text-[0.8rem]'>Domain</h4>
                        <span className='font-bold'>{e?.total_live}</span>
                    </div>
                    <div>
                        <img src={dashboard} alt="" className='h-[3rem]' />
                    </div>
                </div>
                <div className='flex justify-around items-center text-[#fff]  w-[50%]'>
                    <div className=''>
                        <h4 className='text-[0.8rem]'>Monitored</h4>
                        <span className='font-bold'>{e?.total_monitored}</span>
                    </div>
                    <div>
                        <img src={dashboard} alt="" className='h-[3rem]' />
                    </div>
                </div>


            </div>
            <hr />


            <div className='flex text-[#fff] justify-around mt-[1rem]'>

                <div className='flex items-center gap-[0.5rem]'>
                    <div className='bg-[#327794]  p-1 rounded-[10px] '>
                        <img src={ips} alt="" className='h-[2rem] flex' />
                    </div>
                    <div className=''>
                        <span className='text-[0.8rem]'>Ips</span>
                        <div className='font-bold'>{e?.vulns}</div>
                    </div>

                </div>
                <div className='flex items-center gap-[0.5rem]'>
                    <div className='bg-[#327794]  p-1 rounded-[10px] '>
                        <img src={port} alt="" className='h-[2rem] flex' />
                    </div>
                    <div className=''>
                        <span className='text-[0.8rem]'>Ports</span>
                        <div className='font-bold'>{e?.ports}</div>
                    </div>

                </div>
                <div className='flex items-center gap-[0.5rem]'>
                    <div className='bg-[#327794]  p-1 rounded-[10px] '>
                        <img src={bug} alt="" className='h-[2rem] flex' />
                    </div>
                    <div className=''>
                        <span className='text-[0.8rem]'>Vulns</span>
                        <div className='font-bold'>{e?.vulns}</div>
                    </div>

                </div>
            </div>


        </div>


    )
}
