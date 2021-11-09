import './SearchBar.css'
import React, { useState, useEffect } from 'react';
import Logo from '../../../../../shared/icons/Search.png'
import Trash from '../../../../../shared/icons/Trash.png'
import Add_and_editEmployee from '../../../ListEmployee/Add_edit_employee/addandeditEmployee';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
function SearchBar({ list, callBack, role }) {
  const [isEditing, setEditing] = useState(false)
  const [listDelete, setListDelete] = useState([])
  const [loading, setLoading] = useState(false)
  async function deleteMember(id) {
    console.log("BEGIN DELETING WITH ID================")
    const url = `https://nmcnpm.herokuapp.com/api/v1/accounts/delete?type=${(role[0]) ? "receptionist" : "staff"}/` + id
    console.log(url)
    console.log(url)
    var status = true
    const token = localStorage.getItem("token")
    await axios.delete(url, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        status = true
      }).catch(function (error) {
        status = false
      });
    return status
  }

  console.log(listDelete)

  useEffect(() => {
    console.log("SearchBar=================================")
    setListDelete(list)
  }, [list])
  return (
    <div>
      {
        (isEditing) &&
        <Add_and_editEmployee callBack={() => { setEditing(false); callBack() }} isAdd={true}></Add_and_editEmployee>
      }
      <div className="Bar">
        <div className="Bao">
          <img className="Search" src={Logo} />
          <input className={"input"} placeholder="Search here..."></input>
        </div>
        <a className="Delete" href="#" onClick={async () => {
          console.log("List member deleteeeeeeeeeeeeeeeeeeeeeeeeeeee")
          setLoading(true)
          if (listDelete.length != 0) {
            setListDelete(true)
            console.log(listDelete)
            var list = []
            for (var i = 0; i < listDelete.length; i++) {
              const check = await deleteMember(listDelete[i])
              if (check != true) {
                list.push(listDelete[i])
              }
            }
            console.log(list)
            if (list.length != 0) {
              alert("Some member can't delete, please try again")
              setListDelete([])
              callBack()
            } else {
              alert("Delete successful")
              setListDelete([])
              callBack()
            }
            setLoading(false)
            console.log("ENDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD List MEMBER")
          }
        }
        } >
          {
            (loading) ? <PropagateLoader /> : <div>
              Delete
              <img id="Trash" src={Trash} />
            </div>
          }
        </a>
        <a className="Newmember" href="#" onClick={() => {
          setEditing(true)
        }}>New member +</a>
      </div >

    </div >

  );
}

export default SearchBar;
