import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Payment from './Payment';
import sweetAlert from 'sweetalert';

const Cheque = () => {
    const savePayment = (e) => {
        e.preventDefault();
        sweetAlert({
            icon: "success",
            title: "Nextpage"
        });
    }

    return (
        <div>
            <Payment />
            <form onSubmit={savePayment} style={{ position: 'relative', bottom: 550, left: 450, width: 700 }}>
                <div className='row'>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Bank Name</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} name='amount' type="text" placeholder="Amount" className="form-control" aria-label="First name" />
                    </div>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Code</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} name='cheque_code' type="text" placeholder="Code" className="form-control" aria-label="First name" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-start'><br /><br />
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Amount</label>
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} name='amount' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" disabled />
                    </div>
                    <div className='col text-start'><br /><br />
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Payment Status</label>
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} name='payment_status' type="text" placeholder="Status" className="form-control" aria-label="First name" disabled />
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