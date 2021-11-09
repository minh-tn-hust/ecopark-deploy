import MenuBar from "../../shared/component/MenuBar/MenuBar";
import UserInfor from "../../screens/Dashboard/User_Infor/UserInfor";
import React, { Component } from "react";
import PendingAcc from "./Pending_Account/PendingAcc";
import BillingHistory from "./Billing_History/BillingHistory";


function Dashboard() {
  return (
    <div>
      <UserInfor></UserInfor>
      <PendingAcc></PendingAcc>
      <BillingHistory></BillingHistory>
    </div>
  )
}
export default Dashboard
