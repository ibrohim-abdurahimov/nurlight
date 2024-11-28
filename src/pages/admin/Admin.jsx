import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Admin.scss"
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineCreate,  MdLogout } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

const Admin = () => {
    return (
        <section className='admin'>
            <div className='admin__dashboard'>
                <div className="admin__card">
                    <h2>Admin</h2>
                    <div className="admin__card_body">
                        <NavLink className='link' to={"/admin/create-product"}>
                            Create Product
                        </NavLink>
                        <NavLink className='link' to={"/admin/manage-product"}>
                            Manage Product
                        </NavLink>
                    </div>
                </div>
                <div className="admin__card">
                    <h2>Log out</h2>
                </div>
            </div>
            <div className='admin__table'>
                <Outlet />
            </div>
        </section>
    )
}

export default Admin