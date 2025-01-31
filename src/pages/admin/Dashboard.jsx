import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar';
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";

const Dashboard = () => {

  const userImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp"
  return (
    <div className='admin-container'>
      <AdminSidebar/>
      <main className='dashboard'>
        <div className="bar">
        <BsSearch />
        <input type = "text" placeholder='Search for data, users, docs'/>
        <FaRegBell />
        <img src={userImg} height={30} width={30} alt='user'/>
        </div>
        <section className="widget-container">
          <article>
            <div className="widget">
            <p style={{color : "rgba(0,0,0,0.37)"}}>Revenue</p>
            <h4>$340000</h4>
            <p style={{color : "green"}}><HiMiniArrowTrendingUp /> +40%</p>
            </div>
            <div className='widget-circle'>
              <span>40%</span>
            </div>
            </article>
            <article>
            <div className="widget">
              <p style={{color : "rgba(0,0,0,0.37)"}}>Users</p>
              <h4>400</h4>
              <p style={{color : "red"}}><HiMiniArrowTrendingDown /> -14%</p>
            </div>
            <div className='widget-circle'>
              <span>40%</span>
            </div>
            </article>
            <article>
            <div className="widget">
            <p style={{color : "rgba(0,0,0,0.37)"}}>Transactions</p>
            <h4>23000</h4>
            <p style={{color : "green"}}><HiMiniArrowTrendingUp /> +80%</p>
            </div>
            <div className='widget-circle'>
              <span>40%</span>
            </div>
            </article>
            <article>
            <div className="widget">
            <p style={{color : "rgba(0,0,0,0.37)"}}>Products</p>
            <h4>1000</h4>
            <p style={{color : "green"}}><HiMiniArrowTrendingUp /> +30%</p>
            </div>
            <div className='widget-circle'>
              <span>40%</span>
            </div>
            </article>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
