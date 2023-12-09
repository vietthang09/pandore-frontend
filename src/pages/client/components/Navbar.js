import React from 'react'
import { NavLink } from "react-router-dom";
import {
    ProfileOutlined,
    UserOutlined,
} from "@ant-design/icons";

export default function Navbar() {
    return (
        <div className="flex mobile:flex-col h-full navbar_profile">
            <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                    isActive ? "active_nav nav_profile" : "nav_profile"
                }
            // style={({ isActive, isPending }) => {
            //     return {
            //         color: isActive ? "#17a2b8" : "#000",
            //         borderLeftWidth: isActive ? '3px' : '0px',
            //         borderColor: "#17a2b8",
            //     };
            // }}
            >
                <div className="flex items-center">
                    <UserOutlined
                        className="text-black mr-3 text-xl"
                    />
                    <p className="font-medium text-base m-0">Profile</p>
                </div>
            </NavLink>
            <NavLink
                to="/my-order"
                className={({ isActive, isPending }) =>
                    isActive ? "active_nav nav_profile" : "nav_profile"
                }
            // style={({ isActive, isPending }) => {
            //     return {
            //         color: isActive ? "#17a2b8" : "#000",
            //         borderLeftWidth: isActive ? '3px' : '0px',
            //         borderColor: "#17a2b8"
            //     };
            // }}
            >
                <div className="flex items-center">
                    <ProfileOutlined
                        className="text-black mr-3 text-xl"
                    />
                    <p className="font-medium text-base m-0">My Order</p>
                </div>
            </NavLink>
        </div>
    )
}
