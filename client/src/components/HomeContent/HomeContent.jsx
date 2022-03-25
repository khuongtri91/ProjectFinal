import React, { Component } from "react";
import Slider from "react-slick";
export default class HomeContent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div className="abc">
          <div className="banner-inner pt-5">
            <div className="container">
              <div className="row"></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="thumb after-left-top">
                    <img
                      src="./images/blog/blog-6.jpg"
                      alt="img"
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="banner-details mt-4 mt-lg-0">
                    <h4>
                      <a href="#">
                        Biến chứng hậu COVID-19 ở trẻ em: Làm thế nào để giúp
                        con vượt qua?
                      </a>
                    </h4>
                    <p>
                      Tính đến thời điểm hiện tại thì có hàng trăm nghìn trẻ em
                      Việt Nam đã nhiễm SARS-CoV-2. Điều may mắn là hầu hết các
                      trẻ nhiễm COVID-19 đều nhẹ và nhanh phục hồi hơn
                    </p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="thumb after-left-top">
                    <img
                      src="./images/blog/blog-6.jpg"
                      alt="img"
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="banner-details mt-4 mt-lg-0">
                    <h6>
                      <a href="#">
                        Ho có đờm uống thuốc gì? Tác dụng phụ và những
                      </a>
                    </h6>
                    <p>Tính đến thời điểm hiện tại thì có ...</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="media border-bottom py-3">
                    <a href="#">
                      <img
                        className="mr-4"
                        src="images/blog/blog-1.jpg"
                        alt=""
                        height={70}
                      />
                    </a>
                    <div className="media-body">
                      <h6 className="my-2">
                        <a href="#">
                          Hướng dẫn bổ sung vitamin E đúng cách, đúng liều, đúng
                          lúc
                        </a>
                      </h6>
                      <span className="text-sm text-muted">3 ngày trước</span>
                    </div>
                  </div>
                  <div className="media border-bottom py-3">
                    <a href="#">
                      <img
                        className="mr-4"
                        src="images/blog/blog-8.jpg"
                        alt=""
                        height={70}
                      />
                    </a>
                    <div className="media-body">
                      <h6 className="my-2">
                        <a href="#">Đau dây chằn chéo </a>
                      </h6>
                      <span className="text-sm text-muted">1 giờ trước</span>
                    </div>
                  </div>
                  <div className="media py-3">
                    <a href="#">
                      <img
                        className="mr-4"
                        src="images/blog/blog-4.jpg"
                        alt=""
                        height={70}
                      />
                    </a>
                    <div className="media-body">
                      <h6 className="my-2">
                        <a href="#">Cái hậu Covid chủng Onmicro</a>
                      </h6>
                      <span className="text-sm text-muted">7 giờ trước</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section testimonial-2 gray-bg">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-title text-center">
                    <h2>Thông Tin Chuyên Gia</h2>
                    <div className="divider mx-auto my-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="container">
            <Slider {...settings}>
              <div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <div className="testimonial-block style-2  gray-bg">
                      <i className="icofont-quote-right" />
                      <div className="testimonial-thumb">
                        <a href="thongtinchuyengia.html">
                          <img
                            src="images/team/test-thumb1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="client-info ">
                        <h4>
                          <a href="thongtinchuyengia.html">service</a>
                        </h4>
                        <span>John Partho</span>
                        <p>
                          <a href="thongtinchuyengia.html">
                            Xem Thông tin chuyên gia
                          </a>
                        </p>
                        <button className="btn-tuvan"> yêu cầu tư vấn</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <div className="testimonial-block style-2  gray-bg">
                      <i className="icofont-quote-right" />
                      <div className="testimonial-thumb">
                        <a href="thongtinchuyengia.html">
                          <img
                            src="images/team/test-thumb1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="client-info ">
                        <h4>
                          <a href="thongtinchuyengia.html">service</a>
                        </h4>
                        <span>John Partho</span>
                        <p>
                          <a href="thongtinchuyengia.html">
                            Xem Thông tin chuyên gia
                          </a>
                        </p>
                        <button className="btn-tuvan"> yêu cầu tư vấn</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="contact-block mb-4 mb-lg-0">
                    <div className="testimonial-block style-2  gray-bg">
                      <i className="icofont-quote-right" />
                      <div className="testimonial-thumb">
                        <a href="thongtinchuyengia.html">
                          <img
                            src="images/team/test-thumb1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="client-info ">
                        <h4>
                          <a href="thongtinchuyengia.html">service</a>
                        </h4>
                        <span>John Partho</span>
                        <p>
                          <a href="thongtinchuyengia.html">
                            Xem Thông tin chuyên gia
                          </a>
                        </p>
                        <button className="btn-tuvan"> yêu cầu tư vấn</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

// export default HomeContent;
