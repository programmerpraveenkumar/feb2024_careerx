export default function Header(props){
    return(
        <>
       
            <header className="header_section">
      <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.png" alt=""/>
            </a>


            <button className="navbar-toggler" type="button"  >
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className={"nav-item "+(props.currentPage=='home'?'active':'')}>
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className={"nav-item "+(props.currentPage=='about'?'active':'')}>
                    <a className="nav-link" href="/about"> About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="treatment.html">Treatment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/user">Users</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">Testimonial</a>
                  </li>
                  <li className={"nav-item "+(props.currentPage=='contact'?'active':'')}>
                    <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Login
                  </span>
                </a>
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign Up
                  </span>
                </a>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
        </>
    )
}