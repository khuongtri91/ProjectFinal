import React from 'react'
import ManagementAccount from '../components/ManagementAccount/ManagementAccount';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ManageAccount() {
  return (
    <>
        <Header />
            <ManagementAccount />
        <Footer />
    </>
  )
}

export default ManageAccount;