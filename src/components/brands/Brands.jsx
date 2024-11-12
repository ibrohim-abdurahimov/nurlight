import React, { memo } from 'react'
import "./Brands.scss"
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import img1 from "../../assets/arte.svg"
import img2 from "../../assets/divinare.svg"
import img3 from "../../assets/odeon.svg"


const Brands = () => {
    return (
        <section className='brands'>
            <div className="container">
                <div className='brands__title'>
                    <p>Только проверенные бренды</p>
                    <div className="brands__next_btn">
                        <button>
                            <LuMoveLeft />
                        </button>
                        <button>
                            <LuMoveRight/>
                        </button>
                    </div>
                </div>
                <div className="brands__wrapper">
                    <div className="brands__card">
                            <img src={img1} alt="" />
                    </div>
                    <div className="brands__card">
                            <img src={img2} alt="" />
                    </div>
                    <div className="brands__card">
                            <img src={img3} alt="" />
                    </div>
                    <div className="brands__card">
                            <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Brands) 