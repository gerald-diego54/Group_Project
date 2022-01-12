import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const ViewCustomerStatus = () => {
    const [allCustomers, setAllCustomers] = useState();
    const [allEvents, setAllEvents] = useState();
    const [allPayments, setAllPayments] = useState();
    const [rowCount, setRowCount] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('api/customerStatus').then(res => {
            if (res['status'] === 200) {
                setAllCustomers(res.data.customers);
                // console.log(res.data.customers.length);
                setAllEvents(res.data.events);
                // console.log(res.data.events);
                setAllPayments(res.data.payments);
                // console.log(res.data.payments);
                setRowCount(res.data.row_count);
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
        var customersStatus = [];
        function CustomerStatus(id, first_name, middle_name, last_name, event_name, event_date, event_status, amount, payment_status){
            this.id = id;
            this.first_name = first_name;
            this.middle_name = middle_name;
            this.last_name = last_name;
            this.name = function () {
                return this.first_name + " " + this.middle_name + " " + this.last_name;
            }
            this.event_name = event_name;
            this.event_date = event_date;
            this.event_status = event_status;
            this.amount = amount;
            this.payment_status = payment_status;
        } 
        for(let i = 0; i < allCustomers.length; i++){
            var customer = new CustomerStatus(
                allCustomers[i].id,
                allCustomers[i].first_name,
                allCustomers[i].middle_name,
                allCustomers[i].last_name,
                allEvents[i].event_name,
                allEvents[i].event_date,
                allEvents[i].event_status,
                allPayments[i].amount,
                allPayments[i].payment_status
            )
            console.log(customer);
            customersStatus.push(customer);
        }
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
                                            {/* {customer_HTMLTABLE} */}
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
