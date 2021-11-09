import Addresspng from '../../../screens/image/address.png'
import Emailpng from '../../../screens/image/email.png'
import Phonepng from '../../../screens/image/phone.png'
import Avtpng from '../../../screens/image/Avater.jpg'
import logout from '../../image/logout.png'
import changepasspng from '../../image/sync-alt.png'
import './UserInfor.css'

function UserInfor() {
    return (
        <div>
            <ProFile
                avatar={Avtpng}
                name="Nguyễn Anh Dũng"
                tag="Admin in Ecopark BikeRenting"
                phoneNumber="0972873688"
                email="dung.na194255@sis.hust.edu.vn"
                idCode="12345689"
            >
            </ProFile>
        </div>
    )
}

function ProFile(props) {
    const avatar = props.avatar
    const name = props.name
    const tag = props.tag
    const phoneNumber = props.phoneNumber
    const email = props.email
    const idCode = props.idCode
    return (
        <div className="DB-userInfor">
            <img id="DB-Avartar" src={avatar} alt="" />
            <div className="DB-name">
                <h1 className="DB-fullName">{name}</h1>
                <span className="DB-tag">{tag}</span>
            </div>
            <button className="DB-changePass">
                <span className="DB-insideChangePass">Change password</span>
                <img id="DB-changepass" src={changepasspng} alt="" />
            </button>
            <button className="DB-logOut">
                <span className="DB-insideLogOut">Logout</span>
                <img id="DB-LogOut" src={logout} alt="" />
            </button>
            <div className="DB-idDivision">
                <img className="DB-image" src={Addresspng} alt="" />
                <span className="DB-titleOfInfor">Identity Code</span>
                <span className="DB-detail">{idCode}</span>
            </div>
            <div className="DB-emailDivision">
                <img className="DB-image" src={Emailpng} alt="" />
                <span className="DB-titleOfInfor">Email</span>
                <span className="DB-detail">{email}</span>
            </div>
            <div className="DB-phoneDivision">
                <img className="DB-image" src={Phonepng} alt="" />
                <span className="DB-titleOfInfor">Phone Number</span>
                <span className="DB-detail">{phoneNumber}</span>
            </div>
        </div>
    )
}
export default UserInfor