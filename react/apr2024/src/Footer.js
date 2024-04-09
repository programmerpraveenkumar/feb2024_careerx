export default function Footer(){
    return (
        <>
        <section className="info_section ">
    <div className="container">
      <div className="info_top">
        <div className="info_logo">
          <a href="">
            <img src="assets/images/logo.png" alt=""/>
          </a>
        </div>
        <div className="info_form">
          <form action="">
            <input type="email" placeholder="Your email"/>
            <button>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="info_bottom layout_padding2">
        <div className="row info_main_row">
          <div className="col-md-6 col-lg-3">
            <h5>
              Address
            </h5>
            <div className="info_contact">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
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
          <div className="col-md-6 col-lg-3">
            <div className="info_links">
              <h5>
                Useful link
              </h5>
              <div className="info_links_menu">
                <a className="active" href="index.html">
                  Home
                </a>
                <a href="about.html">
                  About
                </a>
                <a href="treatment.html">
                  Treatment
                </a>
                <a href="doctor.html">
                  Doctors
                </a>
                <a href="testimonial.html">
                  Testimonial
                </a>
                <a href="contact.html">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_post">
              <h5>
                LATEST POSTS
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="assets/images/post1.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
              <div className="post_box">
                <div className="img-box">
                  <img src="assets/images/post2.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_post">
              <h5>
                News
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="assets/images/post3.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
              <div className="post_box">
                <div className="img-box">
                  <img src="assets/images/post4.png" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
  </>
    )
}