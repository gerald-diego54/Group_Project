import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import sweetAlert from 'sweetalert';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


const ViewCustomer = () => {
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('api/customer').then(res => {
            if (res['status'] === 200) {
                setCustomer(res.data.customer);
                setLoading(false);
            }

        })

    }, []);
    const deleteCustomer = (e, id) => {
        e.preventDefault();
        console.log(id);
        const delClick = e.currentTarget;
        delClick.innerText = 'Deleting..';

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`api/deletecustomer/${id}`, `api/deleteEvents/${id} ,ap`).then(
                    res => {
                        if (res.data.status === 200) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            delClick.closest('tr').remove();
                        } else if (res.data.status === 404) {
                            sweetAlert('Error', res.data.message);
                            delClick.innerText = 'Delete';
                        }
                    }
                );
            
            }else if(  result.dismiss === Swal.DismissReason.cancel){
                delClick.innerText = 'Delete';
            }
          })
      

    }
    if (loading) {
        var whileLoading = " Loading Customer Data";
    } else {
        var customer_HTMLTABLE = "";
        customer_HTMLTABLE = customer.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.first_name}, {item.middle_name}, {item.last_name}</td>
                    <td>{item.mobile_number}</td>
                    <td>{item.city} {item.province}</td>
                    <td><Link to={`editcustomer/${item.id}`} className='btn btn-success btn-sm m-1'> <i className="bi bi-pen-fill"></i> EDIT</Link>
                        <button type='button' onClick={(e) => deleteCustomer(e, item.id)} className='btn btn-danger btn-sm'> <i className="bi bi-trash-fill"></i> DELETE</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}><br /><br />
                <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                    <div className='container'>
                        <h2>{whileLoading}</h2>
                        <div className="card">
                            <div className="card-header">
                                <h4>View Customer</h4>
                            </div>
                            <div className="card-body" style={{ paddingLeft: 80 }}>
                                <div className='table' style={{ width: 800, height: 400, overflowY: 'scroll' }}>
                                    <table className='table table-striped table-danger'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Mobile Number</th>
                                                <th>Address</th>
                                                <th>Action</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customer_HTMLTABLE}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCustomer
