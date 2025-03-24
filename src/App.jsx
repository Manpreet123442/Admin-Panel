import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
const Dashboard = lazy(()=> import("./pages/admin/Dashboard"));
const Products = lazy(()=> import("./pages/admin/Products"));
const Customer = lazy(()=> import("./pages/admin/Customer"));
const Transaction = lazy(()=> import("./pages/admin/Transaction"));
const NewProduct = lazy(()=> import("./pages/management/NewProduct"));
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"))
const TransactionManagement = lazy(()=> import("./pages/management/TransactionManagement"));
const BarCharts = lazy(()=> import("./pages/charts/BarCharts"));
const LineCharts = lazy(()=> import("./pages/charts/LineCharts"));
const PieCharts = lazy(()=> import("./pages/charts/PieCharts"));
const StopWatch = lazy(()=> import("./pages/apps/StopWatch"));
const Coupon = lazy(()=> import("./pages/apps/Coupon"));
const Toss = lazy(()=> import("./pages/apps/Toss"));
import Loader from "./components/admin/Loader";
import './styles/app.scss';
import Home from './pages/admin/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/customer' element={<Customer/>}/>
        <Route path='/admin/transaction' element={<Transaction/>}/>

        {/* charts */}
        <Route path='/admin/chart/bar' element={<BarCharts/>}/>
        <Route path='/admin/chart/line' element={<LineCharts/>}/>
        <Route path='/admin/chart/pie' element={<PieCharts/>}/>

        {/* management */}
        <Route path='/admin/product/new' element={<NewProduct/>}/>
        <Route path='/admin/product/:id' element={<ProductManagement/>}/>
        <Route path='/admin/transaction/:id' element={<TransactionManagement/>}/>

        {/* apps */}
        <Route path='/admin/app/stopwatch' element={<StopWatch/>}/>
        <Route path='/admin/app/coupon' element={<Coupon/>}/>
        <Route path='/admin/app/toss' element={<Toss/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
