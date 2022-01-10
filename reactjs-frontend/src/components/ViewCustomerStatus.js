import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const ViewCustomerStatus = () => {
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
        axios.delete(`api/deletecustomer/${id}`, `api/deleteEvents/${id}`).then(
            res => {
                if (res.data.status === 200) {
                    swal('Data Deleted', res.data.message);
                    delClick.closest('tr').remove();
                } else if (res.data.status === 404) {
                    swal('Error', res.data.message);
                    delClick.innerText = 'Delete';

                }

            }

        );

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
                                <h4>Customer Status</h4>
                            </div>
                            <div className="card-body" style={{ paddingLeft: 80 }}>
                                <div className='table' style={{ width: 800, height: 400, overflow: 'scroll' }}>
                                    <table className='table table-striped table-danger table-responsive'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Event</th>
                                                <th>Date</th>
                                                <th>Payment</th> 
                                                <th>Payment Status</th> 
                                                <th>Event Status</th> 
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

export default ViewCustomerStatus
