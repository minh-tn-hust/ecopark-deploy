import React, { Component, useEffect, useState } from 'react';
import './popup.css';
import InputWithValidate from './../../../../shared/components/InputWithValidate'
import { validateEmail, validateIdCode, validatePassword, validatePhone } from '../../../../shared/components/Validate';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
function Add_and_editEmployee({ callBack, infor, isAdd }) {
  const [info, updateInfo] = useState({
    name: (infor != undefined) ? infor.name : '',
    identifyNumber: (infor != undefined) ? infor.identifyNumber : '',
    userName: (infor != undefined) ? infor.userName : '',
    address: (infor != undefined) ? infor.address : '',
    birth: (infor != undefined) ? infor.birth : '',
    phoneNumber: (infor != undefined) ? infor.phoneNumber : '',
    password: (infor != undefined) ? infor.password : '',
    email: (infor != undefined) ? infor.email : ''
  })
  const [role, updateRole] = useState((infor == undefined) ? 1 : (infor.role == "staff") ? 2 : 1)
  const [submit, submitState] = useState(false);
  const submitted = () => {
    submitState(true);
    alert(info)
  }
  const [loading, setLoading] = useState(false)
  const [needValidate, setValidate] = useState(1)

  async function editMember() {
    setLoading(true)
    console.log(infor._id)
    console.log("Begin============")
    const url = 'https://nmcnpm.herokuapp.com/api/v1/accounts/edit?type=' + ((role == 1) ? "receptionist/" : "staff/") + infor._id
    console.log(url)
    const token = localStorage.getItem("token")
    const data = {
      identifyNumber: info.identifyNumber,
      userName: info.userName,
      password: info.password,
      email: info.email,
      phoneNumber: info.phoneNumber,
      address: info.address,
      name: info.name,
    }
    await axios.post(url, data, {
      headers: { "Authorization": `Bearer ${token}` },
    })
      .then(res => {
        console.log(res.data)
        if (res.data.status == "success") {
          window.confirm("Editing successfull")
          callBack()
        } else {
          window.confirm("Somethings wrong in process, please try again")
        }
      }).catch(function (error) {
        console.log(error);
        console.log("END=============")
      });
    setLoading(false)
  }
  async function addNewMember() {
    setLoading(true)
    console.log("Begin============")
    const url = 'https://nmcnpm.herokuapp.com/api/v1/accounts/add?type=' + ((role == 1) ? "receptionist" : "staff")
    console.log(url)
    const token = localStorage.getItem("token")
    const data = {
      identifyNumber: info.identifyNumber,
      userName: info.userName,
      password: info.password,
      email: info.email,
      phoneNumber: info.phoneNumber,
      address: info.address,
      name: info.name,
    }
    await axios.post(url, data, {
      headers: { "Authorization": `Bearer ${token}` },
    })
      .then(res => {
        console.log(res.data)
        if (res.data.status == "success") {
          window.confirm("Adding successfull")
          callBack()
        } else {
          window.confirm(res.data.msg)
        }
      }).catch(function (error) {
        console.log(error);
        console.log("END=============")
      });
    setLoading(false)
  }

  return (
    <div className="pops-up-menu">
      <button type="button" className="button1" onClick={() => { callBack() }} />
      <h1>Adding/Editting Employee</h1>
      <div className="content">
        {/* left menu  start*/}
        <div style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          paddingLeft: 30,
          paddingRight: 30,
        }}>
          <h2 style={{ position: "relative", }}>Department</h2>
          <div style={{
            backgroundColor: (role == 1) ? "#6160DC" : "grey",
            height: 54,
            borderRadius: 20,
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "bold"
          }}
            onClick={() => {
              if (isAdd != undefined)
                updateRole(1)
            }}
          >Receptionist</div>
          <div
            style={{
              marginTop: 10,
              backgroundColor: (role == 2) ? "#6160DC" : "grey",
              height: 54,
              borderRadius: 20,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold"
            }}
            onClick={() => {
              if (isAdd != undefined)
                updateRole(2)
            }}

          >Staff</div>
          {/* <span className="switcher switcher-2">
            <input type="checkbox" id="switcher-2" />
            <label htmlFor="switcher-2" />
          </span> */}
        </div>
        {/* left menu  end*/}
        {/* right menu  start*/}
        <div className="right-menu">
          <h2>Account</h2><br />
          <form name="employee">
            <div className="left">
              <label htmlFor="name">Name</label><br />
              <InputWithValidate
                elementId="name"
                callBack={value => updateInfo({ ...info, name: value })}
                validate={validateString} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.name}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <label htmlFor="id-code">Indentify Code</label><br />
              <InputWithValidate
                elementId="id-code"
                callBack={value => updateInfo({ ...info, identifyNumber: value })}
                validate={validateIdCode}
                needValidateState={needValidate}
                message=""
                valueState={info.identifyNumber}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <label htmlFor="userName">Username</label><br />
              <InputWithValidate
                elementId="username"
                callBack={value => updateInfo({ ...info, userName: value })}
                validate={validateString} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.userName}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <label htmlFor="address">Address</label><br />
              <InputWithValidate
                elementId="address"
                callBack={value => updateInfo({ ...info, address: value })}
                validate={validateString} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.address}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
            </div>
            <div className="right">
              <label htmlFor="date-of-birth">Date of birth</label><br />
              <InputWithValidate
                elementId="date-of-birth"
                callBack={value => updateInfo({ ...info, birth: value })}
                validate={validateString} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.birth}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <label htmlFor="phoneNumber">Phone number</label><br />
              <InputWithValidate
                elementId="phoneNumber"
                callBack={value => updateInfo({ ...info, phoneNumber: value })}
                validate={validatePhone} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.phoneNumber}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <label htmlFor="password">Password</label><br />
              <InputWithValidate
                elementId="password"
                callBack={value => updateInfo({ ...info, password: value })}
                validate={validatePassword} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.password}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <label htmlFor="email">Email</label><br />
              <InputWithValidate
                elementId="email"
                callBack={value => updateInfo({ ...info, email: value })}
                validate={validateEmail} // Luôn đúng 
                needValidateState={needValidate}
                message=""
                valueState={info.email}
                stylesMessage={{
                  paddingLeft: 20,
                }}
                styles={{
                  marginBottom: 15,
                }}
              />
              <button type="button" className="button save" onClick={() => {
                setValidate(needValidate + 1)
                const checkEmail = (validateEmail(info.email) === "")
                const checkIdCode = (validateIdCode(info.identifyNumber) === "")
                const checkPhone = (validatePhone(info.phoneNumber) === "")
                const checkPassword = (validatePassword(info.password) === "")
                if (checkEmail && checkIdCode && checkPassword && checkPhone) {
                  if (isAdd) {
                    console.log("Add a new member")
                    addNewMember()
                  } else {
                    editMember()
                    console.log("Edit a member")
                  }
                } else {
                  console.log("Noooooooooooooo")
                }
              }
              }>
                {
                  (loading) ?
                    <PropagateLoader color="white" /> : (isAdd) ? "Add new member" : "Edit this member"
                }
              </button>
            </div>
          </form>
        </div>
        {/* right menu  end*/}
      </div>
    </div>
  );
}
function validateString(value) {
  if (value == "") { return "This field is required" } else return ""
}
export default Add_and_editEmployee;
