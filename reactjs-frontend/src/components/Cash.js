import React, { useState } from 'react';
import '../css/style.css';
import Payment from './Payment';
import sweetAlert from 'sweetalert';

const Cash = () => {
    const [amount, setAmount] = useState(0);
    const [downpayment, setDownpaymnet] = useState(0);
     let status;
    let collectibles = amount - downpayment;
    // console.log(status);
    if (amount === downpayment && amount != 0 && downpayment != 0){ 
        status = "Paid";
    }
    else if (collectibles === 0) {
        // total = 0.00;
        status = "Status";
    }
    else if (amount > downpayment) {
        status = "Not fully paid";
    } 

    const savePayment = (e) => {
        e.preventDefault();
        sweetAlert({
            icon: "success",
            title: "Payment Added"
        });
    }

    // use this for axios
    // const data = {
    //     payment_status: "Cash",
    //     amount: amount,
    //     downpayment: downpayment,
    //     status: status,
    //     collectibles: collectibles
    // }

    return (
        <div>
            <Payment />
            <form onSubmit={savePayment} style={{ position: 'relative', bottom: 550, left: 450, width: 700 }}>
                <div className='row'>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Amount</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={(e) => setAmount(e.target.value)} name='amount' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required/>
                    </div>
                    <div className='col text-start'>
                        {/* Event Type */}
                        <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Downpayment</label><br />
                        <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} onChange={(e) => setDownpaymnet(e.target.value)} name='downpayment' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required/>
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

export default Cash