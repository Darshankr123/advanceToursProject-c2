import React, { useState } from 'react'

const Booking = () => {

  const [date,setDate] = useState('');
  console.log(date);
  return (
    <div className='section-center  page-bg' >
      <div className='page-center pages-view-center' >
        <h2 className='page-title'>select date to booktour : </h2>
        <div>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} style={{
            padding:"0.5rem 1rem",
            borderRadius:"0.5rem",
            border:"none",
            outline:"none",
            letterSpacing:"2px",
            fontSize:"1.1rem",
            background:""
          }} />
        </div>
      </div>
    </div>
  )
}

export default Booking