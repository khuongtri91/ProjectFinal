import React, { useRef } from "react";
import "./style.css";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Link, userNavigate } from 'react-router-dom';

function AddUserForm() {
    const ns = useRef();

    const initialValues = {
        ten: "", email: "", matKhau: "", soDienThoai: "", diaChi: "", ngaySinh: "", gioiTinh: "", anh: ""
    }
    const validationSchema = Yup.object().shape({
        ten: Yup.string()
            .required("Tên không được để trống")
            .matches(/[^-_+=<!@#$%^&*({})>]+$/, "Tên không được chứa ký tự đặc biệt")
            .min(4, 'Tên phải chứa ít nhất 4 ký tự')
            .max(70, 'Tên chỉ chứa tôí đa 70 ký tự'),           
        email: Yup.string()
            .required("Tên email không được để trống")
            .matches(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/, "Sai định dạng email"),
        matKhau: Yup.string()
            .required("Mật khẩu không được để trống")
            .matches(/^\S+$/, 'Mật khẩu không được có ký tự trắng')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/, 'Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ in hoa, 1 chữ số và 1 ký tự đặc biệt')
            .min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự')
            .max(50, 'Mật khẩu chỉ chứa tối đa 50 ký tự'),
        soDienThoai: Yup.string()
            .required("Số điện thoại không được để trống")
            .matches(/^\S+$/, 'Số điện thoại không được có ký tự trắng')
            .matches(/^\d+$/, 'Số điện thoại phải là chữ số')
            .min(10, 'Số điện thoại phải chứa ít nhất 10 ký tự')
            .max(20, 'Số điện thoại chỉ chứa tối đa 20 ký tự'),
        diaChi: Yup.string()
            .required("Địa chỉ không được để trống")
            .matches(/[^-_+=<!@#$%^&*({})>]+$/, "Địa chỉ không được chứa ký tự đặc biệt")        
            .min(6, 'Địa chỉ phải chứa ít nhất 6 ký tự')
            .max(70, 'Địa chỉ không được vượt quá 70 ký tự')
    })

    async function handleSubmit(formData, { setSubmitting, resetForm }) {

    }
    function handleImage() {

    }

    return (
        <div className="container mt-3">
            <h2>Add User Form</h2> 
            <hr />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} className="w-75" >
                <Form className="w-50" >
                    <Field type="text" name="ten" placeholder="Tên" className="formGroup_input" autoComplete="off" />
                    <ErrorMessage name="ten" component="span" class="errorMessage" />
                    <Field type="text" name="soDienThoai" placeholder="Số điện thoại" className="formGroup_input" autoComplete="off" />
                    <ErrorMessage name="soDienThoai" component="span" class="errorMessage" />
                    <Field type="text" name="email" placeholder="Email" className="formGroup_input" autoComplete="off" />
                    <ErrorMessage name="email" component="span" class="errorMessage" />
                    <Field type="text" name="diaChi" placeholder="Địa chỉ" className="formGroup_input" autoComplete="off" />
                    <ErrorMessage name="diaChi" component="span" class="errorMessage" />
                    <div style={{display: 'flex', marginTop: '1.4rem', alignItems: 'center'}}>
                        <label>Chọn giới tính của bạn</label>
                        <div style={{marginLeft: '1.2rem', marginTop: '0.2rem'}}>                                       
                            <Field type="radio" name="gioiTinh" />
                            <label>Nam</label>
                        </div>
                        <div style={{marginLeft: '1.2rem', marginTop: '0.2rem'}}>                                       
                            <Field type="radio" name="gioiTinh" />
                            <label>Nữ</label>
                        </div>                                
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '.4rem'}}>
                        <label>Chọn ngày sinh của bạn</label>
                        <Field type="date" id="dateInfo" name="ngaySinh" />
                        <span style={{display: 'none', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}} ref={ns}>Ngày sinh không được để trống</span>                             
                    </div>
                    <div style={{marginTop: '.4rem'}}>
                        <label>Chọn ảnh của bạn (dưới đây là ảnh mặc định)</label>
                        <Field type="file" name="anh" onChange={handleImage} />
                    </div>
                    <div className="preview">
                        <img className="preview_image" src="/images/dtb/chibi.jpg" alt="" style={{display: 'block'}} />                      
                    </div>
                    <button type="submit" className="btn btn-info mt-3 col-2" style={{fontSize: '1.2rem'}}>Add</button>                   
                </Form>
            </Formik>
            <hr />          
            <Link to="/Admin" style={{color: 'blue', textDecoration: 'underline', fontSize: '1.8rem'}}>Quay về trang quản lý</Link>      
        </div>
    );
}

export default AddUserForm;