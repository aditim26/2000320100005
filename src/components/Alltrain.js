import React from 'react'
import Train from './Train'
import './style.css'
const data = [
    {name: "Vande Bharat",
    number: 120,
    seating_capacity: 50,
    timeofdeparture : "2023-7-10 12:00",
    to: "delhi",
    from: "haridwar",
    costAc: 400,
    cost_sleeper: 350
},

    {name: "Kota DDN",
    number: 121,
    seating_capacity: 70,
    timeofdeparture : "2023-7-11 1:00",
    to: "delhi",
    from: "kota",
    costAc: 500,
    cost_sleeper: 400},

    {name: "MUSSOORIE EXP ",
    number: 122,
    seating_capacity: 80,
    timeofdeparture : "2023-7-12 2:00",
    to: "delhi",
    from: "Mussorie",
    costAc: 600,
    cost_sleeper: 500},

]
function Alltrain() {
  return (
    <div className='traincard'>
        {data.map((train)=><Train info ={train} />)}
    </div>
  )
}

export default Alltrain