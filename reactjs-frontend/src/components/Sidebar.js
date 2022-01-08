// Left Navbars

import React from 'react';
import { Link } from 'react-router-dom';
import imageDate from '../images/image-1.svg';
import title from '../images/title.svg';
import profile from '../images/profile.svg';
import "../css/style.css";
import sweetAlert from 'sweetalert';

const change = (e) => {
    e.preventDefault();
    sweetAlert({
        icon: "success",
        title: "You are logging out..."
    }).then(response => {
        window.location.href = "/";
    })
}

const Sidebar = () => {
    return (
        <div className='container-fluid'>
            <div className='container float-start'>
                <img style={{ float: "left", width: 380, marginTop: -70, marginLeft: -40, padding: 0 }} src={title} alt="logo" />
                <div className='row container-fluid' style={{ position: "relative", top: -50, left: 20 }}>
                    <div className='col'>
                        <Link className='link-decoration' to={"/dashboard"}>
                            <i className="bi bi-grid-3x3-gap icon-color py-4" />
                            <p className='fs-5 fw-bold' style={{ paddingTop: 26, paddingRight: 70 }}>Overview</p>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link className='link-decoration' to={"/addrecord"}>
                            <i className="bi bi-calendar-date icon-color py-4" />
                            <p className='fs-5 fw-bold' style={{ paddingTop: 26, paddingRight: 57 }}>Reservation</p>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link className='link-decoration' to={"/customerStatus"}>
                            <i className="bi bi-person-lines-fill icon-color py-4" />
                            <p className='fs-5 fw-bold' style={{ paddingTop: 26, paddingRight: 20 }}>Customer Status</p>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link className='link-decoration' to={"/viewcustomer"}>
                            <i className="bi bi-clipboard-data icon-color py-4" />
                            <p className='fs-5 fw-bold' style={{ paddingTop: 26, paddingRight: 140, width: 400 }}>View Customer</p>
                        </Link>
                    </div>
                    <img alt='' style={{ position: 'relative', top: 30, left: -10, height: 280 }} src={imageDate} />
                </div>
            </div>
            <div className='container float-end'>
                <div className='row'>
                    <img className='profile' src={profile} alt="logo" />
                    <p className='fs-5 fw-bold user-name'>User Administrator</p>
                    <p>Project Manager</p>
                </div>
                <div className='row'>
                    <div className='col'><br />
                        {/* Notification */}
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 10, border: 0 }}>
                            <div className="card-body py-4" style={{ height: 90 }}>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='container rounded' style={{ backgroundColor: "#E9EAF5", width: 40, height: 40, marginRight: 100 }}>
                                            <i className="bi bi-bell-fill icon-color-notif" />
                                        </div>
                                        <Link className='nav-link' to='/notification'><p className='fw-bold text-dark' style={{ position: "relative", bottom: 60, left: 60, fontSize: 18 }}>Notifications</p></Link>
                                        <p className='text-secondary' style={{ position: "relative", bottom: 83, left: 90, fontSize: 12, textAlign: "left" }}>Announcements are<br /> posted here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Log Out */}
                    <div className='col'><br />
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 10, border: 0 }}>
                            <div className="card-body py-4" style={{ height: 90 }}>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='container rounded' style={{ backgroundColor: "#FDE9EC", width: 40, height: 40, marginRight: 100 }}>
                                            <i className="bi bi-box-arrow-right icon-color-logout" />
                                        </div>
                                        <a type='button' className='nav-link' onClick={change}><p className='fw-bold text-dark' style={{ position: "relative", bottom: 60, left: 40, fontSize: 18 }}>Log-out</p></a>
                                        <p className='text-secondary' style={{ position: "relative", bottom: 83, left: 53, fontSize: 12 }}>Log out sessions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Settings */}
                    <div className='col'><br />
                        <div className="card shadow bg-body rounded" style={{ marginLeft: 10, border: 0 }}>
                            <div className="card-body py-4" style={{ height: 90 }}>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='container rounded' style={{ backgroundColor: "rgba(0, 168, 191, 0.2)", width: 40, height: 40, marginRight: 100 }}>
                                            <i className="bi bi-gear-fill icon-color-settings" />
                                        </div>
                                        <Link className='nav-link' to='/notification'><p className='fw-bold text-dark' style={{ position: "relative", bottom: 60, left: 44, fontSize: 18 }}> Setting</p></Link>
                                        <p className='text-secondary' style={{ position: "relative", bottom: 83, left: 95, fontSize: 12, textAlign: "left" }}>Modify user name or password</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar
