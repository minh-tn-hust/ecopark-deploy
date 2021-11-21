import MenuBar from "../../shared/component/MenuBar/MenuBar";
import UserInfor from "../../screens/Dashboard/User_Infor/UserInfor";
import React, { Component } from "react";
import PendingAcc from "./Pending_Account/PendingAcc";
import BillingHistory from "./Billing_History/BillingHistory";
import '../Dashboard/Dashboard.css'

function Dashboard({ callBack }) {
  return (
    <div className="adminDashboard">
      <UserInfor tag="Admin in Ecopark BikeRenting" callBack={() => callBack()}></UserInfor>
      <PendingAcc></PendingAcc>
      <BillingHistory
        title="Transaction History"
      >
      </BillingHistory>
    </div>
  )
}
export default Dashboard
