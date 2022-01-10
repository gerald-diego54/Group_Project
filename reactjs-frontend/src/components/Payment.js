import React, { useState } from 'react';
import Sidebar from './Sidebar';
// import UserDetails from './UserDetails';
// import fieldset3 from '../images/fieldset_3.svg';
import '../css/style.css';
// import axios from 'axios';
// import sweetAlert from 'sweetalert';
// import Cash from './Cash';
import { useNavigate } from 'react-router-dom';
import { Time } from './Time';

const Payment = () => {
    var history = useNavigate();
    const [paymentType, setPaymentType] = useState([]);
    // const handleChange = (e) => {
    // let payment = document.getElementById("payment_type").value;
    // setPaymentType({ ...paymentType, [e.target.name]: e.target.value })
    // }
    // if (paymentType == "Cash") {
    const handleChange = (e) => {
        history(`/${e.target.value}`);

    }
    // }


    return (
        <div>
            <Sidebar />
            <div className='container' style={{ width: 1056, height: 900, marginLeft: 340, marginTop: 0 }}>
                <div className='row'>
                    <div className='col'>
                        <p className='fs-3 fw-bold' style={{ float: "left", marginLeft: 20, marginTop: 20 }}>Reservation</p>  <Time />
                    </div>
                </div><br />
                <div className='container bg-white rounded shadow' style={{ width: 1000, height: 600 }}><br />
                    {/* FieldSet 1 */}
                    {/* <img alt='' className='my-4' src={fieldset3} /> */}
                    <form style={{ position: "relative", bottom: 440, left: 70 }}>
                        <div className='row lh-lg'>
                            <div className='col text-start'>
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Event Status</label><br />
                                <select style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={paymentType.payment_type} onChange={handleChange} name='payment_type' type="text" className="form-control" aria-label="payment type">
                                    <option>-- Select --</option>
                                    <option value="cashway">Cash</option>
                                    <option value="chequeway">Cheque</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment