import React from 'react';

function OvulationCalculator() {

    return (
        <>
            <section>
                <div class="container">
                    <div class="jumbotron p-3 p-md-5 text-white rounded bg-warning">
                        <div class="col-md-6 px-0">
                            <h1 class="display-4 font-italic">Công Cụ Tính Ngày Rụng Trứng</h1>
                            <p class="text-danger">Theo dõi chu kỳ kinh nguyệt của bạn, xác định những ngày dễ thụ thai nhất để tăng cơ hội thụ thai hoặc áp dụng biện pháp tránh thai.</p>
                        </div>
                    </div>
                </div>
            </section>					
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="jumbotron text-center">Mời bạn nhập thông tin cần thiết để tính</h3> 			 
                            <form role="form"> 			  
                                <div id="metric" ng-show="units == 'imperial'">
                                    <div class="form-group">
                                        <label for="ngaydautienchukygannhat">Ngày đầu tiên của chu kỳ gần nhất</label>
                                        <input type="date"  class="form-control" />    
                                    </div>				
                                    <div class="form-group">
                                        <label for="weight_foot">Độ dài chu kỳ kinh nguyệt (Ngày)</label>
                                        <input type="number" placeholder="Độ dài chu kỳ kinh nguyệt (Ngày)" class="form-control" />    
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button type="button" name="" id="" class="btn btn-primary" btn-lg btn-block>Tính</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OvulationCalculator;