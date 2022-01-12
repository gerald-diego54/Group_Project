import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Payment from './Payment';
import Swal from "sweetalert2";
// import sweetAlert from 'sweetalert';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import  sweetAlert  from 'sweetalert';

const EditCash = () => {
    const [amount, setAmount] = useState(0);
    const [downpayment, setDownpaymnet] = useState(0);
    const { id } = useParams();
    const [Data, setData] = useState({});
    let status;
    let collectibles = amount - downpayment;



    // console.log(status);
    if (amount === downpayment && amount != 0 && downpayment != 0) {
        status = "Paid";
    }
    else if (collectibles === 0) {
        // total = 0.00;
        status = "Status";
    }
    else if (amount > downpayment) {
        status = "Not fully paid";
    }


    console.log(Data);
    // Retrieve data from axios
    useEffect(() => {
        const id = id;
        axios.get(`api/editpayment/${id}`).then(
            response => {
                if (response.data.status === 200) {
                    setData(response.data.message);
                    // setLoading(false);
                }
                else if (response.data.status === 404) {
                    sweetAlert('error', response.data.message).then(response => {
                        // window.location.href = "/editcustomer";
                    });
                }
            });
    }, [id]);

/*

    *Get the data using axios
    *use value = {Data.amount} to show the values from database to input fields




*/

    const data = {
        payment_type: "Cash",
        amount: amount,
        downpayment: downpayment,
        collectibles: collectibles,
        payment_status: status
    }
    const savePayment = (e) => {
        e.preventDefault();
        // use this for axios
        data = {
            payment_type: "Cash",
            amount: amount,
            downpayment: downpayment,
            collectibles: collectibles,
            payment_status: status
        }
        console.log(data);
        Swal.fire({
            title: 'Save Payment?',
            text: "This will be added to customer payment",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("api/payment", data).then(response => {
                    console.log(response.data.status);
                    if (response.data.status === 200) {
                        Swal.fire(
                            'Saved!',
                            'Payment Method saved.',
                            'success'
                        ).then((result) => {
                            //this line will save the data.....
                            window.location.href = "/viewcustomer";
                        })
                    }
                    else if (response.data.status === 422) {
                        Swal({
                            icon: "info",
                            title: response.data.message

                        });
                    }
                })
            }
        })
    }






    return (
        <div>
            {/* <Payment /> */}
            <form onSubmit={savePayment} style={{ position: 'relative', bottom: 550, left: 450, width: 700 }}>
                <div className='row'>
                <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Amount</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={(e) => setAmount(e.target.value)} name='amount' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required />
                    </div>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Amount</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={(e) => setAmount(e.target.value)} name='amount' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required />
                    </div>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Downpayment</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={(e) => setDownpaymnet(e.target.value)} name='downpayment' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required />
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-start'><br /><br />
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Collectibles</label>
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={collectibles} name='collectibles' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" disabled />
                    </div>
                    <div className='col text-start'><br /><br />
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Payment Status</label>
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={status} name='payment_status' type="text" placeholder="Status" className="form-control" aria-label="First name" disabled />
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-start'><br /><br />
                        <button className='btn btn-outline-primary btn-md w-25'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditCash