import React from 'react';
import "./style.css";
import ManagementAccount from '../ManagementAccount/ManagementAccount';
import ManagementAccountType from '../ManagementAccountType/ManagementAccountType';
import UserList from '../UserList/UserList';

function Admin() {
    return (
        <div>
            <div className="containers">
                <div className='sidebar'>
                    <div className="sidebarMenu">
                        <h3 className='sidebarTitle'>Chức năng Admin</h3>
                        <ul className='sidebarList'>
                            <li className='sibarListItem '>Quản Lý Tài Khoản</li>
                            <li className='sibarListItem'>Quản Lý Loại Tài Khoản</li>
                            <li className='sibarListItem'>Quản Lý Người Dùng</li>
                            <li className='sibarListItem'>Quản Lý Bệnh</li>
                        </ul>
                    </div>
                </div>
                <div className="home">
                    <UserList />
                </div>
            </div>
        </div>
    );
}

export default Admin;