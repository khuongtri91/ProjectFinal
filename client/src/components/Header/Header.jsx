import React, { useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { setCookie, getCookie, removeCookie } from '../../cookie/cookieHandler.js';

function Header() {
  const navigate = useNavigate();
  const userInfo = getCookie('userAccess').split(',');
  const image1 = useRef(), image2 = useRef(), sisoBlock = useRef(), k = useRef(1), loginSuccess = useRef();
  
  useLayoutEffect(() => {
    if(userInfo[0] !== '') {
      sisoBlock.current.style.display = 'none';
      loginSuccess.current.style.display = 'block';
      image1.current.setAttribute('src', `images/dtb/${userInfo[7]}`);
      image2.current.setAttribute('src', `images/dtb/${userInfo[7]}`);
    }
    else {
      sisoBlock.current.style.display = 'block';
      loginSuccess.current.style.display = 'none';
    }
  }, [userInfo])
  function handleLogout() {
    let signinInfo = document.querySelector('.signin_info');
    signinInfo.style.display = 'none';
    setCookie('userAccess', []);
    sisoBlock.current.style.display = 'block';
    loginSuccess.current.style.display = 'none';
    navigate('/');
  }
  function handlePopupInfo() {
    let signinInfo = document.querySelector('.signin_info');
    console.log(signinInfo);
    if(k.current == 1) {
      signinInfo.style.display = 'block';
      k.current = 0;
    }
    else {
      signinInfo.style.display = 'none';
      k.current = 1;
    }
  }

  return (
    <>
      <header>
        <div className="header-top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                  <li className="list-inline-item">
                    <i className="icofont-location-pin mr-2" />
                    Đà Nẵng - Việt Nam
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                    <div ref={sisoBlock}>
                      <Link to="/Signin">
                        <span className="h4" style={{fontSize: '1.8rem'}}>Đăng nhập</span>
                      </Link>
                      <span className="h4" style={{color: 'white', fontSize: '1.8rem'}}> / </span>
                      <Link to="/Signup">
                        <span className="h4" style={{fontSize: '1.8rem'}}>Đăng ký</span>
                      </Link>
                    </div>                                    
                          <div className="login_success" onClick={handlePopupInfo} ref={loginSuccess}>
                            <img className="login_success-image" alt="" src="" ref={image1} />                  
                          </div>                        
                          <div className="signin_info">
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                              <div className="info_header">
                                <img src="" className="info_header-image" alt="" ref={image2} />
                                <div className="info_header-text">
                                  <p className="info_header-text1">{userInfo[1]}</p>
                                  <p className="info_header-text2">{userInfo[3]}</p>
                                </div>                           
                              </div>
                              <div style={{position: 'relative', marginTop: '0.3rem'}} className="line" />
                              <div className="info_header-item" onClick={() => navigate('/account_info')}>
                                <i style={{fontSize: '1.8rem'}} className="fas fa-user-circle" />
                                <p className="info_header-item-text" id="profileRedirect" style={{marginRight: '2rem'}}>Hồ sơ cá nhân</p>
                              </div>
                              <div style={{position: 'relative', marginTop: '0.3rem'}} className="line" />                                                       
                              <div className="info_header-item" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt" />
                                <p className="signout_text" style={{marginRight: '2rem'}}>Đăng xuất</p>
                              </div>
                            </div>
                          </div>                                        
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navigation bg-light"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              WIBU MEDICAL
            </a>
            <div className="row row-1">
              <ul className="box-element1">
                <li className="search-nav">
                  <input type placeholder="tìm kiếm" className="search1" />
                </li>
                <i className="fa-solid fa-magnifying-glass" />
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarmain">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Trang Chủ
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Chuyên Mục
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Sức khỏe mắt
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Tiểu đường
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Đo chỉ số BMI
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="thongtinchitietchuyenmuc.html"
                      >
                        Tính ngày rụng chứng
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="timbenhvien.html">
                    Tìm Bệnh Viện
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kiểm Tra Sức Khỏe
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <a className="dropdown-item" href="dochisoBMI.html">
                        Đo chỉ số BMI
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="tinhngayrungtrung.html"
                      >
                        Tính ngày rụng chứng
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="thongtinchuyengia.html">
                    Thông Tin Chuyên Gia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
