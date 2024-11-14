import React, { memo, useEffect } from 'react'
import "./Blog.scss"
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Blogs from "../../components/blog/Blog"

const Blog = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
    return (
        <>
            <section className='blog'>
                <div className="container">
                    <ul className="blog__collection">
                        <li className="blog__item">
                            <NavLink to={"/"}>
                                <span className='home'>Главная</span>
                            </NavLink>
                        </li>
                        <li className='blog__item'>
                            <MdKeyboardArrowRight />
                        </li>
                        <li className="blog__item">
                            <NavLink to={"/gblog"}>
                                <span>Блог</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            <Blogs/>
            
        </>
    )
}

export default memo(Blog) 