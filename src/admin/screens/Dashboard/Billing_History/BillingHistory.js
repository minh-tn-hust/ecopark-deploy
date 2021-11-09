import './BillingHistory.css';
import nextpage from '../../image/nextpage.png';
import backpage from '../../image/Vector.png'
import deletepng from '../../image/trash-alt (1).png'
import avatar from '../../image/Avater.jpg'

function BillingHistory(){
    return(
        <div className="billingHistory">
            <h1>Transaction History</h1>
            <div className="listBill">
            <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Complete"></List>
            <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Pending"></List>
            <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Canceled"></List>
            <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Complete"></List>
            <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Complete"></List>
            </div>
            <Pagination pageNumber={1} quantityOfBill={100}></Pagination>
        </div>
    )
}

function List(props){
     const name = props.name
     const id = props.id
     const amount = props.amount
     const time = props.time
     const status = props.status
     const date = props.date
     return(
         <div className="list">
             <div>
                 <img className="avatar" src={avatar} alt="" />
                 <span className="nameUser">{name}</span>
             </div>
             <div className="id">{id}</div>
             <div className="amount">{amount}</div>
             <div>
                <span className="date">{date}</span>
                <span className="time">{time}</span>
             </div>
             <div className={status}>
             <span className="textStatus">{status}</span>
             </div>
             <button className="dot">
             <img src={deletepng} alt=""/>
             </button>
         </div>
     )
 } 

function Pagination(props){
    let pageNumber = props.pageNumber
    let quantityOfBill = props.quantityOfBill
    return(
        <div className="pagination">
            <div>
                <p id="S">Showing <span id="Onetosix">1-6</span> from <span id="quantityOfBill">{quantityOfBill}</span> data</p>
            </div>
            <div className="page">
                <button className="backPage">
                    <img src={backpage} alt=""/>
                </button>
                <button id="page1"  >{pageNumber}</button>
                <button id="page2" >{pageNumber + 1}</button>
                <button id="page3" >{pageNumber + 2}</button>
                <button className="nextPage">
                    <img src={nextpage} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default BillingHistory