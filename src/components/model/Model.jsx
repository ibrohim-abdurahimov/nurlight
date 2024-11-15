import React, { useEffect } from 'react'
import "./Model.scss"

const Model = ({children, close}) => {
    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=> {
            document.body.style.overflow = "auto"
        }
    },[])
    return (
        <div className="model">
            <div onClick={()=> close(null)} className="model__overlay"></div>
            <div className="model__content">
                {children}
            </div>
        </div>
    )
}

export default Model