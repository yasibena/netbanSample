import React from 'react'
import moment from 'moment'

export default function EachAssest({ each }) {


    return (
        
      <div className='bg-[#2a2b3f] grid mt-[0.3rem] rounded-[2px] p-1 grid-cols-8 '>
            <div className='polygon w-[35px] h-[35px] flex items-center justify-center text-[0.6rem]'><span className='text-[#000] font-bold' >{each.grade}</span></div>
            <div className=''>{each.name}name</div>
            <div className='col-span-4  text-center'>{each.total_vuls}</div>
            <div className='col-span-2 text-center'>{moment(each.lastSeen).format('MM/DD/YYYY ')} <span> at</span>{moment(each.lastSeen).format(' HH:MM ')} </div>
      </div>
    )
}
