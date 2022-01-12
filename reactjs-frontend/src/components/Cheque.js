import React, { useState } from 'react';
import '../css/style.css';
import Payment from './Payment';
import Swal from 'sweetalert2';
import axios from 'axios';
const Cheque = () => {
    const [chequeData, setChequeData] = useState({
        payment_type: "Cheque",
        amount: 0.00,
        cheque_code: "",
        bank_name: "",
        payment_status: ""
    });
    // retrieve data from input fields
    
    const handleChange = (e) => {
        setChequeData({...chequeData, [e.target.name]: e.target.value})
    }

  


    const savePayment = (e) => {
        e.preventDefault();
                 // for axios
                const data = {
                    payment_type: chequeData.payment_type,
                    amount: chequeData.amount,
                    bank_name: chequeData.bank_name,
                    cheque_code: chequeData.cheque_code,
                    payment_status: chequeData.payment_status
                   
                }
                console.log(data);
        console.log(chequeData.amount)
        Swal.fire({
            title: 'Save Payment?',
            text: "This will be added to customer payment",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post("api/payment" ,data).then(response =>{
                    console.log(response.data.status);
                    if(response.data.status ===200){
                        Swal.fire(
                            'Saved!',
                            'Payment Method saved.',
                            'success'
                          ).then((result) =>{
                              //this line will save the data.....
                              window.location.href = "/viewcustomer";
                          })
                    }
                    else if(response.data.status ===422){
                        Swal({
                            icon: "info",
                            title: response.data.message
        
                        });
                    }
                })
      
            }
          })
        // sweetAlert({
        //     icon: "success",
        //     title: "Nextpage"
        // });
    }

    return (
        <div>
            <Payment />
            <form onSubmit={savePayment} style={{ position: 'relative', bottom: 550, left: 450, width: 700 }}>
                <div className='row'>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Bank Name</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={handleChange} name='bank_name' type="text" placeholder="Bankname" className="form-control" aria-label="First name" />
                    </div>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Code</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={handleChange} name='cheque_code' type="text" placeholder="Code" className="form-control" aria-label="First name" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-start'><br /><br />
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Amount</label>
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={handleChange} name='amount' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" />
                    </div>
                    <div className='col text-start'><br /><br />
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Payment Status</label>
                        <select style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={handleChange} name='payment_status' type="text" placeholder="Status" className="form-control" aria-label="First name" >
                            <option>Paid</option>
                            <option>Not Paid</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-start'><br /><br />
                        <button className='btn btn-outline-dark btn-md w-25'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cheque