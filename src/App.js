import './App.css';
import React, { Component, useState } from 'react';
import Dashboard from './admin/screens/Dashboard/Dashboard';
import MenuBar from './admin/shared/component/MenuBar/MenuBar';
import ListRe from './admin/screens/Dashboard/ListRe/ListRe';
import { ClipLoader } from 'react-spinners';
import Login from './admin/screens/Login/Login';

function App() {
  const [screen, setScreen] = useState(0)
  function changeScreen(value) {
    setScreen(value)
  }
  return (
    <div>
      {
        (screen == 0) && <Login callBack={() => setScreen(1)}></Login>
      }
      {
        (screen != 0) && < div >
          <MenuBar callBack={changeScreen}></MenuBar>
          {
            (screen == 2) ? <ListRe></ListRe> :
              (screen == 3) ? <ListStation></ListStation> :
                (screen == 4) ? <ListStaff></ListStaff> : <Dashboard></Dashboard>
          }
        </div>
      }
    </div >
  );
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
export default App;
