import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Home extends Component{
  
    render(){
        return(
                <>
                     <Header currentPage="home"/>
                     <section className="slider_section ">
      <div className="dot_design">
        <img src="assets/images/dots.png" alt=""/>
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="assets/images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="assets/images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="assets/images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <img src="assets/images/prev.png" alt=""/>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <img src="assets/images/next.png" alt=""/>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    </section>
{/*   
  </div> */}

  <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <h4>
              BOOK <span>APPOINTMENT</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Patient Name </label>
                <input type="text" className="form-control" id="inputPatientName" placeholder=""/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDoctorName">Doctor's Name</label>
                <select name="" className="form-control wide" id="inputDoctorName">
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                </select>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDepartmentName">Department's Name</label>
                <select name="" className="form-control wide" id="inputDepartmentName">
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                </select>
              </div>
            </div>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPhone">Phone Number</label>
                <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX"/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputSymptoms">Symptoms</label>
                <input type="text" className="form-control" id="inputSymptoms" placeholder=""/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDate">Choose Date </label>
                <div className="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                  <input type="text" className="form-control" readonly/>
                  <span className="input-group-addon date_icon">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <button type="submit" className="btn ">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


  /

  <section className="about_section">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="assets/images/about-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About <span>Hospital</span>
              </h2>
            </div>
            <p>
              has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="treatment_section layout_padding">
    <div className="side_img">
      <img src="assets/images/treatment-side-img.jpg" alt=""/>
    </div>
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Hospital <span>Treatment</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/t1.png" alt=""/>
            </div>
            <div className="detail-box">
              <h4>
                Nephrologist Care
              </h4>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/t2.png" alt=""/>
            </div>
            <div className="detail-box">
              <h4>
                Eye Care
              </h4>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/t3.png" alt=""/>
            </div>
            <div className="detail-box">
              <h4>
                Pediatrician Clinic
              </h4>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/t4.png" alt=""/>
            </div>
            <div className="detail-box">
              <h4>
                Parental Care
              </h4>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section className="team_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our <span>Doctors</span>
        </h2>
      </div>
      <div className="carousel-wrap ">
        <div className="owl-carousel team_carousel">
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="assets/images/team1.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Hennry
                </h5>
                <h6>
                  MBBS
                </h6>
                <div className="social_box">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="assets/images/team2.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Jenni
                </h5>
                <h6>
                  MBBS
                </h6>
                <div className="social_box">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="assets/images/team3.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Morco
                </h5>
                <h6>
                  MBBS
                </h6>
                <div className="social_box">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          <span>Testimonial</span>
        </h2>
      </div>
    </div>
    <div className="container px-0">
      <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Morijorch
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Rochak
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Brad Johns
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Get In Touch
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            <form action="">
              <div>
                <input type="text" placeholder="Full Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="assets/images/contact-img.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
                    <Footer/>
                </>
        )

    }
}