import React, { useState } from 'react'
import "./Service.scss"
import Model from '../../components/model/Model'

const Service = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        
        {
            show &&
            <Model close={setShow}>
                
            </Model>
        }
    </div>
  )
}

export default Service