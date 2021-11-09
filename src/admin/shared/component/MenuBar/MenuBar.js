import Logo from '../../../screens/image/Logo.png';
import Dashboardpng from '../../../screens/image/Dashboard.png';
import List_bike from '../../../screens/image/List_bike.png';
import List_Employeepng from '../../../screens/image/Realemp.png';
import List_stationpng from '../../../screens/image/List_station.png';
import SeListBike from '../../../screens/image/se-list-bike.png';
import SeListEmp from '../../../screens/image/re-list-emp.png';
import SeDashBoard from '../../../screens/image/se-dashoard.png';
import SeListStation from '../../../screens/image/selistStation.png';

import './MenuBar.css'
import { useState, useEffect } from 'react';

function MenuBar(props) {
    const [screen, setScreen] = useState([true, false, false, false])
    const changeScreenCallBack = props.callBack;
    function changeScreen(value) {
        var list = []
        for (var i = 0; i < 4; i++) {
            if (i == value)
                list.push(true)
            else
                list.push(false)
        }
        setScreen(list)
    }
    return (
        <div id="MenuBar">
            <img className="logo" src={Logo} alt="logo" />
            <div className="List">
                <MenuButton isSelected={screen[0]} icon={[Dashboardpng, SeDashBoard]} title="Dashboard" onPress={() => {
                    changeScreen(0)
                    changeScreenCallBack(1)
                }}></MenuButton>
                <MenuButton isSelected={screen[1]} icon={[List_Employeepng, SeListEmp]} title="List Employee" onPress={() => {
                    changeScreen(1)
                    changeScreenCallBack(2)
                }}></MenuButton>
                <MenuButton isSelected={screen[2]} icon={[List_stationpng, SeListStation]} title="Stations" onPress={() => {
                    changeScreen(2)
                    changeScreenCallBack(3)
                }}></MenuButton>
                <MenuButton isSelected={screen[3]} icon={[List_bike, SeListBike]} title="Bikes" onPress={() => {
                    changeScreen(3)
                    changeScreenCallBack(4)
                }}></MenuButton>
            </div>
        </div>
    )
}

function MenuButton(props) {
    const [isSelected, setIsSelected] = useState(props.isSelected)
    const title = props.title
    const onPress = props.onPress
    const icon = props.icon
    function changeSelected() {
        setIsSelected(!isSelected)
    }
    useEffect(() => {
        setIsSelected(props.isSelected)
    }, [props])
    return (
        <button className={(isSelected) ? "seButton" : "button"} onClick={() => {
            props.onPress()
            changeSelected()
        }}>
            <div className="icon">
                <img src={(isSelected) ? icon[1] : icon[0]} alt="icon" />
            </div>
            <div className={(isSelected) ? "titleOfSebutton" : "titleOfButton"}>
                <span className="db">{title}</span>
            </div>
        </button>
    )
}
export default MenuBar;