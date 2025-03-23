import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar';
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { BiMaleFemale } from "react-icons/bi";
import BarChart, { DoughnutChart } from '../../components/admin/Chart';
import Table from '../../components/admin/DashBoardTable';
import data from '../../assets/data.json';

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
            <div className='widget-circle' style={{background: `conic-gradient(rgb(0,115,255) ${(Math.abs(40)/100)*360}deg, rgb(255,255,255)0)`}}>
              <span style={{color : 'rgb(0,115,255)'}}>40%</span>
            </div>
            </article>
            <article>
            <div className="widget">
              <p style={{color : "rgba(0,0,0,0.37)"}}>Users</p>
              <h4>400</h4>
              <p style={{color : "red"}}><HiMiniArrowTrendingDown /> -14%</p>
            </div>
            <div className='widget-circle' style={{background: `conic-gradient(rgb(0,198,202) ${(Math.abs(-14)/100)*360}deg, rgb(255,255,255)0)`}}>
              <span style={{color : 'rgb(0,198,202)'}}>-14%</span>
            </div>
            </article>
            <article>
            <div className="widget">
            <p style={{color : "rgba(0,0,0,0.37)"}}>Transactions</p>
            <h4>23000</h4>
            <p style={{color : "green"}}><HiMiniArrowTrendingUp /> +80%</p>
            </div>
            <div className='widget-circle' style={{background: `conic-gradient(rgb(255,196,0) ${(Math.abs(80)/100)*360}deg, rgb(255,255,255)0)`}}>
              <span style={{color : 'rgb(255,196,0)'}}>80%</span>
            </div>
            </article>
            <article>
            <div className="widget">
            <p style={{color : "rgba(0,0,0,0.37)"}}>Products</p>
            <h4>1000</h4>
            <p style={{color : "green"}}><HiMiniArrowTrendingUp /> +30%</p>
            </div>
            <div className='widget-circle' style={{background: `conic-gradient(rgb(76,0,255) ${(Math.abs(30)/100)*360}deg, rgb(255,255,255)0)`}}>
              <span style={{color : 'rgb(76,0,255)'}}>30%</span>
            </div>
            </article>
        </section>
        <section className='graphContainer'>
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <div>
              <BarChart data_2={[300,144,433,655,237,755,190]}
              data_1={[200,444,343,556,778,455,990]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="rgb(0,155,255)"
              bgColor_2="rgba(53,162,235,0.8)"/>
            </div>
          </div>
          <div className="inventory">
            <h2>Inventory</h2>
            <div className='category-item'>
              <h5>Laptops</h5>
              <div>
                <div style={{backgroundColor : 'rgb(0,198,202)', width : `${(96*40)/100}px`}}>

                </div>
              </div>
              <span>40%</span>
            </div>
            <div className='category-item'>
              <h5>Shoes</h5>
              <div>
                <div style={{backgroundColor : 'rgb(255,196,0)', width : `${(96*100)/100}px`}}>

                </div>
              </div>
              <span>100%</span>
            </div>
            <div className='category-item'>
              <h5>Cameras</h5>
              <div>
                <div style={{backgroundColor : 'rgb(168, 0, 202)', width : `${(96*80)/100}px`}}>

                </div>
              </div>
              <span>80%</span>
            </div>
            <div className='category-item'>
              <h5>Jeans</h5>
              <div>
                <div style={{backgroundColor : 'rgb(76,0,255)', width : `${(96*60)/100}px`}}>

                </div>
              </div>
              <span>60%</span>
            </div>
          </div>
        </section>
        <section className="transaction-container">
          <div className='gender-chart'>
            <h2>Gender Ratio</h2>
            <DoughnutChart labels={["Female","Male"]} data={[12,19]} backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}/>
            <p>
              <BiMaleFemale/>
            </p>
          </div>
          <div>
            <Table data={data.transaction}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
