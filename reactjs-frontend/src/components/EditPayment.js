import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
// import UserDetails from './UserDetails';
import fieldset3 from '../images/fieldset_3.svg';
import '../css/style.css';
import axios from 'axios';
import sweetAlert from 'sweetalert';
// import Cash from './Cash';
import { useNavigate, useParams } from 'react-router-dom';
import { Time } from './Time';

const EditPayment = () => {
    var history = useNavigate();
    const [paymentType, setPaymentType] = useState([]);
    const { id } = useParams();
    const [Values, setValues] = useState({});
    const [amount, setAmount] = useState(0);
    const [downpayment, setDownpaymnet] = useState(0);
    const [Data, setData] = useState({});
    let status;
    let collectibles = amount - downpayment;
    console.table(Values);
    useEffect(() => {
        // const id = id;
        axios.get(`api/editpayment/${id}`).then(
            response => {
                console.log(response.data.status)
                if (response.data.status === 200) {
                    setValues(response.data.payments);
                    // setLoading(false);\
                    console.log(Values.payment_type);
                    // setPaymentType(response.data.payments)
                }
                else if (response.data.status === 404) {
                    sweetAlert('error', response.data.message).then(response => {
                        window.location.href = "/editcustomer";
                    });
                }
            });
    }, [id]);

    const savePayment = (e) => {
        e.preventDefault();
        window.location.href = `/viewcustomer/editcheque/${id}`;
    }


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
                    <img alt='' className='my-4' src={fieldset3} />
                    <form onSubmit={savePayment} style={{ position: "relative", bottom: 440, left: 70 }}>
                        <div className='row lh-lg'>
                            <div className='col text-start'>
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Select Payment type</label><br />
                                {/* onChange={(e) => setPaymentType(e.target.value)} */}
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={Values.payment_type} name='payment_type' type="text" className="form-control" aria-label="payment type" />
                            </div>
                        </div><br />
                        <div className='row'>
                            <div className='col text-start'>
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Amount</label><br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={Values.amount} onChange={(e) => setAmount(e.target.value)} name='amount' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required />
                            </div>
                            <div className='col text-start'>
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Downpayment</label><br />
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={Values.downpayment} onChange={(e) => setDownpaymnet(e.target.value)} name='downpayment' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" required />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-start'><br /><br />
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Collectibles</label>
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={Values.collectibles} name='collectibles' type="text" placeholder="Php 0.00" className="form-control" aria-label="First name" disabled />
                            </div>
                            <div className='col text-start'><br /><br />
                                {/* Event Type */}
                                <label className='fw-bold' style={{ color: "#263056", fontSize: 18 }}>Payment Status</label>
                                <input style={{ backgroundColor: "#F5F6FA", color: "#878787", width: 300 }} value={Values.payment_status} name='payment_status' type="text" placeholder="Status" className="form-control" aria-label="First name" disabled />
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
        </div>
    )
}

export default EditPayment