import React from "react";

function BMICalculator() {
  return (
    <>
      <div>
        <section>
          <div className="container">
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-warning">
              <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">Tính Chỉ Số BMI</h1>
                <p className="text-danger">
                  Sử dụng công cụ này để kiểm tra chỉ số khối cơ thể (BMI) để
                  biết bạn có đang ở mức cân nặng hợp lý hay không. Bạn cũng có
                  thể kiểm tra chỉ số BMI của trẻ tại đây.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="jumbotron text-center">
                  Mời bạn nhập thông tin cần thiết để tính
                </h3>
                <form role="form">
                  <div className="form-group">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          ng-model="units"
                          defaultValue="nam"
                          name="gioitinh"
                        />
                        <span className="label label-danger">Nam</span>
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          ng-model="units"
                          defaultValue="nu"
                          name="gioitinh"
                        />
                        <span className="label label-success">Nữ</span>
                      </label>
                    </div>
                  </div>
                  <div id="metric" ng-show="units == 'imperial'">
                    <div className="form-group">
                      <label htmlFor="weight">Cân Nặng (kg):</label>
                      <input
                        type="number"
                        placeholder="Cân Nặng (kg):"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="weight_foot">Chiều Cao (cm)</label>
                      <input
                        type="number"
                        placeholder="Chiều Cao (cm)"
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <button
                type="button"
                name
                id
                className="btn btn-primary"
                btn-lg
                btn-block
              >
                Tính
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BMICalculator;
