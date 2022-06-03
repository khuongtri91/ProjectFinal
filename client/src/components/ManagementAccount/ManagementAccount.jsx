import React from "react";
import "./style.css";

function ManagementAccount() {
  return (
    <div>
      <div className="containerss">
        <form action="">
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Tên đăng nhập</span>
              <input
                id="input_tenDN"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mật Khẩu</span>
              <input
                id="input_password"
                className="input_container"
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã người dùng</span>
              <input
                id="input_maND"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã loại tài khoản</span>
              <input
                id="input_maLoaiTK"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </form>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered">
          <thead className="title">
            <tr>
              <th>Tên đăng nhập</th>
              <th>Mật Khẩu</th>
              <th>Mã người dùng</th>
              <th>Mã loại tài khoản</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>leminhhoang</td>
              <td>*********</td>
              <td>001</td>
              <td>mã loại tài khoản</td>
            </tr>
            <tr>
              <td>leminhhoang</td>
              <td>*********</td>
              <td>001</td>
              <td>mã loại tài khoản</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="button_Container">
        <div className="divAllButton">
          <div className="button_Them">
            <button>Thêm</button>
          </div>
          <div className="button_Them">
            <button>Sửa</button>
          </div>
          <div className="button_Them">
            <button>Xóa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementAccount;