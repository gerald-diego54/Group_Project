// Login
import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
import sweetAlert from "sweetalert";
import Link, { useNavigate } from "react-router-dom";
// import axios from "axios";
import "../css/style.css";
import imgtitle from "../images/image-title.svg";
import waveHand from "../images/waveHand.png";


const LogIn = () => {
    // const history = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        let username = document.querySelector("input[name='username']").value;
        let password = document.querySelector("input[name='password']").value;
        console.log(username, password);
        if (username == "admin" && password == "admin123") {
            sweetAlert({ icon: "success", text: "Welcome" }).then(() => {
                window.location.href = "/dashboard";
            });
        }
        else if (username == "" && password == "") return sweetAlert({icon: "info", text: "Input field required!"});
        else return sweetAlert({icon: "error", text: "Invalid username or password!" });
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 border-left"></div>

                <div className="col border-right border border-dark">
                    <br /><br /><br /><br /><br /><br /><br />
                    <form onSubmit={submitForm} className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col">
                                <img src={waveHand} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="welcome fs-3 fw-bold my-4">&nbsp;&nbsp;&nbsp;Welcome</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-5">
                                <div class="form-floating w-100 mx-3">
                                    <input type="text" class="form-control" name="username" placeholder="name@example.com" required />
                                    <label for="floatingInput" className="form-label">Username</label>
                                </div>
                            </div>
                        </div><br />
                        <div className="row justify-content-center">
                            <div className="col-5">
                                <div class="form-floating w-100 mx-3">
                                    <input type="password" class="form-control" name="password" placeholder="name@example.com" maxLength={12} required />
                                    <label for="floatingInput">Password</label>
                                </div>
                            </div>
                        </div><br />
                        <div className="row justify-content-center">
                            <div className="col-5">
                                <button type="submit" className="btn btn-lg btn-dark container">Log in</button>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-5">
                                <br /><br />
                                <p>Copyright 2021  ©  Leaf Fall Catering</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <img className="imgtitle" src={imgtitle} />
        </div>
    )
}

export default LogIn
