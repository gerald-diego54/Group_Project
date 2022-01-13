import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';
import { Time } from './Time';

const ViewCustomerStatus = () => {
    const [allCustomers, setAllCustomers] = useState();
    const [allEvents, setAllEvents] = useState();
    const [allPayments, setAllPayments] = useState();
    const [rowCount, setRowCount] = useState();
    const [loading, setLoading] = useState(true);

    const markAsDone = (e, id) => {
        e.preventDefault();
        Swal.fire({
            title: 'Mark as Done?',
            text: "this event will be mark as done!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Mark it as done!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`api/markasdone/${id}`).then(
                    res => {
                        if (res.data.status === 200) {
                            Swal.fire(
                                'Event Done',
                                'The event was marked as done',
                                'success'
                            )
                            //conditions here...
                            window.location.reload();
                        } else if (res.data.status === 404) {
                            Swal('Error', res.data.message);

                        }
                    }
                );

            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        })
    }
    const markAsPaid = (e, id) => {
        e.preventDefault();
        Swal.fire({
            title: 'Mark as Paid?',
            text: "this Customer will be mark as paid!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, mark it as Paid!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`api/markaspaid/${id}`).then(
                    res => {
                        if (res.data.status === 200) {
                            Swal.fire(
                                'Customer Paid',
                                'The customer was marked as done',
                                'success'
                            )
                            //conditions here...
                            window.location.reload();
                        } else if (res.data.status === 404) {
                            Swal('Error', res.data.message);

                        }
                    }
                );

            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        })
    }



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


    if (loading) {
        var whileLoading = " Loading Customer Data";
    } else {

        var customersStatus = [];
        function CustomerStatus(id, first_name, middle_name, last_name, event_name, event_date, event_status, amount, payment_status) {
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

        for (let i = 0; i < allCustomers.length; i++) {
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
            console.log('test data ', customer);
            customersStatus.push(customer);
            var customer_HTMLTABLE = "";
            customer_HTMLTABLE = customersStatus.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.first_name} {item.middle_name} {item.last_name}</td>
                        <td>{item.event_name}</td>
                        <td>{item.event_date}</td>
                        <td> {item.amount}</td>
                        <td>{item.payment_status}</td>
                        <td>{item.event_status}</td>
                        <td><button onClick={(e) => markAsDone(e, item.id)} className='btn btn-success btn-sm-1'> <i class="bi bi-check-circle"></i> DONE</button>
                            <button onClick={(e) => markAsPaid(e, item.id)} className='btn btn-warning btn-sm-1 '> <i class="bi bi-cash-coin"></i> PAID</button>

                        </td>
                    </tr>
                )

            })
        }

    }
    return (
        <div>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}>
                <div className='row'>
                    <div className='col'>
                        <p className='fs-3 fw-bold' style={{ float: "left", marginLeft: 20, marginTop: 20 }}>Customer Status</p> <Time />
                    </div>
                </div><br /><br />
                <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                    <div className='container'>
                        <h2>{whileLoading}</h2>
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
    )
}

export default ViewCustomerStatus
