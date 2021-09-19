import React from 'react'
import { Table } from 'react-bootstrap'

const Users = ({el}) => {
    return (
        <div>
   <Table striped bordered hover>
  
  <tbody>
    <tr className='tr'> 
      <th>{el.id}</th>
      <td>{el.name}</td>
      <td>{el.username}</td>
      <td>{el.email}</td>
      <td>{el.address.city}</td>
    </tr>
   
  </tbody>
</Table>
        </div>
    )
}

export default Users
