import { useEffect, useState, useContext, useRef } from 'react';
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
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'





export default function EachBox({ e }) {
    const { filterType, setFilterType } = useContext(AppContext)
    const[changeDataChart,setChangeDataChart]=useState(true)
    var type = '';
    var name = ''
    var iconsTag;
    var iconsColor = '';
    if (e?.total == 4) {
        name = 'Cloud Accounts'
        iconsTag = clouds;
        iconsColor = '#D1B003'
        type = 'cloud'

    }
    if (e?.total == 300) {
        name = 'Domains'
        iconsTag = domin
        iconsColor = '#DF6710'
        type = 'domain'
    }
    if (e?.total == 200) {
        name = 'Ip Address'
        iconsTag = domin
        iconsColor = '#565392'
        type = 'ip'
    }
  



    Chart.register(...registerables)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            colors: {
                enabled: true,
            },

            tooltip: {
                callbacks: {
                    title: (tooltipItems) => {
                        return ''
                    },
                    label: function (context) {
                        let label = context.dataset.label || ''

                        if (label) {
                            label += ''
                        }
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y} `
                        }
                        return label
                    },
                    afterLabel: (tooltipItem) => {
                        return tooltipItem.label
                    },
                    labelColor() {
                        return {
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                            borderWidth: 0.2,
                        }
                    },
                    labelTextColor: function (context) {
                        return '#050305'
                    },
                    afterLabelTextColor: function (context) {
                        return '#495434'
                    },
                },

                backgroundColor: '#fff',
                borderColor: '#frfrfr',
                usePointStyle: false,
                showShadow: true,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                grid: {
                    display: true,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    }

    const graphData =e.live
    const graphData2 =e.monitored
   
    const months = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
    ]
    const labels = graphData.map((_, index) => months[index%3])
    const data = {
        labels,
        datasets: [
            {
                backgroundColor: '#5052ff',
                data: graphData,
                barPercentage: 1,
                borderRadius: 4,
                borderSkipped: false,
                barPercentage:0.5,
            
                
            },
        ],
    }
    const data2 = {
        labels,
        datasets: [
            {
                backgroundColor: '#5052ff',
                data: graphData2,
                barPercentage: 1,
                borderRadius: 4,
                borderSkipped: false,
                barPercentage:0.5,
            
                
            },
        ],
    }

    const graphStyle = {
        // borderRadius: '0.3rem',
        // padding: '0.1rem',
        width:'5.5rem',
    }


    return (


        <div className="flex flex-col w-[20rem] p-3 cursor-pointer h-[18rem] rounded-[10px] bg-[#1D2229] " onClick={() => setFilterType(type)}>
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


                        <div style={graphStyle} >
                           
                            <Bar data={data} options={options} />
                        </div>



                    </div>
                </div>
                <div className='flex justify-around items-center text-[#fff]  w-[50%]'>
                    <div className=''>
                        <h4 className='text-[0.8rem]'>Monitored</h4>
                        <span className='font-bold'>{e?.total_monitored}</span>
                    </div>
                    <div>


                    <div style={graphStyle} >
                        
                            <Bar data={data2} options={options} />
                        </div>

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
