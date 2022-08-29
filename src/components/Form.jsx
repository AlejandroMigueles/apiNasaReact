import React from 'react'
import { useState } from 'react'


const Form = () => {
  const [fecha, setFecha] = useState('2022-08-25')
  return (
    <form className='inLine container'
      onSubmit={(e) => {
        e.preventDefault()
      }
      }>
    <input size={16} type="date" className="form-control calendar" id="dateTime" defaultValue="2022-08-25" value={fecha} onChange={(e)=>setFecha(e.target.value)}  />
    <button className="btn btn-primary" type='submit' id="btn-search" onClick={()=>setFecha(fecha)}>Buscar</button>
    </form>
  )
}

export default Form