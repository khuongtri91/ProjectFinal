import React from 'react';
import "./style.css";
import UserList from '../UserList/UserList';

function home() {
    return (
        <div className='home'>
            {/* <ManagementAccount/> */}
            {/* <ManagementAccountType/> */}
            <UserList/>
            {/* chỗ ni là render ra thanh bên phải 
            vd: mi bấm vô chức năng nào thì hắn render ra cái form của chức năng đó
             */}
            {/* <ManagementDisease/> */}
        </div>
    );
}

export default home;