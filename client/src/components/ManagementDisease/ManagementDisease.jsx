import React from "react";
import "./ManagementDisease.css";
function ManagementDisease() {
  return (
    <div>
      <div className="containerss">
        <form action="">
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã bệnh</span>
              <input
                id="input_maBenh"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Tên bệnh</span>
              <input
                id="input_tenbenh"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Chi tiết bệnh</span>
              <input
                id="input_Chitietbenh"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã người tư vấn</span>
              <input
                id="input_MaNTV"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã bệnh viện</span>
              <input
                id="input_MaBV"
                className="input_container"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div className="frm_MaUser">
            <div className="input-box">
              <span className="details">Mã chuyên mục</span>
              <input
                id="input_Machuyenmuc"
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
              <th>Mã bệnh</th>
              <th>Tên bệnh</th>
              <th>Chi tiết bệnh</th>
              <th>Mã người tư vấn</th>
              <th>Mã bệnh viện</th>
              <th>Mã chuyên mục</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0004</td>
              <td>Đau mắt</td>
              <td>abcdyzya</td>
              <td>0023</td>
              <td>05- Nguyen Hoang - Da Nang</td>
              <td>Mắt</td>
            </tr>
            <tr>
              <td>0004</td>
              <td>Thoát vị đĩa đệm</td>
              <td>abcdyzya</td>
              <td>0023</td>
              <td>05- Nguyen Hoang - Da Nang</td>
              <td>Phần mềm</td>
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

export default ManagementDisease;