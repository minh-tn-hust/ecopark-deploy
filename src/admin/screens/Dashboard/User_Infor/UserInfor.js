import Addresspng from '../../../screens/image/address.png'
import Emailpng from '../../../screens/image/email.png'
import Phonepng from '../../../screens/image/phone.png'
import Avtpng from '../../../screens/image/Avater.jpg'
import logout from '../../image/logout.png'
import changepasspng from '../../image/sync-alt.png'
import './UserInfor.css'

function UserInfor(props) {
    const tag = props.tag
    let info = JSON.parse(localStorage.getItem("info"))
    if (localStorage.getItem("role") === "admin") {
        info = {
            name: "Nguyễn Anh  Dũng",
            identifyNumber: "121212121",
            email: "dungdeptrai@yahu.com",
            phoneNumber: "0999999999"
        }
    }
    return (
        <div>
            <ProFile
                callBack={() => props.callBack()}
                avatar={Avtpng}
                name={info.name}
                tag={tag}
                phoneNumber={info.phoneNumber}
                email={info.email}
                idCode={info.identifyNumber}
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
        <div className="userInfor">
            <div id="Avartar">
                <img id="InsideAvt" src={avatar} alt="" />
            </div>
            <div className="line">
                <div className="line1">
                    <div className="name">
                        <span className="fullName">{name}</span>
                        <span className="tag">{tag}</span>
                    </div>
                    <button className="logOut" onClick={() => props.callBack()}>
                        <span className="insideLogOut">Logout</span>
                        <span className="LogOutimg">
                            <img src={logout} alt="" />
                        </span>
                    </button>
                </div>
                <div className="line2">
                    <div className="idDivision">
                        <div className="image">
                            <img src={Addresspng} alt="" />
                        </div>
                        <div className="titleOfInfor">Identity Code</div>
                        <div className="detail">{idCode}</div>
                    </div>
                    <div className="emailDivision">
                        <div className="image">
                            <img src={Emailpng} alt="" />
                        </div>
                        <div className="titleOfInfor">Email</div>
                        <div className="detail">{email}</div>
                    </div>
                    <div className="phoneDivision">
                        <div className="image">
                            <img src={Phonepng} alt="" />
                        </div>
                        <div className="titleOfInfor">Phone Number</div>
                        <div className="detail">{phoneNumber}</div>
                    </div>
                    <button className="changePass">
                        <span className="insideChangePass">Change password</span>
                        <div id="changepass">
                            <img src={changepasspng} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserInfor