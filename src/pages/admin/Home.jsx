import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const Home = () => {
  return (
    <div className='admin-container'>
        <AdminSidebar/>
        <main>
        <section className='dashboard'>
            <h2>Home</h2>
        </section>
        </main>
    </div>
  )
}

export default Home
