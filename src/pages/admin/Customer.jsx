import React, { useCallback } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar';
import { FaTrash } from 'react-icons/fa';
import TableHOC from '../../components/admin/TableHOC';

const columns = [
  {
    Header : "Avatar",
    accessor : "avatar"
  },
  {
    Header : "Name",
    accessor : "name"
  },
  {
    Header : "Gender",
    accessor : "gender"
  },
  {
    Header : "Email",
    accessor : "email"
  },
  {
    Header : "Role",
    accessor : "role"
  },
  {
    Header : "Action",
    accessor : "action"
  }
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const data = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash/>
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
]

const Customer = () => {

  const Table = useCallback(()=> {
    return (
      <TableHOC columns={columns} data={data} containerClassname="dashboard-product-box" heading="Customer" showPagination={true}/>
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

export default Customer
