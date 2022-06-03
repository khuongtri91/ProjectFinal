import React from 'react';
import "./style.css";

function ManagementAccountType() {
    return (
        <div>
            <div className="containerss">
        <form action="">
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã loại tài khoản</span>
              <input
                id="input_MaLTK"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Tên loại tài khoản</span>
              <input
                id="input_TenLTK"
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
              <th>Mã loại tài khoản</th>
              <th>Tên loại tài khoản</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>abcd123</td>
              <td>client</td>
            </tr>
            <tr>
              <td>leminhhoang</td>
              <td>admin</td>
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

export default ManagementAccountType;