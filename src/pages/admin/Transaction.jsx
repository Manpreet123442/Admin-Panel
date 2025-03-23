import React, { useCallback } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar';
import TableHOC from '../../components/admin/TableHOC';
import { Link } from 'react-router-dom';

const columns = [
  {
    Header : "User",
    accessor : "user"
  },
  {
    Header : "Amount",
    accessor : "amount"
  },
  {
    Header : "Discount",
    accessor : "discount"
  },
  {
    Header : "Quantity",
    accessor : "quantity"
  },
  {
    Header : "Status",
    accessor : "status"
  },
  {
    Header : "Action",
    accessor : "action"
  },
]

const data = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const Transaction = () => {
  const Table = useCallback(()=> {
    return(
      <TableHOC columns={columns} data={data} containerClassname="dashboard-product-box" heading="Transactions" showPagination={true}/>
    )
  },[])
  return (
    <div className='admin-container'>
      <AdminSidebar/>
      <main>
        {Table()}
      </main>
    </div>
  )
}

export default Transaction
