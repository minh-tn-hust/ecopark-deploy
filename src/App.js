import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Dashboard from './admin/screens/Dashboard/Dashboard';
import MenuBar from './admin/shared/component/MenuBar/MenuBar';
import ListRe from './admin/screens/Dashboard/ListRe/ListRe';
import { ClimbingBoxLoader, ClipLoader, GridLoader, RotateLoader } from 'react-spinners';
import Login from './admin/screens/Login/Login';
import PendingHis from './Receptionist/screens/Dashboard/Pending/PendingHis';
import axios from 'axios';
import DashboardOfRecep from './admin/screens/Dashboard/Dashboard(receptionist)/DashboardOfRecep';
const LOGIN = "login"
const ADMIN = "admin"
const RECEP = "receptionist"
const STAFF = "staff"
const LOADING = "loading"
function App() {
  const [role, setRole] = useState("loading")
  const [isLogin, setLogin] = useState(true)
  async function tokenLogin() {
    var getRole = localStorage.getItem("role")
    let url = "https://nmcnpm.herokuapp.com/api/v1/" + getRole + "/login"
    console.log(url)

    var token = localStorage.getItem("token")
    console.log("TOKEN++++++++++++++++++++++++++++++++")
    console.log(token)
    if (token !== null) {
      console.log("AUTO LOGIN++++++++++++++++++=")
      await axios.post(url, {}, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
          console.log(res.data)
          const status = res.data.status
          if (status === "success") {
            setRole(getRole)
            localStorage.setItem("info", JSON.stringify(res.data.data))
          } else {
            setRole(LOGIN)
          }
        }).catch(function (error) {
          console.log(error);
          setRole(LOGIN)
        });
    } else {
      setRole(LOGIN)
    }
  }
  useEffect(() => {
    tokenLogin()
  }, [])
  function changeRole(value) {
    setRole(value)
  }
  if (role == LOADING) {
    return <Loading />
  }
  console.log("AAAAAAAAAAAAAAAAAAAAAAa" + role)
  return (
    <div>
      {
        (role == LOGIN) ? <Login callBack={(value) => changeRole(value)}></Login> :
          (role == ADMIN) ? <Admin callBack={() => setRole(LOGIN)} /> :
            (role == RECEP) ? <Recep callBack={() => setRole(LOGIN)} /> : <Staff />
      }
    </div>
  );
}

function Staff({ callBack }) {
  return <div>
    Staff login success
  </div>
}

function Recep({ callBack }) {
  function changeScreen(value) {
    setScreen(value)
  }

  const [screen, setScreen] = useState(1)
  return <div>
    <MenuBar
      callBack={changeScreen}
      titleBtn={["Dashboard", "Analysis Billing", "List User", "List Bike"]}
    >
    </MenuBar>
    {
      (screen == 2) ? <PendingHis></PendingHis> :
        (screen == 3) ? <ListStation></ListStation> :
          (screen == 4) ? <ListStaff></ListStaff> : <DashboardOfRecep callBack={() => callBack()} />

    }
  </div>
}

function Admin({ callBack }) {
  function changeScreen(value) {
    setScreen(value)
  }
  const [screen, setScreen] = useState(1)
  return <div>
    <MenuBar callBack={changeScreen}
      titleBtn={["Dashboard", "List Employee", "List Station", "List Bike"]}
    ></MenuBar>
    {
      (screen == 2) ? <ListRe></ListRe> :
        (screen == 3) ? <ListStation></ListStation> :
          (screen == 4) ? <ListStaff></ListStaff> : <Dashboard callBack={() => callBack()}></Dashboard>
    }
  </div>
}


function ListEmployee() {
  return <div style={{ position: "static", left: 500, height: 100, width: 1000, backgroundColor: "red" }}>
  </div>
}
function ListStation() {
  return <div style={{ left: 400, height: 100, width: 1000, backgroundColor: "green" }}>
  </div>
}
function ListStaff() {
  return <div style={{ left: 400, height: 100, width: 1000, backgroundColor: "blue" }}>
  </div>
}
function Loading() {
  return (<div style={{
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    height: "100vh",
    width: "100vw"
  }}>
    <GridLoader />
  </div>);
}
// return (
//   // <React.Fragment>
//   <div>
//     <PendingHis></PendingHis>;
//   </div>
//   // </React.Fragment>
// )
// }

export default App;
