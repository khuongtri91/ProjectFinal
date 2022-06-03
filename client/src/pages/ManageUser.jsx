import React from 'react';
import UserList from '../components/UserList/UserList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ManageUser() {
  return (
    <>
        <Header />
            <UserList />
        <Footer />
    </>
  )
}

export default ManageUser;