import React from 'react';
import { ItemBox, NavWrapper } from './NavBar.styles';
import { NavLink, useMatch } from 'react-router-dom';
import InactiveSave from '../../assets/icons/ico_save_inactive.svg';
import ActiveSave from '../../assets/icons/ico_save_active.svg';
import InactiveMeasure from '../../assets/icons/ico_measure_inactive.svg';
import ActiveMeasure from '../../assets/icons/ico_measure_active.svg';
import InactiveMap from '../../assets/icons/ico_map_inactive.svg';
import ActiveMap from '../../assets/icons/ico_map_active.svg';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/menu/menuSlice';

const NavBar = () => {
    const dispatch = useDispatch();

    const isMapActive = useMatch("/");
    const isMeasureActive = useMatch("/measure");
    const isSaveActive = useMatch("/save");

    const handleMenuClick = (menu: string) => {
        if (menu === "measure") {
            dispatch(toggleMenu(isMeasureActive ? false : true));
        } else if (menu === "map") {
            dispatch(toggleMenu(isMapActive ? false : true));
        } else if (menu === "save") {
            dispatch(toggleMenu(isSaveActive ? false : true));
        }
    };

    return (
        <NavWrapper>
            <ItemBox>
            <li onClick={() => handleMenuClick("measure")}>
                    <NavLink 
                        to={"/measure"} 
                        className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                    >
                        <div>
                            <img src={ isMeasureActive ? ActiveMeasure : InactiveMeasure} alt='measure'/>
                        </div>
                        <div>
                            소음 측정
                        </div>
                    </NavLink>
                </li>
                <li onClick={() => handleMenuClick("map")}>
                    <NavLink 
                        to={"/"} 
                        className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                    >
                        <div>
                            <img src={isMapActive ? ActiveMap : InactiveMap } alt='map'/>
                        </div>
                        <div>
                           소음 지도
                        </div>
                    </NavLink>
                </li>
                <li onClick={() => handleMenuClick("save")}>
                    <NavLink 
                        to={"/save"} 
                        className={({ isActive }) => isActive ? "active-item" : "inactive-item"}
                    >
                            <div>
                                <img src={isSaveActive ? ActiveSave : InactiveSave } alt='save'/>
                            </div>
                            <div>저장</div>
                    </NavLink>
                </li>
            </ItemBox>
        </NavWrapper>
    );
};

export default NavBar;