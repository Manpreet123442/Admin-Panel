import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
const Dashboard = lazy(()=> import("./pages/admin/Dashboard"));
const Products = lazy(()=> import("./pages/admin/Products"));
const Customer = lazy(()=> import("./pages/admin/Customer"));
const Transaction = lazy(()=> import("./pages/admin/Transaction"));
import Loader from "./components/admin/Loader";
import './styles/app.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/customer' element={<Customer/>}/>
        <Route path='/admin/transaction' element={<Transaction/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
