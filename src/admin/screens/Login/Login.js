import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputWithValidate from '../../../shared/components/InputWithValidate';
import { validateEmail, validatePassword } from '../../../shared/components/Validate';
import LoginLogo from "../../../shared/images/login-logo.png"
import './Login.css'
import { CircleLoader, PacmanLoader, PropagateLoader } from 'react-spinners';

function Login({ callBack }) {
    async function postData(username, password) {
        const url = 'https://nmcnpm.herokuapp.com/api/v1/' + role + '/login'
        const data = {
            email: username,
            password: password,
        }
        setIsLoading(true)
        const response = await axios.post(url, data).then(function (response) {
            const getData = (response.data)
            console.log(getData)
            console.log(getData.status)
            if (getData.status === "fail") {
                const message = getData.msg
                if (message.includes('email')) {
                    setServerMessage([message, serverMessage[1]])
                } else {
                    setServerMessage([serverMessage[0], message])
                }
            } else {
                localStorage.setItem("role", role)
                localStorage.setItem("token", getData.token)
                localStorage.setItem("info", JSON.stringify(getData.data))
                callBack(role)
            }
        }).catch(function (error) {
            console.log(error);
        });
        setIsLoading(false)
    }
    const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [needValidateState, setValidate] = useState(1)
    const [serverMessage, setServerMessage] = useState(["", ""])
    const [role, setRole] = useState("admin")
    return (
        <div className="login-screen">
            <div className="login-left-layout">
                <img src={LoginLogo} style={{
                    width: "60%",
                    height: "auto",
                }} />
            </div>
            <div className="login-right-layout">
                <div className="login-form">
                    <h1 style={{
                        position: "static",
                        marginLeft: 0,
                        marginBottom: 16,
                    }}>Login</h1>
                    <h5>Email</h5>
                    <InputWithValidate
                        message={serverMessage[0]}
                        className="login-input"
                        valueState={username}
                        needValidateState={needValidateState}
                        callBack={(value) => setUsername(value)}
                        validate={validateEmail} />
                    <h5>Password</h5>
                    <InputWithValidate
                        message={serverMessage[1]}
                        password={true}
                        callBack={(value) => setPassword(value)}
                        className="login-input"
                        valueState={password}
                        needValidateState={needValidateState}
                        validate={validatePassword} />
                    <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: 50
                    }}>
                        <button disabled={isLoading} className="login-button" onClick={() => {
                            setValidate(needValidateState + 1)
                            setServerMessage(["", ""])
                            if (validateEmail(username) == "" && validatePassword(password) == "") {
                                postData(username, password)
                            }
                        }}>{(isLoading) ? <PropagateLoader color="white" size={10} /> : "Sign In"}</button>
                        {/* <a href="#" className="forgot">Forgot Password</a> */}
                        <select name="cars" id="cars" className="login-button" onChange={(e) => {
                            setRole(e.target.value)
                            console.log(e.target.value)
                        }}>
                            <option value="admin">Admin</option>
                            <option value="receptionist">Receptionist</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
