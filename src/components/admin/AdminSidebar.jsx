import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import { FaChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaStopwatch } from "react-icons/fa";

const AdminSidebar = () => {

    const location = useLocation();
  return (
    <aside>
      <h2> <RiAdminFill /> Admin</h2>
      <div>
        <h5>DASHBOARD</h5>
        <ul>
            <li style={{backgroundColor : location.pathname.includes("/admin/dashboard") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/dashboard"} style={{color : location.pathname.includes("/admin/dashboard") ? "rgb(0,115,255)" : "black"}}>
                <MdDashboard />
                Dashboard
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/products") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/products"} style={{color : location.pathname.includes("/admin/products") ? "rgb(0,115,255)" : "black"}}>
                <RiShoppingBag3Fill />
                Product
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/customer") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/customer"} style={{color : location.pathname.includes("/admin/customer") ? "rgb(0,115,255)" : "black"}}>
                <IoIosPeople />
                Customer
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/transaction") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/transaction"} style={{color : location.pathname.includes("/admin/transaction") ? "rgb(0,115,255)" : "black"}}>
                <AiFillFileText />
                Transaction
                </NavLink>
            </li>
        </ul>
      </div>
      <div>
        <h5>CHARTS</h5>
        <ul>
            <li style={{backgroundColor : location.pathname.includes("/admin/chart/bar") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/chart/bar"} style={{color : location.pathname.includes("/admin/chart/bar") ? "rgb(0,115,255)" : "black"}}>
                <FaChartBar />
                Bar
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/chart/pie") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/chart/pie"} style={{color : location.pathname.includes("/admin/chart/pie") ? "rgb(0,115,255)" : "black"}}>
                <FaChartPie />
                Pie
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/chart/line") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/chart/line"} style={{color : location.pathname.includes("/admin/chart/line") ? "rgb(0,115,255)" : "black"}}>
                <FaChartLine />
                Line
                </NavLink>
            </li>
        </ul>
      </div>
      <div>
        <h5>APPS</h5>
        <ul>
            <li style={{backgroundColor : location.pathname.includes("/admin/app/stopwatch") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/app/stopwatch"} style={{color : location.pathname.includes("/admin/app/stopwatch") ? "rgb(0,115,255)" : "black"}}>
                <FaStopwatch />
                StopWatch
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/app/coupon") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/app/coupon"} style={{color : location.pathname.includes("/admin/app/coupon") ? "rgb(0,115,255)" : "black"}}>
                <RiCoupon3Fill />
                Coupon
                </NavLink>
            </li>
            <li style={{backgroundColor : location.pathname.includes("/admin/app/toss") ? "rgba(0,115,255,0.1)" : "white"}}>
                <NavLink to={"/admin/app/toss"} style={{color : location.pathname.includes("/admin/app/toss") ? "rgb(0,115,255)" : "black"}}>
                <FaGamepad />
                Toss
                </NavLink>
            </li>
        </ul>
      </div>
    </aside>
  )
}

export default AdminSidebar
