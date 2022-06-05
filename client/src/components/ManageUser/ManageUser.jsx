import React from "react";
import "./style.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

function ManageUser() {

  function handleDelete() {
    if(!(window.confirm('Are you sure you want to delete'))) return false;
    else console.log(1);
  }

  return (
    <>   
        <br />      
        <Link class="btn btn-primary mb-4" to="/Admin/AddUserForm" style={{fontSize: '1.2rem', marginLeft: '1.8rem'}}>Add</Link>
        <div style={{marginRight: '.4rem'}}>	
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th>Tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Giới tính</th>
                <th>Ngày sinh</th>
                <th>Ảnh</th>
                <th>Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lâm Khương Trí</td>
                <td>0942345981</td>
                <td>tri@gmail.com</td>
                <td>23 Lê Duẩn</td>
                <td>Nam</td>
                <td>27/05/2000</td>
                <td>chibi.jpg</td>      
                <td>
                  <Link to="/Admin/UpdateUserForm" class="btn btn-info mr-3" style={{fontSize: '1.2rem'}}>Update</Link>           
                </td>
              </tr>
              <tr>
                <td>Lâm Khương Trí</td>
                <td>0942345981</td>
                <td>tri@gmail.com</td>
                <td>23 Lê Duẩn</td>
                <td>Nam</td>
                <td>27/05/2000</td>
                <td>chibi.jpg</td>      
                <td>
                  <Link to="/Admin/UpdateUserForm" class="btn btn-info mr-3" style={{fontSize: '1.2rem'}}>Update</Link>           
                </td>
              </tr>
            </tbody>          
          </table>
        </div>
    </>
  );
}

export default ManageUser;