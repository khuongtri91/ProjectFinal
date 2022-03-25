import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import './style.css';

function Signup() {
    const [date, setDate] = useState();

    useEffect(() => {
        console.log(date);
    }, [date])

    return (
        <div id="modal">          
            <div id="modal_middle"> 
                <Link to="/" id="modal_title">Healthy Care</Link>                      
                <Formik id="formDN" style={{position: 'relative'}} >
                    <Form style={{"position":"relative","display":"block","width":"42rem","height":"70rem", "border": "1px solid #e4e8ec", "boxShadow":"0.2rem 0.2rem 0.4rem rgba(0,0,0,0.05)","borderRadius": "1.6rem", "display" : "flex", "flexDirection": "column", "justifyContent": "center", "backgroundColor": "#fff"}}>
                        <div id="form_title">
                            <h3 id="form_title-text">Đăng ký</h3>
                        </div>
                        <span id="form_text1">Dùng email hoặc tài khoản mạng xã hội để đăng nhập hoặc đăng ký mới.</span>
                        <div id="formGroup">
                            <Field id="formGroup_input1" name="ten" placeholder="Nhập họ tên của bạn" autoComplete="off" />
                            <ErrorMessage name="ten" component="span" style={{display: 'block', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}} />
                            <span style={{display: 'none', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}}></span>
                            <Field id="formGroup_input2" name="email" placeholder="Nhập email của bạn" autoComplete="off" />
                            <ErrorMessage name="email" component="span" style={{display: 'block', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}} />
                            <span style={{display: 'none', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}}></span>
                            <Field id="formGroup_input1" name="soDienThoai" placeholder="Nhập số điện thoại của bạn" autoComplete="off" />
                            <ErrorMessage name="soDienThoai" component="span" style={{display: 'block', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}} />
                            <span style={{display: 'none', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}}></span>
                            <Field id="formGroup_input1" name="diaChi" placeholder="Nhập địa chỉ của bạn" autoComplete="off" />
                            <ErrorMessage name="diaChi" component="span" style={{display: 'block', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}} />
                            <span style={{display: 'none', color: 'red', textAlign: 'left', marginLeft: '2.8rem', marginTop: '.6rem', fontSize: '1.4rem'}}></span>                        
                            <div style={{display: 'flex', }}>
                                <label>Nhập ngày sinh của bạn</label>
                                <Field type="date" id="dateInfo" name="ngaySinh" onChange={e => setDate(e.target.value)}></Field>
                            </div>
                        </div>                     
                        <button id="formDN_btn" type="submit">Đăng ký</button>                             
                    </Form>
                </Formik>   
            </div>                         
        </div>
    )
}

export default Signup