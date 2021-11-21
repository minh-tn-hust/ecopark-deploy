import MenuBar from "../../../shared/component/MenuBar/MenuBar";
import BillingHistory from "../Billing_History/BillingHistory";
import PendingAcc from "../Pending_Account/PendingAcc";
import UserInfor from "../User_Infor/UserInfor";


function DashboardOfRecep({ callBack }) {
    return (
        <div>
            <PendingAcc></PendingAcc>
            <UserInfor
                tag="Receptionist in Ecopark BikeRenting"
                callBack={() => callBack()}
            >
            </UserInfor>
            <BillingHistory
                title="Income Billing History"
            >
            </BillingHistory>
        </div>
    )
}

export default DashboardOfRecep