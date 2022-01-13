import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Payment from './Payment';
import Swal from 'sweetalert2';
import axios from 'axios';
import sweetAlert from 'sweetalert';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Time } from './Time';
import fieldset3 from '../images/fieldset_3.svg';

const EditCheque = () => {
    const [chequeData, setChequeData] = useState({});
    const { id } = useParams();
    // retrieve data from input fields

    const handleChange = (e) => {
        setChequeData({ ...chequeData, [e.target.name]: e.target.value });
    }

    // Retrieve data from axios
    useEffect(() => {
        axios.get(`api/editpayment/${id}`).then(
            response => {
                console.table(response.data.payments);
                if (response.data.status === 200) {
                    setChequeData(response.data.payments); //set data here
                    // setLoading(false);
                    
                }
                else if (response.data.status === 404) {
                    sweetAlert('error', response.data.message).then(response => {
                        // window.location.href = "/editcustomer";
                    });
                }
            });
    }, [id]);
    // console.table(chequeData);
    // console.log(chequeData.payment_type);
    const savePayment = (e) => {
        e.preventDefault();
        const data = {
            payment_type: chequeData.payment_type,
            amount: chequeData.amount,
            bank_name: chequeData.bank_name,
            cheque_code: chequeData.cheque_code,
            payment_status: chequeData.payment_status

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
                axios.put(`api/updatecheque/${id}`, data).then(response => {
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
        <>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}>
                <div className='row'>
                    <div className='col'>
                        <p className='fs-3 fw-bold' style={{ float: "left", marginLeft: 20, marginTop: 20 }}>View Customer</p>  <Time />
                    </div>
                </div><br />
                <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                    {/* FieldSet 1 */}
                    <img alt='' className='my-4' src={fieldset3} />
                    <form onSubmit={savePayment} style={{ position: "relative", bottom: 440, left: 70 }}>
                        <div className='row lh-lg'>
                            <div className='col text-start'>
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Select Payment type</label><br />
                                {/* onChange={(e) => setPaymentType(e.target.value)} */}
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={chequeData.payment_type} onChange={handleChange} name='payment_type' type="text" className="form-control" aria-label="payment type" />
                            </div>
                        </div><br />
                        <div className='row'>
                            <div className='col text-start'>
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Bankname</label><br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={chequeData.bank_name} onChange={handleChange} name='bank_name' type="text" className="form-control" aria-label="First name" required />
                            </div>
                            <div className='col text-start'>
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Cheque Code</label><br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={chequeData.cheque_code} onChange={handleChange} name='cheque_code' type="text" className="form-control" aria-label="First name" required />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-start'><br /><br />
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Payment Status</label>
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={chequeData.payment_status} onChange={handleChange} name='payment_status' type="text" placeholder="" className="form-control" aria-label="First name" disabled />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-start'><br /><br />
                                <button type='submit' className='btn btn-outline-dark btn-md w-25'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditCheque