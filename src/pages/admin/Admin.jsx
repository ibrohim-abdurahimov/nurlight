import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./Admin.scss"
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineCreate,  MdLogout } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

const Admin = () => {
    const nav = useNavigate()
    const handleLogout = () => {
        if(confirm('Are you sure')){
            const storage = JSON.parse(localStorage.getItem("storage"))
            delete storage.token
            localStorage.setItem('storage', JSON.stringify(storage))
            nav('/')
        }
    }
    return (
        <section className='admin'>
            <div className='admin__dashboard'>
                <div className="admin__card">
                    <h2> <FaArrowLeftLong/> Admin</h2>
                    <div className="admin__card_body">
                        <NavLink className='link' to={"/admin/create-product"}>
                            Create Product <AiOutlineAppstoreAdd/>
                        </NavLink>
                        <NavLink className='link' to={"/admin/manage-product"}>
                            Manage Product <MdOutlineCreate/>
                        </NavLink>
                    </div>
                </div>
                <div className="admin__card">
                    <h2 onClick={handleLogout}>Log out <MdLogout/></h2>
                </div>
            </div>
            <div className='admin__table'>
                <Outlet />
            </div>
        </section>
    )
}

export default Admin